package com.cognizant.springdatajpa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.springdatajpa.entity.State;
import com.cognizant.springdatajpa.service.StateService;

@RestController
public class StateController {

    @Autowired
    private StateService stateService;

    @GetMapping("/states")
    public List<State> getStates() {
        return stateService.getAllStates();
    }
}