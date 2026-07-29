package com.example.springrest.jwt;

public record AuthResponse(String token, String type, String message) {

    public static AuthResponse success(String token) {
        return new AuthResponse(token, "Bearer", "Authentication successful");
    }

    public static AuthResponse failure(String message) {
        return new AuthResponse(null, null, message);
    }
}
