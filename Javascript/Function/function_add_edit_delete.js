let productList = [];

function addProduct() {
    let temptProduct = new Product();
    let pname = document.getElementById("nameProduct").value;
    let quantity = document.getElementById("quantityProduct").value;
    let quality = document.getElementById("qualityProduct").value;
    let checkerWorA = document.getElementById("typeProduct").value;
    let weapon = new Weapon();
         let weaponPower = document.getElementById("firePower").value;
         let weaponFireRate = document.getElementById("fireRate").value;
         let weaponRange = document.getElementById("range").value;
         let weaponClipSize = document.getElementById("clipSize").value;
         let weaponType = document.getElementById("typeWeapon").value;
    let armor = new Armor();
         let armorEndurance = document.getElementById("endurance").value;
         let armorType = document.getElementById("typeArmor").value;
    let price = document.getElementById("priceProduct").value;
    let discribe = document.getElementById("discription").value;
   temptProduct.setProductName(pname);
   temptProduct.setProductQuantity(quantity);
   temptProduct.setProductQuality(quality);


}



