package com.backend.ws.dto;


import java.math.BigDecimal;

public class BookDto {

    private Long id;
    private String title;
    private String ref;
    private String description;
    private BigDecimal price;
    private String author;
    private BookCategoryDto category;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getRef() {
        return ref;
    }

    public void setRef(String ref) {
        this.ref = ref;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public BookCategoryDto getCategory() {
        return category;
    }

    public void setCategory(BookCategoryDto category) {
        this.category = category;
    }
}
