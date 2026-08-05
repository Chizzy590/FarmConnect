// ===============================
// Edit Profile
// ===============================

const editBtn = document.querySelector(".edit-btn");

editBtn.addEventListener("click", () => {

    const name = document.querySelector(".details div:nth-child(1) p");
    const email = document.querySelector(".details div:nth-child(2) p");
    const phone = document.querySelector(".details div:nth-child(3) p");

    const newName = prompt("Enter your name:", name.textContent);
    const newEmail = prompt("Enter your email:", email.textContent);
    const newPhone = prompt("Enter your phone number:", phone.textContent);

    if (newName !== null && newName.trim() !== "") {
        name.textContent = newName;
    }

    if (newEmail !== null && newEmail.trim() !== "") {
        email.textContent = newEmail;
    }

    if (newPhone !== null && newPhone.trim() !== "") {
        phone.textContent = newPhone;
    }

    alert("Profile updated successfully!");
});


// ===============================
// Reset Password
// ===============================

const passwordForm = document.getElementById("passwordForm");

passwordForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const currentPassword =
        document.getElementById("currentPassword").value;

    const newPassword =
        document.getElementById("newPassword").value;

    if (currentPassword === "" || newPassword === "") {

        alert("Please fill in all fields.");

        return;
    }

    if (newPassword.length < 6) {

        alert("New password must be at least 6 characters.");

        return;
    }

    alert("Password reset successfully!");

    passwordForm.reset();

});


// ===============================
// Newsletter Subscription
// ===============================

const subscribeBtn =
    document.querySelector(".subscribe-box button");

const emailInput =
    document.querySelector(".subscribe-box input");

subscribeBtn.addEventListener("click", () => {

    const email = emailInput.value.trim();

    if (email === "") {

        alert("Please enter your email.");

        return;

    }

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        return;

    }

    alert("Thanks for subscribing!");

    emailInput.value = "";

});


// ===============================
// Search Box
// ===============================

const searchInput =
    document.querySelector(".search-box input");

const searchButton =
    document.querySelector(".search-box button");

searchButton.addEventListener("click", () => {

    const keyword = searchInput.value.trim();

    if (keyword === "") {

        alert("Please enter something to search.");

        return;

    }

    alert(`Searching for: ${keyword}`);

});


// Press Enter to Search

searchInput.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {

        e.preventDefault();

        searchButton.click();

    }

});


// ===============================
// Cart Notification
// ===============================

const cartBadge = document.querySelector(".cart span");

let cartItems = parseInt(cartBadge.textContent);

document.querySelector(".cart").addEventListener("click", () => {

    alert(`You currently have ${cartItems} item(s) in your cart.`);

});


// ===============================
// Smooth Hover Animation
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-5px)";
        card.style.transition = ".3s ease";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});