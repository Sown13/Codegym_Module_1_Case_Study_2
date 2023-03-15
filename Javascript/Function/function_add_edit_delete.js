let productList = [];

function getValueById(Id) {
    return document.getElementById(`${Id}`).value;
}

function restoreThisIdValue(Id) {
    document.getElementById(`${Id}`).value = ``;
}

function showAddProduct(){

}
function addProduct() {
    let temptProduct = new Product();
    let name = getValueById(`nameProduct`);
    let quantity = getValueById(`quantityProduct`);
    let quality = getValueById(`qualityProduct`);
    let checkerWorA = getValueById(`typeProduct`);
    let weapon = new Weapon();
    let weaponPower = getValueById(`firePower`);
    let weaponFireRate = getValueById("fireRate");
    let weaponRange = getValueById("range");
    let weaponClipSize = getValueById("clipSize");
    let weaponType = getValueById("typeWeapon");
    let armor = new Armor();
    let armorEndurance = getValueById("endurance");
    let armorType = getValueById("typeArmor");
    let describe = getValueById("description");
    let price = getValueById("priceProduct");

    temptProduct.setAllThisProduct(name, quantity, quality, describe, price);

    switch (checkerWorA) {
        case "Weapon":
            weapon.setAllThisWeapon(weaponPower, weaponFireRate, weaponRange, weaponClipSize, weaponType);
            temptProduct.setWeapon(weapon);
            break;
        case "Armor":
            armor.setAllThisArmor(armorEndurance, armorType);
            temptProduct.setArmor(armor);
            break;
    }
    if (name === `` || checkerWorA === `` || price === `` || (weaponType === `` && armorType === ``)) {
        alert("Bạn chưa điền Tên sản phẩm || Giá || Chọn phân loại hàng || Chọn kiểu cách hàng");
        return temptProduct;
    }
    productList.push(temptProduct);
    restoreThisIdValue(`nameProduct`);
    restoreThisIdValue(`quantityProduct`);
    restoreThisIdValue(`qualityProduct`);
    restoreThisIdValue(`typeProduct`);
    restoreThisIdValue(`firePower`);
    restoreThisIdValue(`fireRate`);
    restoreThisIdValue(`range`);
    restoreThisIdValue(`clipSize`);
    restoreThisIdValue(`typeWeapon`);
    restoreThisIdValue(`endurance`);
    restoreThisIdValue(`typeArmor`);
    restoreThisIdValue(`description`);
    restoreThisIdValue(`priceProduct`);
    console.log(productList); // Function díplay thay cho console.log
}


