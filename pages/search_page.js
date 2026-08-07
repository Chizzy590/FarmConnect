const products = [
{
    name: "Fresh Carrots",
    category: "Vegetables",
    price: 1000,
    image: "image/product image-12.png"
},

{
    name: "Corn",
    category: "Maize",
    price: 2000,
    image: "image/product image-1.png"
},

{
    name: "Pineapple",
    category: "Fruits",
    price: 3500,
    image: "image/product image-11.png"
},

{
    name: "Cassava",
    category: "Cassava",
    price: 2000,
    image: "image/product image-10.png"
},

{
    name: "Plantain",
    category: "Fruit",
    price: 5000,
    image: "image/product image-9.png"
},

{
    name: "Beans",
    category: "Legumes",
    price: 9000,
    image: "image/product image-8.png"
},

{
    name: "Sorghum",
    category: "Cereal",
    price: 5000,
    image: "image/product image-7.png"
},

{
    name: "Tomatoes",
    category: "Vegetables",
    price: 3000,
    image: "image/product image.png"
},

{
    name: "Groundnut",
    category: "Legume",
    price: 2000,
    image: "image/product image-6.png"
},

{
    name: "Green Vegetables",
    category: "Vegetables",
    price: 2000,
    image: "image/product image-5.png"
},

{
    name: "Soybean",
    category: "Legume",
    price: 4000,
    image: "image/product image-4.png"
},

{
    name: "Wheat",
    category: "Cereal",
    price: 6000,
    image: "image/product image-3.png"
},

{
    name: "Potatoes",
    category: "Plant",
    price: 4000,
    image: "image/product image-2.png"
},

{
    name: "Rice",
    category: "Grains",
    price: 4500,
    image: "image/image 4.png"
}
];




const grid = document.getElementById("productGrid");
const topSelling = document.getElementById("topSelling");
const recommended = document.getElementById("recommended");

const searchInput = document.getElementById("searchInput");
const sortProducts = document.getElementById("sortProducts");




function createCard(product){

return `

<div class="product-card">

<img src="${product.image}" alt="${product.name}">

<div class="product-info">

<p class="category">${product.category}</p>

<h3 class="product-name">${product.name}</h3>

<div class="price-buy">

<p class="price">₦${product.price.toLocaleString()}</p>

<button class="buy-btn">

Buy Now

</button>

</div>

</div>

</div>

`;

}





function displayProducts(data){

grid.innerHTML = "";

data.forEach(product=>{

grid.innerHTML += createCard(product);

});

}

displayProducts(products);




topSelling.innerHTML = "";

products.slice(9,13).forEach(product=>{

topSelling.innerHTML += createCard(product);

});




recommended.innerHTML = "";

products.slice(0,4).forEach(product=>{

recommended.innerHTML += createCard(product);

});





searchInput.addEventListener("keyup",()=>{

const keyword = searchInput.value.toLowerCase();

const filtered = products.filter(product=>

product.name.toLowerCase().includes(keyword)

);

displayProducts(filtered);

});





sortProducts.addEventListener("change",()=>{

let sorted=[...products];

if(sortProducts.value==="Lowest Price"){

sorted.sort((a,b)=>a.price-b.price);

}

else if(sortProducts.value==="Highest Price"){

sorted.sort((a,b)=>b.price-a.price);

}

else if(sortProducts.value==="Name"){

sorted.sort((a,b)=>

a.name.localeCompare(b.name)

);

}

displayProducts(sorted);

});





const loadMore=document.getElementById("loadMore");

loadMore.addEventListener("click",()=>{

alert("All products are already displayed.");

});





document.addEventListener("click",(e)=>{

if(e.target.classList.contains("buy-btn")){

alert("Product added to cart!");

}

});