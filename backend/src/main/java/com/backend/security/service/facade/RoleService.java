package com.backend.security.service.facade;

import com.backend.security.bean.Role;

import java.util.List;

public interface RoleService {
    Role findByName(String name);

    List<Role> findAll();

    Role save(Role role);
}
