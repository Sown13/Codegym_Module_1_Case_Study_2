let productList = [];

function getValueById(Id) {
    return document.getElementById(`${Id}`).value;
}

function restoreThisIdValue(Id) {
    document.getElementById(`${Id}`).value = ``;
}

function showAddProductInput() {
    document.getElementById("switchContent").innerHTML =
        `<span> Tên sản phẩm:</span> 
            <input type="text" id="nameProduct" placeholder="Product name"><br>
       <span> Số lượng tồn kho:</span> 
            <input type="number" id="quantityProduct" placeholder="Product quantity" value="1"><br> 
       <span> Chất lượng sản phẩm:</span> 
            <input type="text" id="qualityProduct" placeholder="Product quality (5star)" value="Unknow"><br>  
       <span> Đơn giá sản phẩm:</span>
            <input type="number" id="priceProduct" placeholder="1000$"> <br>
       <span> Mô tả sản phẩm: </span>
            <input type="text" id="description" placeholder="Discribe your product"> <br>
       <span> Phân loại sản phẩm:</span>
            <select id="typeProduct" onchange="chooseType()">
                <option value="Armor">Armor</option>
                <option value="Weapon">Weapon</option>
            </select>    
            <div id="weaponInput"></div>
            <div id="armorInput"></div>
            <input type="button" value="Confirm" onclick="addOrEditProduct('')">
            <input type="button" value="Cancel" onclick="hideAddProductInput()">`
    document.getElementById("typeProduct").value = ``;
}

function hideAddProductInput() {
    document.getElementById("switchContent").innerHTML = ``;
}

function showWeaponInput() {
    document.getElementById("weaponInput").innerHTML =
        `<input type="text" class="weapon" id="firePower" placeholder="Fire Power: e.x 100">
         <input type="text" class="weapon" id="fireRate" placeholder="Fire rate: e.x 50/s">
         <input type="text" class="weapon" id="range" placeholder="Fire range: e.x 500m">
         <input type="text" class="weapon" id="clipSize" placeholder="Clip Size: e.x 30">
              <select class="weapon" id="typeWeapon">
                     <option value="Hand Gun">Hand Gun</option>
                     <option value="SMG">SMG</option>
                     <option value="Machine Gun">Machine Gun</option>
                     <option value="Heavy Gun">Heavy Gun</option>
                     <option value="Melee">Melee</option>
              </select>`
}

function hideWeaponInput() {
    document.getElementById("weaponInput").innerHTML = ``;
}

function showArmorInput() {
    document.getElementById("armorInput").innerHTML =
        `<input type="number" class="armor" id="endurance" placeholder="Armor Endurance: e.x 100 hit">
        <select class="armor" id="typeArmor">
               <option value="Heavy">Heavy</option>
               <option value="Medium">Medium</option>
               <option value="Light">Light</option>
        </select>`;
}

function hideArmorInput() {
    document.getElementById("armorInput").innerHTML = ``;
}

function chooseType() {
    let checker = getValueById(`typeProduct`)
    if (checker === "Weapon") {
        showWeaponInput();
        hideArmorInput();
    } else {
        showArmorInput();
        hideWeaponInput();
    }
}

