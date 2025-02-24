package com.backend.security.dao;

import com.backend.security.bean.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoleDao extends JpaRepository<Role,Long> {

    Role findByName(String name);
}
