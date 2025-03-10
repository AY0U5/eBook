package com.backend.ws.converter;

import com.backend.bean.Cart;
import com.backend.ws.dto.CartDto;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class CartConverter {

    private final BookConverter bookConverter;

    public CartConverter(BookConverter bookConverter) {
        this.bookConverter = bookConverter;
    }

    public CartDto toDto(Cart cart) {
        if (cart == null) {
            return null;
        }

        CartDto dto = new CartDto();
        dto.setId(cart.getId());
        dto.setRef(cart.getRef());
        dto.setQuantity(cart.getQuantity());

        if (cart.getBooks() != null) {
            dto.setBooks(cart.getBooks().stream()
                    .map(bookConverter::toDto)
                    .collect(Collectors.toList()));
        }

        return dto;
    }

    public Cart toEntity(CartDto dto) {
        if (dto == null) {
            return null;
        }

        Cart cart = new Cart();
        cart.setId(dto.getId());
        cart.setRef(dto.getRef());
        cart.setQuantity(dto.getQuantity());

        if (dto.getBooks() != null) {
            cart.setBooks(dto.getBooks().stream()
                    .map(bookConverter::toEntity)
                    .collect(Collectors.toList()));
        }

        return cart;
    }

    public List<CartDto> toDtoList(List<Cart> carts) {
        if (carts == null || carts.isEmpty()) {
            return List.of();
        }
        return carts.stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    public List<Cart> toEntityList(List<CartDto> cartDtos) {
        if (cartDtos == null || cartDtos.isEmpty()) {
            return List.of();
        }
        return cartDtos.stream()
                .map(this::toEntity)
                .collect(Collectors.toList());
    }
}
