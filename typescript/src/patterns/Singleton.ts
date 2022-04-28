
export class Singleton {
    private static instance: Singleton;

    public static getInstance (): Singleton {
        if (!this.instance) {
            this.instance = new Singleton();
        }

        return this.instance;
    }

    public businessRule (): String {
        return "Business Rule";
    }

}