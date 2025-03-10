package com.backend.dao;

import com.backend.bean.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartDao extends JpaRepository<Cart,Long> {

    Cart findByRef(String ref);
}
