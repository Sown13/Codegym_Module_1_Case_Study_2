class Weapon {
    constructor(){
        this.firePower = power;
        this.fireRate = rate;
        this.fireRange = range;
        this.clipSize = size;
        this.weaponType = Wtype;
    }
}

class Armor {
    constructor() {
        this.armorEndurance = endurance;
        this.armorType = Atype;
    }
}

class Product {
    constructor() {
        this.productName = pname;
        this.productQuantity = quantity;
        this.productQuality = quality;
        this.weapon = new Weapon();
        this.armor = new Armor() ;
        this.discription = string;
        this.price = price;
    }
}



let productList = [];
let weaponList= [];
let armorList = [];


