import { Triangle } from "./triangle.js";
import { Point } from "./point.js";


let point1 = new Point(5, 8);
let point2 = new Point(1, 3);
let point3 = new Point(3, 7);


let triangle = new Triangle(point1, point2, point3);



console.log(triangle);


console.log(triangle.calculateLengthSides());
