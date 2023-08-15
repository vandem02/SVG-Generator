const { Circle, Square, Triangle } = require("./lib/shapes.js");
const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    {
        type: "input",
        name: "text",
        message: "Provide 1-3 characters for the logo:",
        validate: function (text) {
            return text.length > 0 && text.length < 4;
        },
    },
    {
        type: "input",
        name: "textColor",
        message: "(Text color) Enter a color keyword or hexadecimal number:",
    },
    {
        type: "list",
        name: "shape",
        message: "Choose a shape to be displayed on your logo.",
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        type: "input",
        name: "shapeColor",
        message: "(Shape color) Enter a color keyword or hexadecimal number:",
    },
];

inquirer.prompt(questions).then((responses) => {
    var shape;
    if (responses.shape === "Circle") shape = new Circle(responses.shapeColor);
    else if (responses.shape === "Square") shape = new Square(responses.shapeColor);
    else shape = new Triangle(responses.shapeColor);

    var SVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${responses.textColor}">${responses.text}</text>
        </svg>`;

    fs.writeFile("./generated-svgs/logo1.svg", SVG, function (err) {
        if (err) throw err;
        console.log("Logo created in <generated-svgs> folder as logo1.svg. Open index.html in your browser to view it.");
    });
});
