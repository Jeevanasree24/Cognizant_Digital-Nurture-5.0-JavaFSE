package com.cognizant.springdatajpa.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.springdatajpa.entity.Country;
import com.cognizant.springdatajpa.repository.CountryRepository;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }

    public Country getCountry(String code) {
        return countryRepository.findByCode(code);
    }

    public Country addCountry(Country country) {
        return countryRepository.save(country);
    }
    
    public Country getCountryByName(String name) {
        return countryRepository.findByName(name);
    }

    public List<Country> searchCountry(String keyword) {
        return countryRepository.findByNameContaining(keyword);
    }

    public List<Country> getCountriesByPrefix(String prefix) {
        return countryRepository.findByCodeStartingWith(prefix);
    }
    
    public List<Country> getCountriesHQL() {
        return countryRepository.getAllCountriesHQL();
    }

    public List<Country> getCountriesNative() {
        return countryRepository.getAllCountriesNative();
    }
}