package com.backend.service.impl.admin;

import com.backend.bean.BookCategory;
import com.backend.dao.BookCategoryDao;
import com.backend.service.facade.admin.BookCategoryAdminService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class BookCategoryAdminServiceImpl implements BookCategoryAdminService {

    private final BookCategoryDao dao;

    public BookCategoryAdminServiceImpl(BookCategoryDao dao) {
        this.dao = dao;
    }

    @Transactional
    @Override
    public int deleteByRef(String ref) {
        return dao.deleteByRef(ref);
    }

    @Transactional
    @Override
    public int deleteByName(String name) {
        return dao.deleteByName(name);
    }

    @Override
    public BookCategory findByRef(String ref) {
        return dao.findByRef(ref);
    }

    @Override
    public BookCategory findByName(String name) {
        return dao.findByName(name);
    }

    @Override
    public List<BookCategory> findAll() {
        return dao.findAll();
    }

    @Override
    public BookCategory save(BookCategory category) {
        BookCategory byName = dao.findByName(category.getName().toLowerCase());
        if (byName != null) {
            throw new IllegalArgumentException("Category with name " + category.getName() + " already exists");
        }
        String ref = category.getName().replace(" ", "-") + "-" + dao.count();
        category.setRef(ref);
        return dao.save(category);
    }

    @Override
    public Page<BookCategory> findAll(Pageable pageable) {
        return dao.findAll(pageable);
    }

    @Override
    public BookCategory edit(BookCategory category){
        BookCategory byRef = dao.findByRef(category.getRef());
        if(byRef == null){
            throw new IllegalArgumentException("Category with ref " + category.getRef() + " does not exist");
        }
        copy(category, byRef);
        return dao.save(byRef);
    }

    private void copy(BookCategory source, BookCategory target){
        if(source.getName() != null){
            target.setName(source.getName());
        }
        if(source.getDescription() != null){
            target.setDescription(source.getDescription());
        }
    }
}
