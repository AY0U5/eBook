package com.backend.service.facade.open;

import com.backend.bean.Cart;

import java.util.List;

public interface CartOpenService {
    List<Cart> findAll();
}