function addOrEditProduct(index) {
    let temptProduct = new Product();
    let name = getValueById(`nameProduct`);
    let quantity = getValueById(`quantityProduct`);
    let quality = getValueById(`qualityProduct`);
    let type = getValueById(`typeProduct`);
    let describe = getValueById("description");
    let price = getValueById("priceProduct");
    temptProduct.setAllThisProduct(name, quantity, quality, type, describe, price);
    switch (type) {
        case "":
            alert("Bạn chưa điền Tên sản phẩm || Giá || Chọn phân loại hàng || Chọn kiểu cách hàng");
            return;
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
    if (name === `` || price === `` || type === ``) {
        alert("Bạn chưa điền Tên sản phẩm || Giá || Chọn phân loại hàng || Chọn kiểu cách hàng");
        return temptProduct;
    }
    if (index === '') {
        productList.push(temptProduct);
    } else {
        productList.splice(index,1,temptProduct);
    }
    // restoreThisIdValue(`nameProduct`);
    // restoreThisIdValue(`quantityProduct`);
    // restoreThisIdValue(`qualityProduct`);
    // restoreThisIdValue(`typeProduct`);
    // switch (type) {
    //     case "Weapon":
    //         restoreThisIdValue(`firePower`);
    //         restoreThisIdValue(`fireRate`);
    //         restoreThisIdValue(`range`);
    //         restoreThisIdValue(`clipSize`);
    //         restoreThisIdValue(`typeWeapon`);
    //         break;
    //     case "Armor":
    //         restoreThisIdValue(`endurance`);
    //         restoreThisIdValue(`typeArmor`);
    //         break;
    // }
    // restoreThisIdValue(`description`);
    // restoreThisIdValue(`priceProduct`);
    document.getElementById("switchContent").innerHTML =
        `<p style="text-align:center"> Bạn đã thêm sản phẩm mới thành công</p>
        <br>
        <div style="text-align: center"> 
        <input type="button" value="Tiếp tục thêm sản phẩm" onclick="showAddProductInput()">
        <input type="button" value="Kiểm tra danh sách sản phẩm" onclick="showProductList()">
        </div>`;
    console.log(productList); // Function díplay thay cho console.log
}

function deleteProductConfirm(index){
    alert(`Bạn đang cố xóa sản phẩm ${productList[index].getProductName()}`)
    document.getElementById("switchContent").innerHTML =
        `<p> Bạn có chắc chắn muốn xóa sản phẩm này?</p><br>
         <input type="button" value="Tôi muốn xóa" id="yesDelete" onclick="deleteProduct(${index})">
         <input type="button" value="Không, tôi ấn nhầm" id="noDelete" onclick="showEditProductInput(${index})">`
}
function deleteProduct(index){
    productList.splice(index,1);
    showProductList();
}

function showProductList() {
    let displayProductList = `<tr>
                <th> STT </th>
                <th> Tên sản phẩm </th>
                <th> Tồn kho </th>
                <th> chất lượng </th>
                <th> Phân loại </th>
                <th> Giá </th>
                <th>Sửa</th>
            </tr>`
    for (let i = 0; i < productList.length; i++) {
        displayProductList +=
            `<tr>
                <td>${i + 1}</td>
                <td>${productList[i].getProductName()}</td>
                <td>${productList[i].getProductQuantity()}</td>
                <td>${productList[i].getProductQuality()}</td>
                <td>${productList[i].getProductType()}</td>
                <td>${productList[i].getPrice()}</td>
                <td><input type="button" value="Edit" id="editProduct${i + 1}" onclick="showEditProductInput(${i})"></td>
            </tr>`

    }
    document.getElementById("switchContent").innerHTML = `<table style="width: 100%"> ${displayProductList} </table>`;
}

function showEditProductInput(index) {
    document.getElementById("switchContent").innerHTML =
        `<table style="text-align: center;width: 100%">
    <tr>
        <th> Mục</th>
        <th> Trước khi sửa</th>
        <th> Sau khi sửa</th>
    </tr>
    <tr>
        <td>Tên sản phẩm:</td>
        <td>
            ${productList[index].getProductName()}
        </td>
        <td><input type="text" id="nameProduct" value="${productList[index].getProductName()}"></td>
    <tr>
    <tr>
        <td>Số lượng tồn kho:</td>
        <td>${productList[index].getProductQuantity()}</td>
        <td><input type="number" id="quantityProduct" placeholder="Product quantity" value="${productList[index].getProductQuantity()}"></td>
    </tr>
    <tr>
        <td> Chất lượng sản phẩm:</td>
        <td> ${productList[index].getProductQuality()}</td>
        <td><input type="text" id="qualityProduct" placeholder="Product quality (5star)" value="${productList[index].getProductQuality()}"></td>
    </tr>
    <tr>
        <td>Đơn giá sản phẩm:</td>
        <td>${productList[index].getPrice()}</td>
        <td><input type="number" id="priceProduct" value="${productList[index].getPrice()}"></td>
    </tr>
    <tr>
        <td>Mô tả sản phẩm:</td>
        <td>${productList[index].getDescription()}</td>
        <td><input type="text" id="description" value="${productList[index].getDescription()}"></td>
    </tr>
    <tr>
        <td>Phân loại sản phẩm:</td>
        <td> ${productList[index].getProductType()}</td>
        <td><select id="typeProduct" onchange="chooseType()">
            <option value="Armor">Armor</option>
            <option value="Weapon">Weapon</option>
        </select>
            <div id="weaponInput"></div>
            <div id="armorInput"></div>
        </td>
    </tr>
    </table>
    <br>
    <input type="button" value="Confirm" onclick="addOrEditProduct(${index})">
    <input type="button" value="Delete" onclick="deleteProductConfirm(${index})">
    <input type="button" value="Cancel" onclick="hideAddProductInput()">`
    document.getElementById("typeProduct").value = ``;
}

