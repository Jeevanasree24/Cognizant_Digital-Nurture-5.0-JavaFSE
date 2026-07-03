package com.cognizant.springdatajpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.springdatajpa.entity.State;

public interface StateRepository extends JpaRepository<State, Integer> {

}