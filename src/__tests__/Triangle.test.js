const Triangle = require("../Triangle");

describe("Triangle", () => {
  describe("perimeter", () => {
    it("calculates the perimeter as 12", () => {
      const triangle = new Triangle(3, 4, 5);
      expect(triangle.perimeter()).toEqual(12);
    });

    it("calculates the perimeter as 13", () => {
      const triangle = new Triangle(3, 4, 6);
      expect(triangle.perimeter()).toEqual(13);
    });
  });

  describe("isRightAngled", () => {
    it("is right-angled for a 3, 4, 5 triangle", () => {
      const triangle = new Triangle(3, 4, 5);
      expect(triangle.isRightAngled()).toEqual(true);
    });
  });
});
