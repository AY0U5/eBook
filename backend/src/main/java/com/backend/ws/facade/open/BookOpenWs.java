package com.backend.ws.facade.open;

import com.backend.bean.Book;
import com.backend.service.facade.open.BookOpenService;
import com.backend.ws.converter.BookConverter;
import com.backend.ws.dto.BookDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("open/books/")
public class BookOpenWs {

    private final BookOpenService bookOpenService;
    private final BookConverter converter;

    public BookOpenWs(
            BookOpenService bookOpenService,
            BookConverter converter
    ) {
        this.bookOpenService = bookOpenService;
        this.converter = converter;
    }

    @GetMapping("title/{title}")
    public List<BookDto> findByTitle(@PathVariable String title) {
        return converter.toDtoList(bookOpenService.findByTitle(title));
    }

    @GetMapping("ref/{ref}")
    public BookDto findByRef(@PathVariable String ref) {
        return converter.toDto(bookOpenService.findByRef(ref));
    }

    @GetMapping("author/{author}")
    public List<BookDto> findByAuthor(@PathVariable String author) {
        return converter.toDtoList(bookOpenService.findByAuthor(author));
    }

    @GetMapping("")
    public List<BookDto> findAll() {
        return converter.toDtoList(bookOpenService.findAll());
    }


    @GetMapping("search")
    public List<Book> findByTitleContainingOrAuthorContainingOrCategoryNameContaining(
            @RequestParam(required = false) String title,
            @RequestParam(required = false) String author,
            @RequestParam(required = false) String categoryName) {
        return bookOpenService.findByTitleContainingOrAuthorContainingOrCategoryNameContaining(title, author, categoryName);
    }

    public Page<Book> findAll(Pageable pageable) {
        return bookOpenService.findAll(pageable);
    }
}
