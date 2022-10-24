// // 1. Trabajar en la rama repaso4, crear una nueva carpeta denominada algebraProject y crear el
// // fichero point.ts.
// // 2. Dicho fichero debe contener la clase Point con los siguientes atributos privados:
// // • x: number
// // • y: number
// // 3. El constructor de la clase debe tener los mismos parámetros de entrada que atributos.
// // 4. Crear los métodos setters y getters para todos los atributos de la clase.
// // 5. Crear un método toString() que convierta a texto las coordenadas del punto.
// // Debe devolver: “(x,y)”
// // 6. En otro fichero denominado pointTest.ts importar la clase Point.
// // 7. Crear un nuevo objeto myPoint de la clase Point, en el fichero pointTest.ts, y probar todos sus
// // métodos. Subir los cambios a GitHub.
export class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    setX(x) {
        this.x = x;
        return x;
    }
    getX() {
        return this.x;
    }
    setY(y) {
        this.y = y;
        return y;
    }
    getY() {
        return this.y;
    }
    toString() {
        return `(${this.x},${this.y})`;
    }
    // // 2.1: Crear un método denominado distanceTolOrigin():number que devuelva la distancia del
    // // punto al origen de coordenadas (0,0).
    distanceToOrigin() {
        let distancia = Math.sqrt((0 - this.x) * (0 - this.x) + (0 - this.y) * (0 - this.y));
        return distancia;
    }
    // // 2.2: Crear un método denominado calculateDistance(anotherPoint:Point):number, que
    // // devuelva la distancia entre el punto representado por la instancia actual del objeto y otra
    // // instancia de Punto que se recibe como parámetro denominada anotherPoint.
    calculateDistance(anotherPoint) {
        let distancia = Math.sqrt((anotherPoint.getX() - this.x) * (anotherPoint.getX() - this.x) + (anotherPoint.getY() - this.y) * (anotherPoint.getY() - this.y));
        return distancia;
    }
    // // 3: Programa un método denominado calcularQuadrant():number que devuelva el
    // // cuadrante en el que se encuentra el punto.
    // // El prototipo del método se muestra a continuación:
    // // - Devuelve 0 si x o y son 0.
    // // - Devuelve 1 si está en el primer cuadrante (x e y positivos).
    // // - Devuelve 2 si está en el segundo cuadrante (x negativo e y positivo).
    // // - Devuelve 3 si está en el tercer cuadrante (x e y negativos).
    // // - Devuelve 4 si está en el cuarto cuadrante (x positivo e y negativo).
    calcularQuadrant() {
        if (this.x == 0 && this.y == 0) {
            return 0;
        }
        else if (this.x > 0 && this.y > 0) {
            return 1;
        }
        else if (this.x < 0 && this.y > 0) {
            return 2;
        }
        else if (this.x < 0 && this.y < 0) {
            return 3;
        }
        return 4;
    }
    // // 4: Programa un método denominado calculateNearest(points : Point[]) : Point, que reciba
    // // como parámetro un array de objetos de la clase Point y devuelva una referencia al objeto
    // // de dicho array que esté más cercano al punto actual.
    // // NOTA: Utilizar para ello el método calculateDistance implementado en el reto3.
    calculateNearest(points) {
        let acumulator = Point[0];
        for (let i = 0; i < points.length; i++) {
            if (points[1].calculateDistance(this) < points[0].calculateDistance(this)) {
                points[1] = points[0];
                points[0] = acumulator;
            }
        }
        return acumulator;
    }
}
