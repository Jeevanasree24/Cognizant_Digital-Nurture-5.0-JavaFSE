package com.example.springrest.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public String sayHello() {
        return "Hello World from Spring REST!";
    }

    @GetMapping("/hello/json")
    public HelloResponse sayHelloJson() {
        return new HelloResponse("Hello World from Spring REST!", "Spring Boot 3");
    }

    public record HelloResponse(String message, String framework) {}
}
