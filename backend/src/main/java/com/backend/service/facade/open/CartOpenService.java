package com.backend.service.facade.open;

import com.backend.bean.Book;
import com.backend.bean.Cart;

import java.util.List;

public interface CartOpenService {
    List<Cart> findAll();

    Cart save(Cart cart);

    Cart findByRef(String ref);

    Cart addToCart(Book book);

    Cart findLastCart();
}
