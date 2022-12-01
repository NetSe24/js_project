
// Data element -------------------------------

let listProducts = [
    {
        "img": "https://www2.pictures.stylebistro.com/gi/Ralph+Lauren+Front+Row+Spring+2013+Mercedes+jXPBVvpuZgjl.jpg",
        "price": "25$",
        "name": "Skirt",
    },

]

function saveProducts() {
    localStorage.setItem("product", JSON.stringify(listProducts));
}

function loadProducts() {
    let storeProduct = JSON.parse(localStorage.getItem("product"));
    if (storeProduct !== null) {
        listProducts = storeProduct;
    }
}


let index = 0;

function renderProduct() {
    loadProducts();

    let card_container = document.querySelector("#card_container");

    for (index = 0; index < listProducts.length; index++) {
        let newProduct = listProducts[index];

        let card = document.createElement("div");
        card.className = "card";
        card_container.appendChild(card);

        let img_product = document.createElement("img");
        img_product.id = "img_pic_card";
        img_product.src = newProduct.img;
        card.appendChild(img_product);

        let product_name = document.createElement("div");
        product_name.className = "product_name";
        
        product_name.textContent = "Name: ";
        strong_name = document.createElement("strong");
        strong_name.textContent = newProduct.name;
        strong_name.style.color = "orange";
        product_name.appendChild(strong_name);
        card.appendChild(product_name);

        let currency = document.createElement("p");
        currency.className = "currency";
        currency.textContent = "Price: ";
        strong_currency = document.createElement("strong");
        strong_currency.style.color = "orange";
        strong_currency.textContent = newProduct.price;
        currency.appendChild(strong_currency);
        card.appendChild(currency);

        let div_button = document.createElement("div");
        div_button.className = "div_button";
        let btn_add = document.createElement("button");
        div_button.appendChild(btn_add);
        btn_add.className = "btn_add";
        btn_add.textContent = "  BUY NOW ! ";
        card.appendChild(div_button);

        let createStar = document.createElement("div");
        createStar.className = "create_star";

        for (i = 0; i < 5; i++) {
            
            let i = document.createElement("i");
            i.className = "material-icons star";
            i.textContent = "star";
            i.style.color = "white";
            createStar.appendChild(i);

        }
        card.appendChild(createStar);
    }

}



loadProducts();
renderProduct();