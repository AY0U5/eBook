package com.backend.service.impl.admin;

import com.backend.bean.Book;
import com.backend.dao.BookDao;
import com.backend.service.facade.admin.BookAdminService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class BookAdminServiceImpl implements BookAdminService {

    private final BookDao dao;

    public BookAdminServiceImpl(BookDao dao) {
        this.dao = dao;
    }

    @Override
    public List<Book> findByTitle(String title) {
        return dao.findByTitle(title);
    }

    @Override
    public Book findByRef(String ref) {
        return dao.findByRef(ref);
    }

    @Transactional
    @Override
    public int deleteByRef(String ref) {
        return dao.deleteByRef(ref);
    }

    @Override
    public List<Book> findByAuthorFirstName(String firstName) {
        return dao.findByAuthorFirstName(firstName);
    }

    @Override
    public List<Book> findByAuthorId(Long id) {
        return dao.findByAuthorId(id);
    }

    @Override
    public List<Book> findAll() {
        return dao.findAll();
    }

    @Override
    public Book save(Book book) {
        Book byTitleAndAuthorLastName = dao.findByTitleAndAuthorLastName(book.getTitle(), book.getAuthor().getLastName());
        if (byTitleAndAuthorLastName != null) {
            throw new RuntimeException("Book already exists");
        }
        String ref = book.getTitle().toLowerCase().replace(" ", "-")+ "-" +dao.count();
        book.setRef(ref);
        return dao.save(book);
    }

    @Override
    public Page<Book> findAll(Pageable pageable) {
        return dao.findAll(pageable);
    }
}
