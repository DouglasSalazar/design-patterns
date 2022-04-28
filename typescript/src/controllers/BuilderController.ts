import { Builder, Product } from "../patterns/Builder";


export class BuilderController {

    public static execute (): Product[] {
        let builder = new Builder();

        builder.setName("Cervejaria Blumenau");
        builder.setDescriptions("IPA");
        builder.setValue(10);
        builder.build();
        builder.setName("Bierland");
        builder.setDescriptions("Cerveja");
        builder.setValue(20);
        builder.build();
        
        return builder.getProducts();
    }
}