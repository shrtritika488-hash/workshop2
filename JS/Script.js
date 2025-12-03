// MENU TOGGLE
const menuButton = document.getElementById("menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    menuButton.innerHTML = navLinks.classList.contains("open") ? "✕" : "☰";
});

// CONTACT FORM VALIDATION
const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("message").value.trim();

    if (!name  !email  !msg) {
        formMessage.textContent = "Please fill out all fields!";
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "Thank you! I will reply soon ❤";
        formMessage.style.color = "lightgreen";
        form.reset();
    }
});
