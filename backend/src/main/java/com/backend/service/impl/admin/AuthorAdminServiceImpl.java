package com.backend.service.impl.admin;

import com.backend.bean.Author;
import com.backend.dao.AuthorDao;
import com.backend.service.facade.admin.AuthorAdminService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthorAdminServiceImpl implements AuthorAdminService {

    private final AuthorDao dao;

    public AuthorAdminServiceImpl(AuthorDao dao) {
        this.dao = dao;
    }

    @Override
    public List<Author> findAll() {
        return dao.findAll();
    }

    @Override
    public Author save(Author author) {
        Author byUsername = dao.findByUsername(author.getUsername());
        if (byUsername != null) {
            throw new RuntimeException("Username already exists");
        }
        return dao.save(author);
    }

    @Override
    public void deleteById(Long aLong) {
        dao.deleteById(aLong);
    }

    @Override
    public Page<Author> findAll(Pageable pageable) {
        return dao.findAll(pageable);
    }

    @Override
    public Author findByUsername(String username) {
        return dao.findByUsername(username);
    }

    @Override
    public List<Author> findByFirstName(String firstName) {
        return dao.findByFirstName(firstName);
    }

    @Override
    public List<Author> findByLastName(String lastName) {
        return dao.findByLastName(lastName);
    }
}
