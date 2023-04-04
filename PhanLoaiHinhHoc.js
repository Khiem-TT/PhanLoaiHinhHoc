class Shape {
    color;
    filled;

    constructor(color, filled) {
        this.color = color;
        this.filled = filled;
    }
}

class Circle {
    color;
    filled;
    radius;

    constructor(color, filled, radius) {
        this.color = color;
        this.filled = filled;
        this.radius = radius;
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }

    getPerimeter() {
        return this.radius * 2 * Math.PI;
    }
}

class Rectangle {
    color;
    filled;
    width;
    lenght;

    constructor(color, filled, width, length) {
        this.color = color;
        this.filled = filled;
        this.width = width;
        this.lenght = length;
    }

    getArea() {
        return this.width * this.lenght;
    }

    getPerimeter() {
        return 2 * (this.width + this.lenght);
    }
}

class Square {
    color;
    filled;
    side;

    constructor(color, filled, side = 1) {
        this.color = color;
        this.filled = filled;
        this.side = side;
    }
}

let shape = new Shape("red", false);
console.log(shape);

let circle = new Circle(3.5, "indigo", false);
console.log(circle);

let rectangle = new Rectangle(2.5, 3.8, "orange", true);
console.log(rectangle);

let square = new Square("yellow", true, 5.8);
console.log(square);