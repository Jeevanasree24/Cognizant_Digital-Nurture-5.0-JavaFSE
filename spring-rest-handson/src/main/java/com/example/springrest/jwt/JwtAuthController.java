package com.example.springrest.jwt;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class JwtAuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    public JwtAuthController(AuthenticationManager authenticationManager, JwtService jwtService) {
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
    }

    /**
     * Authenticates the user and returns a JWT token.
     * POST /api/auth/login
     *
     * Request body: { "username": "user", "password": "pass" }
     * Response: { "token": "eyJhbGci...", "type": "Bearer", "message": "Authentication successful" }
     */
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest request) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.username(), request.password()));

            String username = authentication.getName();
            String token = jwtService.generateToken(username);

            return ResponseEntity.ok(AuthResponse.success(token));
        } catch (AuthenticationException e) {
            return ResponseEntity.status(401).body(AuthResponse.failure("Invalid credentials"));
        }
    }
}
