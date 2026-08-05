const resetForm = document.querySelector(".reset-card form");
const emailInput = resetForm.querySelector("input[type='email']");

resetForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (emailInput.value.trim() === "") {
        alert("Please enter your email address.");
        emailInput.focus();
        return;
    }

    alert("Password reset link has been sent to your email.");

    resetForm.reset();
});