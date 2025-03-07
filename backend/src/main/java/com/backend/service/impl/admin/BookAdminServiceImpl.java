package com.backend.service.impl.admin;

import com.backend.bean.Book;
import com.backend.bean.BookCategory;
import com.backend.dao.BookDao;
import com.backend.service.facade.admin.BookAdminService;
import com.backend.service.facade.admin.BookCategoryAdminService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class BookAdminServiceImpl implements BookAdminService {

    private final BookDao dao;
    private final BookCategoryAdminService bookCategoryAdminService;

    public BookAdminServiceImpl(
            BookDao dao,
            BookCategoryAdminService bookCategoryAdminService
    ) {
        this.dao = dao;
        this.bookCategoryAdminService = bookCategoryAdminService;
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
    public List<Book> findByAuthor(String author) {
        return dao.findByAuthor(author);
    }

    @Override
    public List<Book> findAll() {
        return dao.findAll();
    }

    @Override
    public Book save(Book book) {
        Book byTitleAndAuthorLastName = dao.findByTitleAndAuthor(book.getTitle(), book.getAuthor());
        if (byTitleAndAuthorLastName != null) {
            throw new RuntimeException("Book already exists");
        }
        BookCategory byRef = bookCategoryAdminService.findByRef(book.getCategory().getRef());
        if (byRef == null) {
            throw new RuntimeException("Category not found");
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
