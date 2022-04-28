import { Singleton } from "../patterns/Singleton";

export class SingletonController {

    public static execute (): String {
        const instance1 = Singleton.getInstance();
        const instance2 = Singleton.getInstance();
        var comparation: String = "Different instances!";

        if (instance1 == instance2) {
            comparation = "Equal instances";
        }

        return comparation;
    }
}