import { Factory } from "../patterns/Factory";

export class FactoryController {

    public static execute (typePolygon: String): Number {
        const polygon = Factory.getPolygon(typePolygon);

        return polygon.getNumberOfSides();
    }
}