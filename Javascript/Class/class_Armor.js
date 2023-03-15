class Armor {
    constructor(endurance,atype) {
        this.armorEndurance = endurance;
        this.armorType = atype;
    }
    setAllThisArmor(endurance,atype){
        this.armorEndurance = endurance;
        this.armorType = atype;
    }
    getAllThisArmor(){
        return this ;
    }
    setArmorEndurance(endurance){
        this.armorEndurance = endurance;
    }
    getArmorEndurance(){
        return this.armorEndurance;
    }
    setArmorType(atype){
        this.armorType = atype;
    }
    getArmorType(){
        return this.armorType;
    }
}