package com.backend.service.impl.admin;

import com.backend.bean.Book;
import com.backend.bean.BookCategory;
import com.backend.dao.BookDao;
import com.backend.service.facade.admin.BookAdminService;
import com.backend.service.facade.admin.BookCategoryAdminService;
import com.backend.util.MinioService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class BookAdminServiceImpl implements BookAdminService {

    private final BookDao dao;
    private final BookCategoryAdminService bookCategoryAdminService;
    private final MinioService minioService;

    public BookAdminServiceImpl(
            BookDao dao,
            BookCategoryAdminService bookCategoryAdminService,
            MinioService minioService
    ) {
        this.dao = dao;
        this.bookCategoryAdminService = bookCategoryAdminService;
        this.minioService = minioService;
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
        Book byRef = dao.findByRef(ref);
        if (byRef == null) {
            throw new RuntimeException("Book not found");
        }
        minioService.deleteFile(byRef.getPictureName());
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

    @Override
    public Book edit(Book book){
        Book byRef = dao.findByRef(book.getRef());
        if (byRef == null) {
            throw new RuntimeException("Book not found");
        }
        BookCategory byRef1 = bookCategoryAdminService.findByRef(book.getCategory().getRef());
        if (byRef1 == null) {
            throw new RuntimeException("Category not found");
        }
        minioService.deleteFile(byRef.getPictureName());
        copy(book, byRef);
        return dao.save(book);
    }

    @Override
    public List<Book> findByTitleContainingOrAuthorContainingOrCategoryNameContaining(String title, String author, String categoryName) {
        return dao.findByTitleContainingOrAuthorContainingOrCategoryNameContaining(
                title.substring(0, 1).toUpperCase() + title.substring(1).toLowerCase(),
                author.substring(0, 1).toUpperCase() + author.substring(1).toLowerCase(),
                categoryName.substring(0, 1).toUpperCase()+categoryName.substring(1).toLowerCase());
    }

    private void copy(Book source, Book target) {
        target.setTitle(source.getTitle());
        target.setRef(source.getRef());
        target.setDescription(source.getDescription());
        target.setPrice(source.getPrice());
        target.setAuthor(source.getAuthor());
        target.setCategory(source.getCategory());
        target.setPictureName(source.getPictureName());
    }
}
