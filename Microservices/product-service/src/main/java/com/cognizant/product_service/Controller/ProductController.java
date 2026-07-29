package com.cognizant.product_service.Controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {

    @Value("${server.port}")
    private String port;

    @GetMapping("/products")
    public String getProducts() {

        return "Response from Product Service running on Port : " + port;

    }

}