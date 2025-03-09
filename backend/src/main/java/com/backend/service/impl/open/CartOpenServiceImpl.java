package com.backend.service.impl.open;

import com.backend.bean.Book;
import com.backend.bean.Cart;
import com.backend.dao.CartDao;
import com.backend.service.facade.open.CartOpenService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartOpenServiceImpl implements CartOpenService {

    private final CartDao dao;

    public CartOpenServiceImpl(CartDao dao) {
        this.dao = dao;
    }

    @Override
    public List<Cart> findAll() {
        return dao.findAll();
    }

    public Cart addToCart(Book book) {
        Cart cart =new Cart();
        return dao.save(cart);
    }

    public void deleteById(Long aLong) {
        dao.deleteById(aLong);
    }
}
