package com.backend.service.facade.open;

import com.backend.bean.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface BookOpenService {
    List<Book> findByTitle(String title);

    Book findByRef(String ref);


    List<Book> findByAuthor(String author);

    List<Book> findAll();


    Page<Book> findAll(Pageable pageable);


    List<Book> findByTitleContainingOrAuthorContainingOrCategoryNameContaining(String title, String author, String categoryName);
}
