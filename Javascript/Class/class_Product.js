class Product {
    constructor() {
        this.productName = value;
        this.productQuantity = value;
        this.productQuality = value;
        this.weapon = new Weapon();
        this.armor = new Armor();
        this.discription = value;
        this.price = value;
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

    getDiscription() {
        return this.discription;
    }

    setDiscription(value) {
        this.discription = value;
    }

    getPrice() {
        return this.price;
    }

    setPrice(value) {
        this.price = value;
    }
}
