package com.backend.bean;

import jakarta.persistence.*;

@Entity
public class BookCategory {

    @Id
    @SequenceGenerator(name = "book_category_seq",sequenceName = "book_category_seq",allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE , generator = "book_category_seq")
    private Long id;
    private String name;
    @Column(length = 2000)
    private String description;
    private String ref;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getRef() {
        return ref;
    }

    public void setRef(String ref) {
        this.ref = ref;
    }
}
