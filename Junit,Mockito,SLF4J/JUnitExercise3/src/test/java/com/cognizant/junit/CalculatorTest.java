package com.cognizant.junit;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

public class CalculatorTest {

    Calculator calculator = new Calculator();

    @Test
    public void testAssertEquals() {
        assertEquals(30, calculator.add(10, 20));
    }

    @Test
    public void testAssertNotEquals() {
        assertNotEquals(40, calculator.add(10, 20));
    }

    @Test
    public void testAssertTrue() {
        assertTrue(calculator.isPositive(10));
    }

    @Test
    public void testAssertFalse() {
        assertFalse(calculator.isPositive(-5));
    }

    @Test
    public void testAssertNotNull() {
        assertNotNull(calculator.getMessage());
    }

    @Test
    public void testAssertNull() {
        assertNull(calculator.getNullValue());
    }
}