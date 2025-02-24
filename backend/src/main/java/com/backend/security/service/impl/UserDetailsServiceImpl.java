package com.backend.security.service.impl;

import com.backend.security.bean.User;
import com.backend.security.dao.UserDao;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserDao dao;

    public UserDetailsServiceImpl(UserDao dao) {
        this.dao = dao;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User byUsername = dao.findByUsername(username);
        if (byUsername == null) {
            throw new UsernameNotFoundException("User not found");
        }
        return byUsername;
    }
}
