package com.backend.service.facade.admin;

import com.backend.bean.BookCategory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface BookCategoryAdminService {
    @Transactional
    int deleteByRef(String ref);

    @Transactional
    int deleteByName(String name);

    BookCategory findByRef(String ref);

    BookCategory findByName(String name);

    List<BookCategory> findAll();

    BookCategory save(BookCategory category);

    Page<BookCategory> findAll(Pageable pageable);

    BookCategory edit(BookCategory category);

    List<BookCategory> findByNameContaining(String name);
}
