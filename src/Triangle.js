class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  perimeter() {
    return this.side1 + this.side2 + this.side3;
  }

  isRightAngled() {
    return false;
  }
}

module.exports = Triangle;
