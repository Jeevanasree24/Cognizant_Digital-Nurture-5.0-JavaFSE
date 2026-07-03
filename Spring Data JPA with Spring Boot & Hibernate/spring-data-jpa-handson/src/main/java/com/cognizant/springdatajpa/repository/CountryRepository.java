package com.cognizant.springdatajpa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cognizant.springdatajpa.entity.Country;

public interface CountryRepository extends JpaRepository<Country, String> {

    Country findByCode(String code);

    Country findByName(String name);

    List<Country> findByNameContaining(String keyword);

    List<Country> findByCodeStartingWith(String prefix);

    // HQL Query
    @Query("FROM Country")
    List<Country> getAllCountriesHQL();

    // Native SQL Query
    @Query(value = "SELECT * FROM country", nativeQuery = true)
    List<Country> getAllCountriesNative();
}