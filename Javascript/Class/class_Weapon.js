class Weapon {
    constructor(power,rate,range,size,wtype) {
        this.firePower = power;
        this.fireRate = rate;
        this.fireRange = range;
        this.clipSize = size;
        this.weaponType = wtype;
    }
    setAllThisWeapon(power,rate,range,size,wtype){
        this.firePower = power;
        this.fireRate = rate;
        this.fireRange = range;
        this.clipSize = size;
        this.weaponType = wtype;
    }
    getAllThisWeapon(){
        return this;
    }
    setFirePower(power) {
        this.firePower = power;
    }
    getFirePower() {
        return this.firePower;
    }
    setFireRate(rate){
        this.fireRate = rate;
    }
    getFireRate(){
        return this.fireRate;
    }
    setFireRange(range){
        this.fireRange = range;
    }
    getFireRange(){
        return this.fireRange;
    }
    setClipSize(size){
        this.clipSize = size;
    }
    getClipSize(){
        return this.clipSize;
    }
    setWeaponType(wtype){
        this.weaponType = wtype;
    }
    getWeaponType(){
        return this.weaponType;
    }
}


