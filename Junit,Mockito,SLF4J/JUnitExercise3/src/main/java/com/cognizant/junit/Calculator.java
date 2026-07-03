package com.cognizant.junit;

public class Calculator {

    public int add(int a, int b) {
        return a + b;
    }

    public boolean isPositive(int number) {
        return number > 0;
    }

    public String getMessage() {
        return "Welcome";
    }

    public String getNullValue() {
        return null;
    }
}