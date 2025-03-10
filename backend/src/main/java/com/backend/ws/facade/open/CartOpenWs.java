package com.backend.ws.facade.open;

import com.backend.bean.Cart;
import com.backend.service.facade.open.CartOpenService;
import com.backend.ws.converter.BookConverter;
import com.backend.ws.converter.CartConverter;
import com.backend.ws.dto.BookDto;
import com.backend.ws.dto.CartDto;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("open/carts/")
public class CartOpenWs {

    private final CartOpenService service;
    private final CartConverter converter;
    private final BookConverter bookConverter;

    public CartOpenWs(
            CartOpenService service,
            CartConverter converter,
            BookConverter bookConverter
    ) {
        this.service = service;
        this.converter = converter;
        this.bookConverter = bookConverter;
    }

    /*@GetMapping("")
    public List<CartDto> findAll() {
        return converter.toDtoList(service.findAll());
    }*/

    @PutMapping("book")
    public CartDto addToCart(@RequestBody BookDto book) {
        Cart cart = service.addToCart(bookConverter.toEntity(book));
        return converter.toDto(cart);
    }

    @GetMapping("")
    public CartDto findLastCart() {
        return converter.toDto(service.findLastCart());
    }
}
