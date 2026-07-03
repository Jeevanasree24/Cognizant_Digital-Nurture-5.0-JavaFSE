package com.cognizant.mockito;

import static org.mockito.Mockito.*;

import org.junit.jupiter.api.Test;

public class ExternalApiTest {

    @Test
    public void testVerifyInteraction() {

        // Create Mock Object
        ExternalApi api = mock(ExternalApi.class);

        // Call mocked method
        api.getData();

        // Verify method was called once
        verify(api).getData();
    }
}