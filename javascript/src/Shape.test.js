const Shape = require("./Shape");

describe("Shape", () => {
    const shape = new Shape();
    describe("area()", () => {
        it("throws TypeError", () => {
            expect(() => shape.area()).toThrow(TypeError);
        });
    });
});