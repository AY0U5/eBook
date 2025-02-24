package com.backend.security.dao;

import com.backend.security.bean.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TokenDao extends JpaRepository<Token,Long> {

}
