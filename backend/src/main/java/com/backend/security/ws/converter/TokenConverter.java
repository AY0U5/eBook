package com.backend.security.ws.converter;

import com.backend.security.bean.Token;
import com.backend.security.ws.dto.TokenDto;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class TokenConverter {

    public Token toEntity(TokenDto sessionDTO) {
        if (sessionDTO == null) {
            return null;
        }

        Token session = new Token();
        session.setId(sessionDTO.getId());
        session.setToken(sessionDTO.getToken());
        session.setExpiredAt(sessionDTO.getExpiredAt());
        session.setCreatedAt(sessionDTO.getCreatedAt());
        session.setUser(sessionDTO.getUser());

        return session;
    }

    public TokenDto toDto(Token session) {
        if (session == null) {
            return null;
        }

        TokenDto sessionDTO = new TokenDto();
        sessionDTO.setId(session.getId());
        sessionDTO.setToken(session.getToken());
        sessionDTO.setExpiredAt(session.getExpiredAt());
        sessionDTO.setCreatedAt(session.getCreatedAt());
        sessionDTO.setUser(session.getUser());

        return sessionDTO;
    }

    public List<TokenDto> toDtoList(List<Token> sessions) {
        if (sessions == null) {
            return null;
        }

        return sessions.stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    public List<Token> toEntityList(List<TokenDto> sessionDTOs) {
        if (sessionDTOs == null) {
            return null;
        }

        return sessionDTOs.stream()
                .map(this::toEntity)
                .collect(Collectors.toList());
    }
}
