package com.backend.security.ws.converter;

import com.backend.security.bean.User;
import com.backend.security.ws.dto.UserDto;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class UserConverter {

    public User toEntity(UserDto userDTO) {
        if (userDTO == null) {
            return null;
        }

        User user = new User();
        user.setId(userDTO.getId());
        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        user.setPassword(userDTO.getPassword());
        user.setUsername(userDTO.getUsername());
        user.setRoles(userDTO.getRoles());
        user.setAccountNonExpired(userDTO.isAccountNonExpired());
        user.setAccountNonLocked(userDTO.isAccountNonLocked());
        user.setCredentialsNonExpired(userDTO.isCredentialsNonExpired());
        user.setEnabled(userDTO.isEnabled());

        return user;
    }

    public UserDto toDto(User user) {
        if (user == null) {
            return null;
        }

        UserDto userDTO = new UserDto();
        userDTO.setId(user.getId());
        userDTO.setFirstName(user.getFirstName());
        userDTO.setLastName(user.getLastName());
        userDTO.setPassword(user.getPassword());
        userDTO.setUsername(user.getUsername());
        userDTO.setRoles(user.getRoles());
        userDTO.setAccountNonExpired(user.isAccountNonExpired());
        userDTO.setAccountNonLocked(user.isAccountNonLocked());
        userDTO.setCredentialsNonExpired(user.isCredentialsNonExpired());
        userDTO.setEnabled(user.isEnabled());

        return userDTO;
    }

    public List<UserDto> toDtoList(List<User> users) {
        if (users == null) {
            return null;
        }

        return users.stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    public List<User> toEntityList(List<UserDto> userDTOs) {
        if (userDTOs == null) {
            return null;
        }

        return userDTOs.stream()
                .map(this::toEntity)
                .collect(Collectors.toList());
    }
}
