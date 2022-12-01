let dialog = document.getElementById("dialog");
let table = document.querySelector("table");



// Data element -------------------------------

let listProducts = [
    {
        "img": "https://cdn-images.buyma.com/imgdata/item/210128/0064123360/322883442/428.jpg",
        "price": "10$",
        "name": "T-Shirt",
    },


]

// show 

function show(element) {
    element.style.display = "block";
}

// hide --------------------------------------------

function hide(element) {
    element.style.display = "none";
}
//save and restore -------------------------------------------- 
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

    let tbody = document.querySelector("#tbody");
    if (tbody !== null) {
        tbody.remove();
    }

    newTbody = document.createElement("tbody");
    newTbody.id = "tbody";


    for (let index = 0; index < listProducts.length; index++) {
        let newProduct = listProducts[index];

        let tr = document.createElement("tr");
        tr.className = "tr_body";
        tr.dataset.index = index;

        let t_name = document.createElement("td");
        t_name.textContent = newProduct.name;
        tr.appendChild(t_name);


        let t_picture = document.createElement("td");
        let img_pic = document.createElement("img");
        img_pic.className = "img_pic";
        img_pic.src = newProduct.img;
        t_picture.appendChild(img_pic);
        tr.appendChild(t_picture);

        let t_currency = document.createElement("td");
        t_currency.textContent = newProduct.price;
        tr.appendChild(t_currency)

        let t_edit = document.createElement("td");
        let img_edit = document.createElement("img");
        img_edit.className = "img-edit";
        img_edit.src = "../img/edit.svg";
        img_edit.addEventListener("click", editProduct);
        t_edit.appendChild(img_edit);
        tr.appendChild(t_edit)

        let t_delete = document.createElement("td");
        let img_delete = document.createElement("img");
        img_delete.className = "img-delete";
        img_delete.src = "../img/trash.png";
        img_delete.addEventListener("click", removeProduct)
        t_delete.appendChild(img_delete);
        tr.appendChild(t_delete);

        newTbody.appendChild(tr);
    }
    table.appendChild(newTbody)
    saveProducts();
}



function createProduct() {
    document.querySelector("#create").textContent = "Create"
    hide(dialog);

    let newListProduct = {};

    let input_pic = document.querySelector("#input_pic");
    let input_name = document.querySelector("#input_name");
    let input_price = document.querySelector("#input_price");

    newListProduct.img = input_pic.value;
    newListProduct.name = input_name.value;
    newListProduct.price = input_price.value;

    listProducts.push(newListProduct);
    input_pic.value = "";
    input_name.value = "";
    input_price.value = "";

    saveProducts();
    renderProduct();
}


function removeProduct(event) {
    let index = event.target.parentElement.parentElement.dataset.index;
    listProducts.splice(index, 1);

    saveProducts();
    renderProduct();
}

function editProduct(event) {
    document.querySelector("#create").textContent = "Update"
    let index = event.target.parentElement.parentElement.dataset.index;
    console.log(index);
    document.querySelector("#input_pic").value = listProducts[index].img;
    document.querySelector("#input_name").value = listProducts[index].name;
    document.querySelector("#input_price").value = listProducts[index].price;
    show(dialog);
    listProducts.splice(index, 1);
    saveProducts();
}

function addProduct() {
    show(dialog);

}

function Cancel() {
    hide(dialog);
}

// saveProducts();
loadProducts();
renderProduct();
