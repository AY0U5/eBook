package com.backend.ws.facade.admin;

import com.backend.bean.BookCategory;
import com.backend.service.facade.admin.BookCategoryAdminService;
import com.backend.ws.converter.BookCategoryConverter;
import com.backend.ws.dto.BookCategoryDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/book-categories/")
public class BookCategoryAdminWs {

    private final BookCategoryAdminService bookCategoryAdminService;
    private final BookCategoryConverter converter;

    public BookCategoryAdminWs(BookCategoryAdminService bookCategoryAdminService, BookCategoryConverter converter) {
        this.bookCategoryAdminService = bookCategoryAdminService;
        this.converter = converter;
    }

    @DeleteMapping("/ref/{ref}")
    public int deleteByRef(@PathVariable String ref) {
        return bookCategoryAdminService.deleteByRef(ref);
    }

    @DeleteMapping("/name/{name}")
    public int deleteByName(@PathVariable String name) {
        return bookCategoryAdminService.deleteByName(name);
    }

    @GetMapping("/ref/{ref}")
    public BookCategoryDto findByRef(@PathVariable String ref) {
        return converter.toDto(bookCategoryAdminService.findByRef(ref));
    }

    @GetMapping("/name/{name}")
    public List<BookCategory> findByNameContaining(@PathVariable String name) {
        return bookCategoryAdminService.findByNameContaining(name);
    }

    @GetMapping("")
    public List<BookCategoryDto> findAll() {
        return converter.toDtoList(bookCategoryAdminService.findAll());
    }

    @PostMapping("register")
    public BookCategoryDto save(@RequestBody BookCategoryDto category) {
        BookCategory entity = converter.toEntity(category);
        BookCategory saved = bookCategoryAdminService.save(entity);
        return converter.toDto(saved);
    }

    @PutMapping("edit")
    public BookCategoryDto edit(@RequestBody BookCategoryDto category) {
        BookCategory entity = converter.toEntity(category);
        BookCategory edit = bookCategoryAdminService.edit(entity);
        return converter.toDto(edit);
    }

    public Page<BookCategory> findAll(Pageable pageable) {
        return bookCategoryAdminService.findAll(pageable);
    }
}
