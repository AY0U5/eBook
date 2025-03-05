package com.backend.service.facade.admin;

import com.backend.bean.Author;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface AuthorAdminService {
    List<Author> findAll();

    Author save(Author author);

    void deleteById(Long aLong);

    Page<Author> findAll(Pageable pageable);

    Author findByUsername(String username);

    List<Author> findByFirstName(String firstName);

    List<Author> findByLastName(String lastName);
}
