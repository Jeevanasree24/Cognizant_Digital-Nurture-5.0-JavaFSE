package com.example.springrest.service;

import com.example.springrest.model.Country;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class CountryService {

    private final Map<String, Country> countriesByCode = new ConcurrentHashMap<>();

    public CountryService(List<Country> countries) {
        for (Country country : countries) {
            if (country.getCode() != null) {
                countriesByCode.put(country.getCode().toUpperCase(), country);
            }
        }
    }

    /**
     * Returns all countries loaded from the Spring XML configuration.
     */
    public List<Country> getAllCountries() {
        return new ArrayList<>(countriesByCode.values());
    }

    /**
     * Finds a country by its ISO country code (case-insensitive).
     */
    public Optional<Country> getCountryByCode(String code) {
        if (code == null) {
            return Optional.empty();
        }
        return Optional.ofNullable(countriesByCode.get(code.toUpperCase()));
    }

    /**
     * Returns the number of countries loaded.
     */
    public int getCountryCount() {
        return countriesByCode.size();
    }
}
