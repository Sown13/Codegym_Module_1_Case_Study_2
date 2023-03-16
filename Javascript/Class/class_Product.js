class Product {
    constructor(name,quantity,quality,type,describe,price) {
        this.productName = name;
        this.productQuantity = quantity;
        this.productQuality = quality;
        this.productType = type;
        this.weapon = new Weapon();
        this.armor = new Armor();
        this.description = describe;
        this.price = price;
    }
    setAllThisProduct(name,quantity,quality,type,describe,price){
        this.productName = name;
        this.productQuantity = quantity;
        this.productQuality = quality;
        this.productType = type;
        this.description = describe;
        this.price = price;
    }
    getAllThisProduct(){
      return this;
    }
    getProductName() {
        return this.productName;
    }

    setProductName(value) {
        this.productName = value;
    }

    getProductQuantity() {
        return this.productQuantity;
    }

    setProductQuantity(value) {
        this.productQuantity = value;
    }

    getProductQuality() {
        return this.productQuality;
    }

    setProductQuality(value) {
        this.productQuality = value;
    }

    getWeapon() {
        return this.weapon;
    }

    setWeapon(value) {
        this.weapon = value;
    }

    getArmor() {
        return this.armor;
    }

    setArmor(value) {
        this.armor = value;
    }

    getDescription() {
        return this.description;
    }

    setDescription(value) {
        this.description = value;
    }

    getPrice() {
        return this.price;
    }

    setPrice(value) {
        this.price = value;
    }
    setProductType(type){
        this.productType = type;
    }
    getProductType(){
        return this.productType;
    }
}
