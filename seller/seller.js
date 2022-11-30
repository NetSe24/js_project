let dialog = document.getElementById("dialog");




// Data element -------------------------------

let listProducts = [
    {
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNxs5-Knk_MwvPlbbqd77jLRjYkugotHPoUw&usqp=CAU",
        "price": "10$",
        "name": "T-Shirt",

    },
    {
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNxs5-Knk_MwvPlbbqd77jLRjYkugotHPoUw&usqp=CAU",
        "price": "10$",
        "name": "Jeans",
    },
    {
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNxs5-Knk_MwvPlbbqd77jLRjYkugotHPoUw&usqp=CAU",
        "price": "10$",
        "name": "Jeans",
    },
    {
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNxs5-Knk_MwvPlbbqd77jLRjYkugotHPoUw&usqp=CAU",
        "price": "10$",
        "name": "Jeans",
    },
    {
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNxs5-Knk_MwvPlbbqd77jLRjYkugotHPoUw&usqp=CAU",
        "price": "10$",
        "name": "Jeans",
    },
    
]


let tbody = document.querySelector("tbody");


for (let product of listProducts) {
    let tr = document.createElement("tr");
    tr.className = "tr_body";
    
    let t_name = document.createElement("td");
    t_name.textContent = product.name;
    
    let t_picture = document.createElement("td");
    let img_pic = document.createElement("img");
    img_pic.className = "img_pic";
    img_pic.src = product.img;
    t_picture.appendChild(img_pic);
    
    let t_currency = document.createElement("td");
    t_currency.textContent = product.price;

    let t_edit = document.createElement("td");
    let img_edit = document.createElement("img");
    img_edit.className = "img-edit";
    img_edit.src = "../img/edit.svg";
    t_edit.appendChild(img_edit);

    let t_delete = document.createElement("td");
    let img_delete = document.createElement("img");
    img_delete.className = "img-delete";
    img_delete.src = "../img/trash.png";
    t_delete.appendChild(img_delete);


    tr.appendChild(t_name);
    tr.appendChild(t_picture);
    tr.appendChild(t_currency)
    tr.appendChild(t_edit)
    tr.appendChild(t_delete);

    tbody.appendChild(tr);


}













function show(element) {
    element.style.display = "block";
}
function hide(element) {
    element.style.display = "none";
}

function createProduct() {
    show(dialog);
}

function Cancel() {
    hide(dialog);
}

function createCard() {
    hide(dialog);
    let img = document.createElement("img");
}



function saveProducts() {
    localStorage.setItem("product", JSON.stringify(listProducts));
}

function loadProducts() {
    let storeProduct = JSON.parse(localStorage.getItem("product"));
    if (storeProduct !== null) {
        listProducts = storeProduct;
    }
}

saveProducts();
loadProducts();