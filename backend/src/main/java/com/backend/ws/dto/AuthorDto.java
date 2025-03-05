package com.backend.ws.dto;

import com.backend.security.ws.dto.UserDto;

import java.time.LocalDateTime;
import java.util.Date;

public class AuthorDto extends UserDto{

    private String bio;
    private Date dateOfBirth;
    private String nationality;

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }
}
