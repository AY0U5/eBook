package com.backend.dao;

import com.backend.bean.Author;
import jakarta.validation.constraints.Email;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AuthorDao extends JpaRepository<Author,Long> {

    Author findByUsername(String username);
    List<Author> findByFirstName(String firstName);
    List<Author> findByLastName(String lastName);
}
