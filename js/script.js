/* ===========================
   SMOOTH SCROLL
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* ===========================
   STICKY NAVBAR
=========================== */

const header = document.querySelector("header");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    });

}


/* ===========================
   MOBILE MENU
=========================== */

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if(menu && nav){

    menu.addEventListener("click", ()=>{

        nav.classList.toggle("show");

    });

}

/* ===========================
   CLOSE MOBILE MENU
=========================== */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if (nav) {

            nav.classList.remove("show");

        }

    });

});


/* ===========================
   ACTIVE NAVIGATION
=========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

if (sections.length > 0) {

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

}


/* ===========================
   UPDATE CART
=========================== */

function updateCart() {

    const subtotalElement = document.querySelector(".subtotal");
    const grandTotalElement = document.querySelector(".grand-total");

    if (!subtotalElement || !grandTotalElement) return;

    let subtotal = 0;

    const cartItems = document.querySelectorAll(".cart-item");

    cartItems.forEach(item => {

        const qty = Number(item.querySelector(".qty").textContent);

        const price = Number(item.querySelector(".price").dataset.price);

        subtotal += qty * price;

    });

    subtotalElement.textContent =
        "₦" + subtotal.toLocaleString();

    grandTotalElement.textContent =
        "₦" + subtotal.toLocaleString();

    const cartTable = document.querySelector(".cart-table");
    const cartFooter = document.querySelector(".cart-footer");
    const emptyCart = document.querySelector(".empty-cart");

    if (cartItems.length === 0) {

        if (cartTable) cartTable.style.display = "none";
        if (cartFooter) cartFooter.style.display = "none";
        if (emptyCart) emptyCart.style.display = "block";

    }

}


/* ===========================
   CART QUANTITY
=========================== */

document.querySelectorAll(".cart-item").forEach(item => {

    const plus = item.querySelector(".plus");
    const minus = item.querySelector(".minus");
    const qty = item.querySelector(".qty");
    const price = item.querySelector(".price");
    const total = item.querySelector(".total");

    if (!plus || !minus || !qty || !price || !total) return;

    const unitPrice = Number(price.dataset.price);

    plus.addEventListener("click", () => {

        let quantity = Number(qty.textContent);

        quantity++;

        qty.textContent = quantity;

        total.textContent =
            "₦" + (unitPrice * quantity).toLocaleString();

        updateCart();

    });

    minus.addEventListener("click", () => {

        let quantity = Number(qty.textContent);

        if (quantity > 1) {

            quantity--;

            qty.textContent = quantity;

            total.textContent =
                "₦" + (unitPrice * quantity).toLocaleString();

            updateCart();

        }

    });

});
/* ===========================
   REMOVE ITEM
=========================== */

document.querySelectorAll(".remove-btn").forEach(button => {

    button.addEventListener("click", () => {

        const item = button.closest(".cart-item");

        if (item) {

            item.remove();

            updateCart();

        }

    });

});


/* ===========================
   CHECKOUT VALIDATION
=========================== */

const payBtn = document.querySelector("#payBtn");

if (payBtn) {

    payBtn.addEventListener("click", function (e) {

        e.preventDefault();

        const fullName = document.querySelector("#fullName");
        const email = document.querySelector("#email");
        const phone = document.querySelector("#phone");
        const address = document.querySelector("#address");
        const city = document.querySelector("#city");
        const state = document.querySelector("#state");
        const country = document.querySelector("#country");

        if (
            !fullName.value.trim() ||
            !email.value.trim() ||
            !phone.value.trim() ||
            !address.value.trim() ||
            !city.value.trim() ||
            !state.value.trim() ||
            !country.value.trim()
        ) {

            alert("Please fill in all required fields.");
            return;

        }

        localStorage.setItem("customerName", fullName.value);

        const paymentMethod =
            document.querySelector('input[name="payment"]:checked').value;

        if (paymentMethod === "online") {

            window.location.href = "success.html";

        } else {

            alert("Your order has been placed successfully. Payment will be made upon delivery.");

            window.location.href = "success.html";

        }

    });

}
/* ===========================
CHANGE BUTTON TEXT
=========================== */

const paymentOptions = document.querySelectorAll('input[name="payment"]');
const payButton = document.querySelector("#payBtn");

if(paymentOptions.length > 0 && payButton){

    paymentOptions.forEach(option => {

        option.addEventListener("change", () => {

            if(option.value === "delivery" && option.checked){

                payButton.textContent = "Place Order";

            }

            if(option.value === "online" && option.checked){

                payButton.textContent = "Pay Now";

            }

        });

    });

}
/* ===========================
SUCCESS PAGE
=========================== */

const successTitle = document.querySelector("#successTitle");

const successMessage = document.querySelector("#successMessage");

if(successTitle && successMessage){

    const customerName = localStorage.getItem("customerName");

    if(customerName){

        successTitle.textContent = `Thank You, ${customerName}!`;

        successMessage.textContent =
        "Your order has been placed successfully. We appreciate your purchase and will begin processing your order immediately.";

    }

}

/* ===========================
SUCCESS PAGE BUY NOW
=========================== */

const buyButtons = document.querySelectorAll(".buy-now-btn");

buyButtons.forEach(button => {

    button.addEventListener("click", () => {

        const product = button.dataset.product;

        localStorage.setItem("selectedProduct", product);

        alert(product.charAt(0).toUpperCase() + product.slice(1) + " added to cart!");

        window.location.href = "cart.html";

    });

});

/* ===========================
UPDATE CART FROM SUCCESS PAGE
=========================== */

const selectedProduct = localStorage.getItem("selectedProduct");

if (selectedProduct && document.querySelector(".cart-item:last-child")) {

    const secondItem = document.querySelector(".cart-item:last-child");

    const image = secondItem.querySelector("img");
    const title = secondItem.querySelector("h3");
    const price = secondItem.querySelector(".price");
    const total = secondItem.querySelector(".total");

    const products = {

        tomatoes: {
            name: "Tomatoes",
            image: "../images/company png/tomatoes.jpg",
            price: 9000
        },

        beans: {
            name: "Beans",
            image: "../images/company png/beans.jpg",
            price: 15000
        },

        cassava: {
            name: "Cassava",
            image: "../images/company png/cassava.jpg",
            price: 12000
        },

        groundnut: {
            name: "Groundnut",
            image: "../images/company png/groundnut.jpg",
            price: 18000
        }

    };

    const item = products[selectedProduct];

    if(item){

        image.src = item.image;

        image.alt = item.name;

        title.textContent = item.name;

        price.dataset.price = item.price;

        price.textContent = "₦" + item.price.toLocaleString();

        total.textContent = "₦" + item.price.toLocaleString();

        updateCart();

    }

    localStorage.removeItem("selectedProduct");

}