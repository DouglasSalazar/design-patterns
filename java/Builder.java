class Product {
    private String name;
    private float value;
    private String description;

    private Product(Builder builder) {
        this.name = builder.name;
        this.value = builder.value;
        this.description = builder.description;
    }

    public static class Builder {
        private String name;
        private float value;
        private String description;

        public Builder setName(String name) {
            this.name = name;
            return this;
        }
        
        public Builder setValue(float value) {
            this.value = value;
            return this;
        }
        
        public Builder setDescription(String description) {
            this.description = description;
            return this;
        }

        public Product build() {
            return new Product(this);
        }
    }

    public String toString() {
        return "Name: " + this.name +
               "\nDescriptions: " + this.description +
               "\nValue: " + this.value;

    }

    public static void main(String[] args) {        
        Product product = new Product.Builder()
        .setName("Bierland")
        .setDescription("Cerveja")
        .setValue(10)
        .build();

        System.out.println(product.toString());
    }
}