package com.backend.ws.facade.admin;

import com.backend.bean.Book;
import com.backend.service.facade.admin.BookAdminService;
import com.backend.util.MinioService;
import com.backend.ws.converter.BookConverter;
import com.backend.ws.dto.BookDto;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("admin/books/")
public class BookAdminWs {

    private final BookAdminService bookAdminService;
    private final BookConverter converter;
    private final MinioService minioService;
    private final ObjectMapper objectMapper;

    public BookAdminWs(
            BookAdminService bookAdminService,
            BookConverter converter,
            MinioService minioService,
            ObjectMapper objectMapper
    ) {
        this.bookAdminService = bookAdminService;
        this.converter = converter;
        this.minioService = minioService;
        this.objectMapper = objectMapper;
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
    public BookDto save(
            @RequestParam("item") String book,
            @RequestParam("file") MultipartFile file
    ) throws JsonProcessingException {
        BookDto dto = objectMapper.readValue(book, BookDto.class);
        Book entity = converter.toEntity(dto);
        String filename = minioService.uploadFile(file);
        entity.setPictureName(filename);
        return converter.toDto(bookAdminService.save(entity));
    }

    public Page<Book> findAll(Pageable pageable) {
        return bookAdminService.findAll(pageable);
    }
}
