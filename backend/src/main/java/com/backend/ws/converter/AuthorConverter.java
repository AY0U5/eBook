package com.backend.ws.converter;

import com.backend.bean.Author;
import com.backend.ws.dto.AuthorDto;
import com.backend.security.ws.converter.UserConverter;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class AuthorConverter {

    private final UserConverter userConverter;

    public AuthorConverter(UserConverter userConverter) {
        this.userConverter = userConverter;
    }

    public Author toEntity(AuthorDto dto) {
        if (dto == null) {
            return null;
        }

        Author author = new Author();
        author.setId(dto.getId());
        author.setFirstName(dto.getFirstName());
        author.setLastName(dto.getLastName());
        author.setUsername(dto.getUsername());
        author.setPassword(dto.getPassword());
        author.setRoles(dto.getRoles());
        author.setAccountNonExpired(dto.isAccountNonExpired());
        author.setAccountNonLocked(dto.isAccountNonLocked());
        author.setCredentialsNonExpired(dto.isCredentialsNonExpired());
        author.setEnabled(dto.isEnabled());
        author.setProvider(dto.getProvider());
        author.setProviderId(dto.getProviderId());

        author.setBio(dto.getBio());
        author.setDateOfBirth(dto.getDateOfBirth());
        author.setNationality(dto.getNationality());

        return author;
    }

    public AuthorDto toDto(Author author) {
        if (author == null) {
            return null;
        }

        AuthorDto dto = new AuthorDto();
        dto.setId(author.getId());
        dto.setFirstName(author.getFirstName());
        dto.setLastName(author.getLastName());
        dto.setUsername(author.getUsername());
        dto.setPassword(author.getPassword());
        dto.setRoles(author.getRoles());
        dto.setAccountNonExpired(author.isAccountNonExpired());
        dto.setAccountNonLocked(author.isAccountNonLocked());
        dto.setCredentialsNonExpired(author.isCredentialsNonExpired());
        dto.setEnabled(author.isEnabled());
        dto.setProvider(author.getProvider());
        dto.setProviderId(author.getProviderId());

        dto.setBio(author.getBio());
        dto.setDateOfBirth(author.getDateOfBirth());
        dto.setNationality(author.getNationality());

        return dto;
    }

    public List<AuthorDto> toDtoList(List<Author> authors) {
        if (authors == null) {
            return null;
        }
        return authors.stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    public List<Author> toEntityList(List<AuthorDto> dtos) {
        if (dtos == null) {
            return null;
        }
        return dtos.stream()
                .map(this::toEntity)
                .collect(Collectors.toList());
    }
}
