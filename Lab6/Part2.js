class Shape1 {
    constructor(name, sides, sideLength) {
      this.name = name;
      this.sides = sides;
      this.sideLength = sideLength;
    }
  
    calcPerimeter() {
      const perimeter = this.sides * this.sideLength;
      console.log(`Perimeter of ${this.name}: ${perimeter}`);
    }
  }
  
  class Square1 extends Shape1 {
    constructor(sideLength) {
      // Automatically setting name to "square" and sides to 4
      super('square', 4, sideLength);
    }
      // Creating a function to create the area
    calcArea() {
      const area = this.sideLength ** 2;
      console.log(`Area of ${this.name}: ${area}`);
    }
  }
  
  // Creating a Square instance
  const square1 = new Square1(5)
  square1.calcPerimeter(); // Output: Perimeter of square: 20
  square1.calcArea();      // Output: Area of square: 25
  