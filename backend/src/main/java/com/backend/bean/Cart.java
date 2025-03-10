package com.backend.bean;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.util.List;

@Entity
public class Cart {

    @Id
    @SequenceGenerator(name = "cart_seq",sequenceName = "cart_seq",allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "cart_seq")
    private Long id;
    @OneToMany
    private List<Book> books;
    private int quantity;
    private String ref;
    private BigDecimal total;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Book> getBooks() {
        return books;
    }

    public void setBooks(List<Book> books) {
        this.books = books;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getRef() {
        return ref;
    }

    public void setRef(String ref) {
        this.ref = ref;
    }

    public BigDecimal getTotal() {
        return total;
    }

    public void setTotal(BigDecimal total) {
        this.total = total;
    }
}
