let iconCart = document.querySelector('.iconCart');
let cart = document.querySelector('.cart');
let container = document.querySelector('.container');
let close = document.querySelector('.close')

iconCart.addEventListener("click",()=>{
    if(cart.style.right == "-100%"){
        cart.style.right = "0";
        container.style.transform = "translateX(-400px)";
    }else{
        cart.style.right = "-100%";
        container.style.transform = "translateX(0)";
    }
})
close.addEventListener("click", ()=>{
    cart.style.right = "-100%";
    container.style.transform = "translateX(0)";
})

let products = null;
//get data from json file
fetch('products.json')
.then(response => response.json())
.then(data => {
    products = data;
    addDataToHTML();
})

//show data in list html
function addDataToHTML(){
    //remove datas default in html
    let listProductsHTML = document.querySelector('.listProducts');
    listProductsHTML.innerHTML ='';

    //add new data
    if(products != null){
        products.forEach(products => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML =
            '<img src="${products.image}">'
            <h2>${products.name}</h2>
            <><div class="price">$${products.price}</div><button onclick="addCart(${products.id})">Add To Cart</button></>;
            listProductsHTML.appendChild(newProduct);
        });
    }    
}