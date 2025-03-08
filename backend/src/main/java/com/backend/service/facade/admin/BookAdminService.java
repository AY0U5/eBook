package com.backend.service.facade.admin;

import com.backend.bean.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface BookAdminService {
    List<Book> findByTitle(String title);

    Book findByRef(String ref);

    @Transactional
    int deleteByRef(String ref);

    List<Book> findByAuthor(String author);

    List<Book> findAll();

    Book save(Book book);

    Page<Book> findAll(Pageable pageable);

    Book edit(Book book);
}
