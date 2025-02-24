package com.backend.security.bean;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "_token")
public class Token {

    @Id
    @SequenceGenerator(name = "token_seq",sequenceName = "token_seq",allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE , generator = "token_seq")
    private Long id;
    private String token;
    private LocalDateTime expiredAt;
    private LocalDateTime createdAt;
    @ManyToOne
    private User user;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public LocalDateTime getExpiredAt() {
        return expiredAt;
    }

    public void setExpiredAt(LocalDateTime expiredAt) {
        this.expiredAt = expiredAt;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
