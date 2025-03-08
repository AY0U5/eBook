package com.backend.dao;

import com.backend.bean.BookCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookCategoryDao extends JpaRepository<BookCategory,Long> {

    BookCategory findByName(String name);
    BookCategory findByRef(String ref);
    int deleteByName(String name);
    int deleteByRef(String ref);
    List<BookCategory> findByNameContaining(String name);
}
