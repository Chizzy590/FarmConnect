const password = document.getElementById("password");
const toggleBtn = document.getElementById("togglePassword");

toggleBtn.addEventListener("click", () => {

    const icon = toggleBtn.querySelector("i");
    const text = toggleBtn.querySelector("span");

    if (password.type === "password") {
        password.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
        text.textContent = "Show";
    } else {
        password.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
        text.textContent = "Hide";
    }
});



const month = document.getElementById("month");
const day = document.getElementById("day");
const year = document.getElementById("year");

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

months.forEach((m, index) => {
    const option = document.createElement("option");
    option.value = index + 1;
    option.textContent = m;
    month.appendChild(option);
});

for (let i = 1; i <= 31; i++) {

    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;

    day.appendChild(option);
}

const currentYear = new Date().getFullYear();

for (let i = currentYear; i >= 1950; i--) {

    const option = document.createElement("option");

    option.value = i;
    option.textContent = i;

    year.appendChild(option);
}



function isValidEmail(email) {

    const regex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);
}



function isStrongPassword(password) {

    const regex =
        /^(?=.[A-Za-z])(?=.\d).{8,}$/;

    return regex.test(password);
}



const form = document.getElementById("signupForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const pass =
        password.value.trim();

    if (name === "") {

        alert("Please enter your profile name.");
        return;
    }

    if (!isValidEmail(email)) {

        alert("Please enter a valid email.");
        return;
    }

    if (!isStrongPassword(pass)) {

        alert(
            "Password must contain at least 8 characters including a number."
        );

        return;
    }

    if (
        month.selectedIndex === 0 ||
        day.selectedIndex === 0 ||
        year.selectedIndex === 0
    ) {

        alert("Please select your date of birth.");
        return;
    }

    const category =
        document.querySelector(
            'input[name="category"]:checked'
        );

    if (!category) {

        alert("Please select your category.");
        return;
    }

    alert("🎉 Account created successfully!");

    form.reset();

});
 

const inputs = document.querySelectorAll("input, select");

inputs.forEach(input => {

    input.addEventListener("focus", () => {

        input.style.boxShadow =
            "0 0 0 4px rgba(0,128,0,.15)";
    });

    input.addEventListener("blur", () => {

        input.style.boxShadow = "none";
    });

});