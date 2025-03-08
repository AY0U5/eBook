package com.backend.dao;

import com.backend.bean.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookDao extends JpaRepository<Book,Long> {

    List<Book> findByTitle(String title);
    Book findByRef(String ref);
    int deleteByRef(String ref);
    List<Book> findByAuthor(String author);
    Book findByTitleAndAuthor(String title, String author);
    List<Book> findByTitleContainingOrAuthorContainingOrCategoryNameContaining(String title, String author, String categoryName);
}
