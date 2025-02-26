package com.backend.bean;

import com.backend.security.bean.User;
import jakarta.persistence.*;

@Entity
public class Author extends User {

    private String bio;
    private String dateOfBirth;
    private String nationality;

    public Author() {
        super();
    }

    @Id
    @SequenceGenerator(name = "author_seq",sequenceName = "author_seq",allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE , generator = "author_seq")
    public Long getId() {
        return this.id;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }
}
