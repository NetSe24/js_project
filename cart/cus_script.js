// let listOrder = [] ;

function saveOrder() {
    localStorage.setItem("listOrder", JSON.stringify(listOrder));
}

function loadOrder() {
    let storeOrder = JSON.parse(localStorage.getItem("listOrder"));
    if (storeOrder !== null) {
        listOrder = storeOrder;
    }
    else{
        saveOrder();
    }
}

loadOrder();

let main_pay = document.querySelector(".main_pay");
let oldMenu_pay = document.querySelector(".memu_pay")
function displayProduct() {
    loadOrder()
    let valuePrice = 0;
    for (index = 0; index < listOrder.length; index++) {
        valuePrice += (parseInt(listOrder[index].priceOrder));

        if (oldMenu_pay !== null) {
            oldMenu_pay.remove();
        }

        let menu_pay = document.createElement("div");
        menu_pay.className = "menu_pay";
        menu_pay.dataset.index = index;

        main_pay.appendChild(menu_pay)
        let btn_remove = document.createElement("button");
        btn_remove.className = "btn_remove";
        btn_remove.textContent = "Remove";
        btn_remove.addEventListener("click", removeProduct)
        menu_pay.appendChild(btn_remove);

        let div_img_pay = document.createElement("div");
        div_img_pay.className = "img_pay";
        let imgOrder = document.createElement("img");
        imgOrder.className = "img_order";
        imgOrder.src = listOrder[index].imgOrder;
        div_img_pay.appendChild(imgOrder);
        menu_pay.appendChild(div_img_pay);

        let div_name_pay = document.createElement("div");
        div_name_pay.className = "name_pay";
        let nameOrder = document.createElement("div");
        nameOrder.className = "name_order";

        nameOrder.textContent = "Product Name : ";
        let strong_name = document.createElement("strong");
        strong_name.className = "strong_name";
        strong_name.textContent = listOrder[index].nameOrder;
        nameOrder.appendChild(strong_name)
        div_name_pay.appendChild(nameOrder);
        menu_pay.appendChild(div_name_pay)

        let div_price_pay = document.createElement("div");
        div_price_pay.className = "price_pay";
        let priceOrder = document.createElement("div");
        priceOrder.className = "price_order";

        let strong_price = document.createElement("strong");
        priceOrder.textContent = "Product Price : ";
        strong_price.className = "strong_price";
        strong_price.textContent = listOrder[index].priceOrder;
        priceOrder.appendChild(strong_price);
        div_price_pay.appendChild(priceOrder);
        menu_pay.appendChild(div_price_pay);
    }
    let h1_total = document.createElement("h1");
    h1_total.className = "h1_total";
    h1_strong = document.createElement("strong");
    h1_strong.className = "h1_strong";
    h1_strong.textContent = valuePrice + " $";
    main_pay.appendChild(h1_total);
    console.log(h1_total)
    h1_total.textContent = "Total Price : ";
    h1_total.appendChild(h1_strong);
    
    saveOrder()
}

// remove when user don't want to get it.

function removeProduct(event) {
    loadOrder();
    let index = (event.target.parentElement.dataset.index);
    listOrder.splice(index, 1);
    saveOrder();
    displayProduct();
}
displayProduct();