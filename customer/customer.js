let add_cart = document.querySelector(".paynow");

// Data element -------------------------------

let listProducts = [
  {
    "img": "https://ih1.redbubble.net/image.3221355858.8748/ssrco,classic_tee,mens,101010:01c5ca27c6,front_alt,square_product,600x600.u1.jpg",
    "price": "25",
    "name": "Skirt",
    "buy": 0,
  },
]
// show------------------------------
function show(element) {
  element.style.display = "block";
}

// hide --------------------------------------------

function hide(element) {
  element.style.display = "none";
}
// use for save data to localStorage

function saveProducts() {
  localStorage.setItem("product", JSON.stringify(listProducts));
}
// use for display all products --------------------------------------------
function loadProducts() {
  let storeProduct = JSON.parse(localStorage.getItem("product"));
  if (storeProduct !== null) {
    listProducts = storeProduct;
  }
}

// Loop for create card for display on customer page ----------------

function renderProduct(productToShow) {
  // use for load array dic from localStorage --------------------------------
  loadProducts();
  let section_card = document.querySelector(".section_card");
  let card_container = document.querySelector("#card_container");

  for (index = 0; index < productToShow.length; index++) {
    let newProduct = productToShow[index];

    // use for create card for display on customer page

    let card = document.createElement("div");
    card.className = "card";
    card.dataset.value = index;
    card_container.appendChild(card);
    let img_product = document.createElement("img");
    img_product.id = "img_pic_card";
    img_product.src = newProduct.img;
    card.appendChild(img_product);

    // create div for store the value  if product name form user input 

    let product_name = document.createElement("div");
    product_name.className = "product_name";
    product_name.textContent = "Name: ";
    strong_name = document.createElement("strong");
    strong_name.className = "strong_name";
    strong_name.textContent = newProduct.name;
    strong_name.style.color = "black";
    product_name.appendChild(strong_name);
    card.appendChild(product_name);
    let currency = document.createElement("p");
    currency.className = "currency";
    currency.textContent = "Price($): ";
    strong_currency = document.createElement("strong");
    strong_currency.style.color = "black";
    strong_currency.textContent = newProduct.price;
    currency.appendChild(strong_currency);
    card.appendChild(currency);

    // create div for store buttor detail more ------------------------

    let div_button = document.createElement("div");
    div_button.className = "div_button";
    let btn_add = document.createElement("button");
    btn_add.className = "btn_add";
    div_button.appendChild(btn_add);
    btn_add.textContent = " Detail More ";
    btn_add.dataset.index = index;
    btn_add.addEventListener("click", cardDetail) // click on the add button
    card.appendChild(div_button);

    // create star icons   --------------------------------

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

//  use  for looping to get add data in 

let dialog_cart_id = document.querySelector("#dialog_cart");


function cardDetail(event) {
  show(dialog_cart_container)

  let Oldsection_card = document.querySelector(".section_card");
  Oldsection_card.remove();
  loadProducts();

  // get index of each card ----------------------------------------

  let index_value = event.target.parentElement.parentElement.dataset.value;

  let section_card = document.createElement("section")
  section_card.className = "section_card";
  dialog_cart_id.appendChild(section_card);

  if (index_value) {

    // add element inside the section  -----------------------

    // class left of section_card 

    let section_card_left = document.createElement("div");
    section_card_left.className = "section_card_left";
    section_card.appendChild(section_card_left);

    // ... create div that get element from listProducts and get value of price ... //

    // use for get value of price from the user input------

    let price_input = document.createElement("div");
    price_input.className = "price_input";
    let strong_price = document.createElement("strong");
    strong_price.className = "strong_price";
    strong_price.textContent = listProducts[index_value].price;
    price_input.textContent = " Price of product : ";
    price_input.appendChild(strong_price)
    section_card_left.appendChild(price_input);

    // class div that get element from listProducts and get value of name from user input

    let name_input = document.createElement("div");
    name_input.className = "name_input";
    name_input.textContent = "Name of product : ";
    let strong_name = document.createElement("strong");
    strong_name.className = "strong_name";
    strong_name.textContent = listProducts[index_value].name;
    name_input.appendChild(strong_name);
    section_card_left.appendChild(name_input);

    // create img tag use for get URL img form user input ... 

    let pic_input = document.createElement("img");
    pic_input.id = "pic_input";
    pic_input.src = listProducts[index_value].img;
    section_card_left.appendChild(pic_input);

    // class right of section_card 

    let section_card_right = document.createElement("div");
    section_card_right.className = "section_card_right";
    section_card.appendChild(section_card_right);

    let h3 = document.createElement("h3");
    section_card_right.appendChild(h3);
    h3.className = "h3";
    h3.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorem repudiandae harum ab. Adipisci quisquam in ipsam qui necessitatibus dolores, tempora iure. Praesentium nemo illo id fuga doloremque repellendus nesciunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorem repudiandae harum ab. Adipisci quisquam in ipsam qui necessitatibus dolores, tempora iure. Praesentium nemo illo id fuga doloremque repellendus nesciunt!";

    // create chioce for choose ----------------------------------

    let arrayOfSize = ["Choose Size", "S", "M", "L", "XL", "XXL"];
    let div_sec = document.createElement("div");
    let chioce = document.createElement("select");

    div_sec.appendChild(chioce);
    div_sec.className = "div_sec";

    chioce.className = "chioce_select";
    chioce.textContent = "Choose size";
    for (i = 0; i < arrayOfSize.length; i++) {
      let option = document.createElement("option");
      if (i == 0) {
        option.disabled = true;
        chioce.appendChild(option);
      }
      option.value = arrayOfSize[i];
      option.textContent = arrayOfSize[i];
      chioce.appendChild(option);
    }

    section_card_right.appendChild(div_sec);

    let div_btn_add = document.createElement("div")
    div_btn_add.className = "div_btn_add";
    let btn_add = document.createElement("button");
    btn_add.dataset.index = index_value;

    btn_add.id = "btn_add";
    btn_add.addEventListener("click", paynow)

    let a_add = document.createElement("a");
    a_add.className = "a_add";
    a_add.href = "#";

    a_add.textContent = "Add Cart";

    btn_add.appendChild(a_add);
    div_btn_add.appendChild(btn_add);
    div_sec.appendChild(div_btn_add);
    section_card_right.appendChild(div_sec)
  }
}

// Create new array for store in payment page ---------------------------

let listOrder = []
function paynow() {

  hide(dialog_cart_container);
  let btn_add = document.querySelector("#btn_add");

  // get index from btn_add  for get element.............................

  let indexBtn = parseInt(btn_add.getAttribute("data-index"));
  let dicOrder = {};
  if (indexBtn != null) {
    dicOrder.imgOrder = listProducts[indexBtn].img;
    dicOrder.nameOrder = listProducts[indexBtn].name;
    dicOrder.priceOrder = listProducts[indexBtn].price;
  }
  listOrder.push(dicOrder)

  saveOrder();
  loadOrder();

}

function saveOrder() {
  localStorage.setItem("listOrder", JSON.stringify(listOrder));
}

function loadOrder() {
  let storeOrder = JSON.parse(localStorage.getItem("listOrder"));
  if (storeOrder != null) {
    listOrder = storeOrder;
  }
}

// ----------------Cancel btn click on dialog details ----------------------

let dialog_cart_container = document.querySelector(".dialog_cart");
let dialog_cart = document.querySelector("#dialog_cart");
let btn_add_index = document.querySelector(".btn_add");
function Cancel() {
  hide(dialog_cart_container);
}

// Search products in customer page search by number or text ----------------

let searchBar = () => {
  var search_card = document.querySelectorAll(".card");
  var search_box = document.querySelector("#bar_input").value.toUpperCase();
  for (let i = 0; i < search_card.length; i++) {
    let search1 = search_card[i].getElementsByTagName("strong")[0];
    let search2 = search_card[i].getElementsByTagName("strong")[1];

    if (search1 || search2) {
      let p1 = search1.textContent || search1.innerHTML;
      let p2 = search2.textContent || search2.innerHTML;
      if ((p1.toUpperCase().indexOf(search_box) > -1) || (p2.toUpperCase().indexOf(search_box) > -1)) {
        show(search_card[i])
      }
      else {
        hide(search_card[i])
      }
    }
  }
}

// display funtions ----------------------------

loadProducts();
renderProduct(listProducts);