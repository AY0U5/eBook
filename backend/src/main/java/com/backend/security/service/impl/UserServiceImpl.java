package com.backend.security.service.impl;

import com.backend.security.bean.Role;
import com.backend.security.bean.Token;
import com.backend.security.bean.User;
import com.backend.security.dao.TokenDao;
import com.backend.security.dao.UserDao;
import com.backend.security.service.facade.RoleService;
import com.backend.security.service.facade.UserService;
import com.backend.security.ws.dto.AuthRequest;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    private final UserDao userDao;
    private final RoleService roleService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final TokenDao tokenDao;

    public UserServiceImpl(
            UserDao userDao,
            RoleService roleService,
            PasswordEncoder passwordEncoder,
            AuthenticationManager authenticationManager,
            JwtService jwtService,
            TokenDao tokenDao
    ) {
        this.userDao = userDao;
        this.roleService = roleService;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
        this.tokenDao = tokenDao;
    }

    @Override
    public User findByUsername(String username) {
        return userDao.findByUsername(username);
    }

    @Override
    public List<User> findAll() {
        return userDao.findAll();
    }

    @Override
    public User save(User user) {
        List<Role> roles = new ArrayList<>();
        Role roleUser = roleService.findByName("ROLE_USER");
        if (roleUser == null) {
            throw new IllegalStateException("Role USER was not initialized");
        }
        roles.add(roleUser);
        User newUser = new User();
        newUser.setUsername(user.getUsername());
        newUser.setPassword(passwordEncoder.encode(user.getPassword()));
        newUser.setFirstName(user.getFirstName());
        newUser.setLastName(user.getLastName());
        newUser.setEnabled(true);
        newUser.setAccountNonExpired(true);
        newUser.setAccountNonLocked(true);
        newUser.setCredentialsNonExpired(true);
        newUser.setRoles(roles);
        return userDao.save(newUser);
    }

    @Override
    public Token authenticate(AuthRequest authRequest) {
        var authenticate = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authRequest.getEmail(),
                        authRequest.getPassword()
                )
        );
        var claims = new HashMap<String, Object>();
        var user = ((User) authenticate.getPrincipal());
        claims.put("fullName", user.getFirstName() + " " + user.getLastName());
        String token = jwtService.generateToken(claims, user);
        Token tok = new Token();
        tok.setToken(token);
        tok.setUser(user);
        tok.setCreatedAt(LocalDateTime.now());
        tok.setExpiredAt(LocalDateTime.now().plusHours(1));
        tokenDao.save(tok);
        return tok;
    }

}
