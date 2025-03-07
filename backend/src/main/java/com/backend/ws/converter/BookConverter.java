package com.backend.ws.converter;

import com.backend.bean.Book;
import com.backend.ws.dto.BookDto;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class BookConverter {

    private final BookCategoryConverter bookCategoryConverter;

    public BookConverter(BookCategoryConverter bookCategoryConverter) {
        this.bookCategoryConverter = bookCategoryConverter;
    }

    public Book toEntity(BookDto dto) {
        if (dto == null) {
            return null;
        }

        Book book = new Book();
        book.setId(dto.getId());
        book.setTitle(dto.getTitle());
        book.setRef(dto.getRef());
        book.setDescription(dto.getDescription());
        book.setPictureName(dto.getPictureName());
        book.setPrice(dto.getPrice());
        book.setAuthor(dto.getAuthor());
        book.setCategory(bookCategoryConverter.toEntity(dto.getCategory()));

        return book;
    }

    public BookDto toDto(Book book) {
        if (book == null) {
            return null;
        }

        BookDto dto = new BookDto();
        dto.setId(book.getId());
        dto.setTitle(book.getTitle());
        dto.setRef(book.getRef());
        dto.setDescription(book.getDescription());
        dto.setPictureName(book.getPictureName());
        dto.setPrice(book.getPrice());
        dto.setAuthor(book.getAuthor());
        dto.setCategory(bookCategoryConverter.toDto(book.getCategory()));

        return dto;
    }

    public List<BookDto> toDtoList(List<Book> books) {
        if (books == null) {
            return null;
        }
        return books.stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    public List<Book> toEntityList(List<BookDto> dtos) {
        if (dtos == null) {
            return null;
        }
        return dtos.stream()
                .map(this::toEntity)
                .collect(Collectors.toList());
    }
}
