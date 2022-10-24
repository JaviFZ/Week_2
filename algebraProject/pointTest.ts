import {Point} from "./point";



let point = new Point(2, 4);


let anotherPoint = new Point(7, 5);

let point1 = new Point(5, 8);
let point2 = new Point(1, 3);
let point3 = new Point(3, 7);


let arrayPoints = [point1, point2, point3];

console.log(point);


console.log(point.toString());


console.log(point.distanceToOrigin());

console.log(point.calculateDistance(point1));


console.log(point.calcularQuadrant());

console.log(point.calculateNearest(arrayPoints));



