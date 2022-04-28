export class Product {
    public name: String;
    public value: Number;
    public description: String;

    constructor (){
        this.name = "";
        this.value = 0;
        this.description = "";
    }
}

export class Builder {
    private product: Product;
    private products: Product[] = [];

    constructor () {
        this.product = new Product();
    }

    public reset() {
        this.product = new Product();
    }

    public setName(name: String) {
        this.product.name = name;
    }

    public setValue(value: Number) {
        this.product.value = value;
    }

    public setDescriptions(description: String) {
        this.product.description = description;
    }

    public build() {
        this.products.push(this.product);
        this.reset();
    }

    public getProducts(): Product[] {        
        return this.products;
    }
}