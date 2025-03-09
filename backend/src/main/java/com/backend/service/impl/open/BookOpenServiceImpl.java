package com.backend.service.impl.open;

import com.backend.bean.Book;
import com.backend.bean.BookCategory;
import com.backend.dao.BookDao;
import com.backend.service.facade.admin.BookAdminService;
import com.backend.service.facade.admin.BookCategoryAdminService;
import com.backend.service.facade.open.BookOpenService;
import com.backend.util.MinioService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class BookOpenServiceImpl implements BookOpenService {

    private final BookDao dao;

    public BookOpenServiceImpl(
            BookDao dao
    ) {
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


    @Override
    public List<Book> findByAuthor(String author) {
        return dao.findByAuthor(author);
    }

    @Override
    public List<Book> findAll() {
        return dao.findAll();
    }


    @Override
    public Page<Book> findAll(Pageable pageable) {
        return dao.findAll(pageable);
    }


    @Override
    public List<Book> findByTitleContainingOrAuthorContainingOrCategoryNameContaining(String title, String author, String categoryName) {
        return dao.findByTitleContainingOrAuthorContainingOrCategoryNameContaining(
                title.substring(0, 1).toUpperCase() + title.substring(1).toLowerCase(),
                author.substring(0, 1).toUpperCase() + author.substring(1).toLowerCase(),
                categoryName.substring(0, 1).toUpperCase()+categoryName.substring(1).toLowerCase());
    }

}
