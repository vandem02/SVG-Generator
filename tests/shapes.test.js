const { Circle, Square, Triangle } = require("../lib/shapes");

test("Circle renders correctly", () => {
    var circle = new Circle("blue");
    expect(circle.render()).toBe(`<circle cx="150" cy="100" r="80" fill="blue" />`);
});

test("Square renders correctly", () => {
    var square = new Square("orange");
    expect(square.render()).toBe(`<rect x="50" height="200" width="200" fill="orange" />`);
});

test("Triangle renders correctly", () => {
    var triangle = new Triangle("red");
    expect(triangle.render()).toBe(`<polygon points="0,200 300,200 150,0" fill="red" />`);
});