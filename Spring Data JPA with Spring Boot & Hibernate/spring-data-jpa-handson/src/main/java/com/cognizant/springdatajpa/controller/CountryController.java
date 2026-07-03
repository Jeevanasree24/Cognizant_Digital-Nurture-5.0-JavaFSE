package com.cognizant.springdatajpa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.cognizant.springdatajpa.entity.Country;
import com.cognizant.springdatajpa.service.CountryService;

@RestController
@RequestMapping("/countries")
public class CountryController {

    @Autowired
    private CountryService countryService;

    // Get all countries
    @GetMapping
    public List<Country> getAllCountries() {
        return countryService.getAllCountries();
    }

    // Find by country code
    @GetMapping("/{code}")
    public Country getCountry(@PathVariable String code) {
        return countryService.getCountry(code);
    }

    // Add new country
    @PostMapping
    public Country addCountry(@RequestBody Country country) {
        return countryService.addCountry(country);
    }
    
    @GetMapping("/name/{name}")
    public Country getCountryByName(@PathVariable String name) {
        return countryService.getCountryByName(name);
    }

    @GetMapping("/search/{keyword}")
    public List<Country> searchCountry(@PathVariable String keyword) {
        return countryService.searchCountry(keyword);
    }

    @GetMapping("/prefix/{prefix}")
    public List<Country> getCountriesByPrefix(@PathVariable String prefix) {
        return countryService.getCountriesByPrefix(prefix);
    }
    
    @GetMapping("/hql")
    public List<Country> getCountriesHQL() {
        return countryService.getCountriesHQL();
    }

    @GetMapping("/native")
    public List<Country> getCountriesNative() {
        return countryService.getCountriesNative();
    }
}