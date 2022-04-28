interface Polygon {
    getNumberOfSides(): Number;
}

class Triangle implements Polygon {
    public getNumberOfSides(): Number {
        return 3;
    }
}

class Square implements Polygon {
    public getNumberOfSides(): Number {
        return 4;
    }
}

class Pentagon implements Polygon {
    public getNumberOfSides(): Number {
        return 5;
    }
}

export class Factory {

    public static getPolygon(type: String): Polygon {
        if(type === "Triangle") {
            return new Triangle();
        } else if(type === "Square") {
            return new Square();
        }else if(type === "Pentagon") {
            return new Pentagon();
        }
        throw new Error("Error! Unknown operating system.")
    }
}