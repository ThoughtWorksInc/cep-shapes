package com.thoughtworks.cep;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertThrows;

public class ShapeTest {

    private Shape shape = new Shape();

    @Test
    public void areaThrowsNotImplementedException() {
        assertThrows(UnsupportedOperationException.class, () -> shape.area());
    }

    @Test
    public void perimeterThrowsNotImplementedException() {
        assertThrows(UnsupportedOperationException.class, () -> shape.perimeter());
    }
}
