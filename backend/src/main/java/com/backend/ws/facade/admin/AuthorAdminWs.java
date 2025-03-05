package com.backend.ws.facade.admin;

import com.backend.bean.Author;
import com.backend.service.facade.admin.AuthorAdminService;
import com.backend.ws.converter.AuthorConverter;
import com.backend.ws.dto.AuthorDto;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/authors/")
public class AuthorAdminWs {

    private final AuthorAdminService authorService;
    private final AuthorConverter converter;

    public AuthorAdminWs(AuthorAdminService authorService, AuthorConverter converter) {
        this.authorService = authorService;
        this.converter = converter;
    }

    @GetMapping("")
    public List<AuthorDto> findAll() {
        return converter.toDtoList(authorService.findAll());
    }

    @PostMapping("register")
    public AuthorDto save(@RequestBody @Valid AuthorDto author) {
        Author item = converter.toEntity(author);
        Author saved = authorService.save(item);
        return converter.toDto(saved);
    }

    @DeleteMapping("id/{id}")
    public void deleteById(@PathVariable Long id) {
        authorService.deleteById(id);
    }

    public Page<Author> findAll(Pageable pageable) {
        return authorService.findAll(pageable);
    }

    @GetMapping("username/{username}")
    public AuthorDto findByUsername(@PathVariable String username) {
        return converter.toDto(authorService.findByUsername(username));
    }

    @GetMapping("firstName/{firstName}")
    public List<AuthorDto> findByFirstName(@PathVariable String firstName) {
        return converter.toDtoList(authorService.findByFirstName(firstName));
    }

    @GetMapping("lastName/{lastName}")
    public List<AuthorDto> findByLastName(@PathVariable String lastName) {
        return converter.toDtoList(authorService.findByLastName(lastName));
    }
}
