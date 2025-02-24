package com.backend.security.service.impl;

import com.backend.security.bean.Role;
import com.backend.security.dao.RoleDao;
import com.backend.security.service.facade.RoleService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleServiceImpl implements RoleService {

    private RoleDao roleDao;

    public RoleServiceImpl(RoleDao roleDao) {
        this.roleDao = roleDao;
    }

    @Override
    public Role findByName(String name) {
        return roleDao.findByName(name);
    }

    @Override
    public List<Role> findAll() {
        return roleDao.findAll();
    }

    @Override
    public Role save(Role role) {
        return roleDao.save(role);
    }
}
