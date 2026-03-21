 // Dark Mode Toggle
document.getElementById("darkBtn").onclick = function () {
    document.body.classList.toggle("dark");
};

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let service = document.getElementById("service").value;
    let message = document.getElementById("message").value;

    if (name === "" || phone === "" || service === "") {
        alert("Please fill required fields!");
        return;
    }

    let whatsappMessage = `Hello RAJ ELECTRONICS,%0A
Name: ${name}%0A
Phone: ${phone}%0A
Service: ${service}%0A
Problem: ${message}`;

    window.open(`https://wa.me/918409723243?text=${whatsappMessage}`, "_blank");

    this.reset();
});
// Scroll Animation
window.addEventListener("scroll", function () {
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        let position = card.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;
        if (position < screenHeight - 100) {
            card.style.opacity = "1";
        }
    });
});
let productMsg = `Hello, I want to buy LED Bulb`;
window.open(`https://wa.me/918409723243?text=${productMsg}`);