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

    @Override
    public Cart save(Cart cart) {
        return dao.save(cart);
    }

    @Override
    public Cart findByRef(String ref) {
        return dao.findByRef(ref);
    }

    @Override
    public Cart addToCart(Book book) {
        String ref = "cart-"+(dao.count() - 1);
        Cart cart = dao.findByRef(ref);
        if (cart != null){
            cart.getBooks().add(book);
            cart.setQuantity(cart.getBooks().size());
            cart.setTotal(cart.getTotal().add(book.getPrice()));
            return dao.save(cart);
        }else {
            throw new RuntimeException("Cart not found");
        }
    }

    @Override
    public Cart findLastCart(){
        String ref = "cart-"+(dao.count() - 1);
        return dao.findByRef(ref);
    }

    @Override
    public Cart removeBook(Book book){
        String ref = "cart-"+(dao.count() - 1);
        Cart cart = dao.findByRef(ref);
        if (cart != null){
            boolean removed = cart.getBooks().removeIf(b-> b.getId()==book.getId());
            if (removed) {
                cart.setQuantity(cart.getBooks().size());
                cart.setTotal(cart.getTotal().subtract(book.getPrice()));
                return dao.save(cart);
            }else {
                throw new RuntimeException("Book not found in cart");
            }
        }else {
            throw new RuntimeException("Cart not found");
        }
    }
}
