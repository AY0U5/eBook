package com.backend.security.ws.facade;

import com.backend.security.bean.Token;
import com.backend.security.bean.User;
import com.backend.security.service.facade.UserService;
import com.backend.security.ws.converter.TokenConverter;
import com.backend.security.ws.converter.UserConverter;
import com.backend.security.ws.dto.AuthRequest;
import com.backend.security.ws.dto.TokenDto;
import com.backend.security.ws.dto.UserDto;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("auth/")
public class AuthWs {

    private final UserService userService;
    private final UserConverter converter;
    private final TokenConverter tokenConverter;

    public AuthWs(
            UserService userService,
            UserConverter converter,
            TokenConverter tokenConverter
    ) {
        this.userService = userService;
        this.converter = converter;
        this.tokenConverter = tokenConverter;
    }

    @GetMapping("username/{username}")
    public User findByUsername(@PathVariable String username) {
        return userService.findByUsername(username);
    }

    @PostMapping("register")
    public UserDto save(@RequestBody @Valid User entity) {
        User save = userService.save(entity);
        return converter.toDto(save);
    }

    @PostMapping("authenticate")
    public TokenDto authenticate(@RequestBody AuthRequest authRequest) {
        Token authenticate = userService.authenticate(authRequest);
        return tokenConverter.toDto(authenticate);
    }
}
