package com.backend.ws.facade.admin;

import com.backend.bean.Book;
import com.backend.service.facade.admin.BookAdminService;
import com.backend.ws.converter.BookConverter;
import com.backend.ws.dto.BookDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("admin/books/")
public class BookAdminWs {

    private final BookAdminService bookAdminService;
    private final BookConverter converter;

    public BookAdminWs(BookAdminService bookAdminService, BookConverter converter) {
        this.bookAdminService = bookAdminService;
        this.converter = converter;
    }

    @GetMapping("title/{title}")
    public List<BookDto> findByTitle(@PathVariable String title) {
        return converter.toDtoList(bookAdminService.findByTitle(title));
    }

    @GetMapping("ref/{ref}")
    public BookDto findByRef(@PathVariable String ref) {
        return converter.toDto(bookAdminService.findByRef(ref));
    }

    @DeleteMapping("ref/{ref}")
    public int deleteByRef(@PathVariable String ref) {
        return bookAdminService.deleteByRef(ref);
    }

    @GetMapping("author/{author}")
    public List<BookDto> findByAuthor(@PathVariable String author) {
        return converter.toDtoList(bookAdminService.findByAuthor(author));
    }

    @GetMapping("")
    public List<BookDto> findAll() {
        return converter.toDtoList(bookAdminService.findAll());
    }

    @PostMapping("register")
    public BookDto save(@RequestBody BookDto book) {
        Book entity = converter.toEntity(book);
        return converter.toDto(bookAdminService.save(entity));
    }

    public Page<Book> findAll(Pageable pageable) {
        return bookAdminService.findAll(pageable);
    }
}
