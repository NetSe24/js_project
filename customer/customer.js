



// Data element -------------------------------

let listProducts = [
    {
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2MgJTfXaBP92Od0vR0IA2in4aV-ElbiNtpQ&usqp=CAU",
        "price":"10$",
        "name":"T-shirts"
        
    },
    {
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQAiKirLD6H5nMkJNe8ZFdMC2Hmtkp9gRk0w&usqp=CAU",
        "price":"10$",
        "name":"Jeans"
    },
    {
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Rz3Xp4zGNAGi8Mq_HGOorz9yDqfUH3ETxQ&usqp=CAU",
        "price":"10$",
        "name":"Skirts"
    },

]


let card_container = document.querySelector("#card_container");

for (let product of listProducts ){
    let card = document.createElement("div");
    card.className = "card";
    card_container.appendChild(card);

    let img_product = document.createElement("img");
    img_product.src = product.img;

    card.appendChild(img_product);
    
    let product_name = document.createElement("div");
    product_name.className = "product_name";
    product_name.textContent = product.name;
    card.appendChild(product_name);

    let currency = document.createElement("p");
    currency.className = "currency";
    currency.textContent = product.price;
    card.appendChild(currency);

    let btn_add = document.createElement("button");
    btn_add.className = "btn_add";
    btn_add.textContent = " Add >> ";
    card.appendChild(btn_add);

}
console.log(card_container)


function saveProducts() {
    localStorage.setItem("product", JSON.stringify(listProducts));
}

function loadProducts() {
    let storeProduct = JSON.parse(localStorage.getItem("product"));
    if (storeProduct !== null) {
        listProducts = storeProduct;
    }
}
// saveProducts();
// loadProducts();