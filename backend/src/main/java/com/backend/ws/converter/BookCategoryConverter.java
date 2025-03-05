package com.backend.ws.converter;

import com.backend.bean.BookCategory;
import com.backend.ws.dto.BookCategoryDto;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class BookCategoryConverter {

    public BookCategory toEntity(BookCategoryDto dto) {
        if (dto == null) {
            return null;
        }

        BookCategory category = new BookCategory();
        category.setId(dto.getId());
        category.setName(dto.getName());
        category.setDescription(dto.getDescription());
        category.setRef(dto.getRef());
        return category;
    }

    public BookCategoryDto toDto(BookCategory category) {
        if (category == null) {
            return null;
        }

        BookCategoryDto dto = new BookCategoryDto();
        dto.setId(category.getId());
        dto.setName(category.getName());
        dto.setDescription(category.getDescription());
        dto.setRef(category.getRef());
        return dto;
    }

    public List<BookCategoryDto> toDtoList(List<BookCategory> categories) {
        if (categories == null) {
            return null;
        }
        return categories.stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    public List<BookCategory> toEntityList(List<BookCategoryDto> dtos) {
        if (dtos == null) {
            return null;
        }
        return dtos.stream()
                .map(this::toEntity)
                .collect(Collectors.toList());
    }
}
