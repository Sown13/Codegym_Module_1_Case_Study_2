let productList = [];

function getValueById(Id) {
    return document.getElementById(`${Id}`).value;
}

function restoreThisIdValue(Id) {
    document.getElementById(`${Id}`).value = ``;
}

function showAddProductInput() {
    document.getElementById("switchContent").innerHTML =
        `<input type="text" id="nameProduct" placeholder="Product name">
            <input type="number" id="quantityProduct" placeholder="Product quantity" value="1">
            <input type="text" id="qualityProduct" placeholder="Product quality (5star)" value="Unknow">
            <input type="number" id="priceProduct" placeholder="1000$">
            <input type="text" id="description" placeholder="Discribe your product">
            <select id="typeProduct" onchange="chooseType()">
                <option value="Armor">Armor</option>
                <option value="Weapon">Weapon</option>
            </select>    
            <div id="weaponInput"></div>
            <div id="armorInput"></div>
            <input type="button" value="Confirm" onclick="addProduct()">
            <input type="button" value="Cancel" onclick="hideAddProductInput()">`
    document.getElementById("typeProduct").value = ``;
}

function hideAddProductInput() {
    document.getElementById("switchContent").innerHTML = ``;
}

function showWeaponInput() {
    document.getElementById("weaponInput").innerHTML =
        `<input type="text" class="weapon" id="firePower" placeholder="Medium">
         <input type="text" class="weapon" id="fireRate" placeholder="50/s">
         <input type="text" class="weapon" id="range" placeholder="500m">
         <input type="text" class="weapon" id="clipSize" placeholder="30">
              <select class="weapon" id="typeWeapon">
                     <option value="Hand Gun">Hand Gun</option>
                     <option value="SMG">SMG</option>
                     <option value="Machine Gun">Machine Gun</option>
                     <option value="Heavy Gun">Heavy Gun</option>
                     <option value="Melee">Melee</option>
              </select>`
}
function hideWeaponInput(){
    document.getElementById("weaponInput").innerHTML = ``;
}

function showArmorInput(){
    document.getElementById("armorInput").innerHTML =
       `<input type="number" class="armor" id="endurance" placeholder="100 hit">
        <select class="armor" id="typeArmor">
               <option value="Heavy">Heavy</option>
               <option value="Medium">Medium</option>
               <option value="Light">Light</option>
        </select>`;
}

function hideArmorInput(){
    document.getElementById("armorInput").innerHTML = ``;
}

function chooseType(){
    let checker = getValueById(`typeProduct`)
    if (checker === "Weapon" ) {
        showWeaponInput();
        hideArmorInput();
    } else {
        showArmorInput();
        hideWeaponInput();
    }
}

function addProduct() {
    let temptProduct = new Product();
    let name = getValueById(`nameProduct`);
    let quantity = getValueById(`quantityProduct`);
    let quality = getValueById(`qualityProduct`);
    let checkerWorA = getValueById(`typeProduct`);


    let describe = getValueById("description");
    let price = getValueById("priceProduct");
    temptProduct.setAllThisProduct(name, quantity, quality, describe, price);
    switch (checkerWorA) {
        case "":
            break;
        case "Weapon":
            let weapon = new Weapon();
            let weaponPower = getValueById(`firePower`);
            let weaponFireRate = getValueById("fireRate");
            let weaponRange = getValueById("range");
            let weaponClipSize = getValueById("clipSize");
            let weaponType = getValueById("typeWeapon");
            weapon.setAllThisWeapon(weaponPower, weaponFireRate, weaponRange, weaponClipSize, weaponType);
            temptProduct.setWeapon(weapon);
            break;
        case "Armor":
            let armor = new Armor();
            let armorEndurance = getValueById("endurance");
            let armorType = getValueById("typeArmor");
            armor.setAllThisArmor(armorEndurance, armorType);
            temptProduct.setArmor(armor);
            break;
    }
    if (name === ``|| price === `` ) {
        alert("Bạn chưa điền Tên sản phẩm || Giá || Chọn phân loại hàng || Chọn kiểu cách hàng");
        return temptProduct;
    }
    productList.push(temptProduct);
    restoreThisIdValue(`nameProduct`);
    restoreThisIdValue(`quantityProduct`);
    restoreThisIdValue(`qualityProduct`);
    restoreThisIdValue(`typeProduct`);
    switch (checkerWorA) {
        case "Weapon":
            restoreThisIdValue(`firePower`);
            restoreThisIdValue(`fireRate`);
            restoreThisIdValue(`range`);
            restoreThisIdValue(`clipSize`);
            restoreThisIdValue(`typeWeapon`);
            break;
        case "Armor":
            restoreThisIdValue(`endurance`);
            restoreThisIdValue(`typeArmor`);
            break;
    }
    restoreThisIdValue(`description`);
    restoreThisIdValue(`priceProduct`);
    console.log(productList); // Function díplay thay cho console.log
}


