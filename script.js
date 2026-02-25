// Dark Mode Toggle
document.getElementById("darkBtn").onclick = function () {
    document.body.classList.toggle("dark");
};

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    if (name === "" || phone === "" || message === "") {
        alert("Please fill all fields!");
    } else {
        alert("Thank You! We will contact you soon.");
        this.reset();
    }
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
