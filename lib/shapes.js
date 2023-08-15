{
    /* <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="150" cy="100" r="80" fill="green" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">TAJ</text>
</svg> */
}

class Shape {
    constructor(color) {
        this.color = color;
    }

    render() {
        throw new Error("Child class must implement the render method");
    }
}

class Circle extends Shape {
    render = () => `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
}

class Square extends Shape {
    render = () => `<rect x="50" height="200" width="200" fill="${this.color}" />`;
}

class Triangle extends Shape {
    render = () => `<polygon points="0,200 300,200 150,0" fill="${this.color}" />`;
}

// <text x="150" y="125" font-size="60" text-anchor="middle" fill="ORANGE">HIH</text>

module.exports = {Circle, Square, Triangle}