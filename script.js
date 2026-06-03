// Dark Mode

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});

// FAQ Accordion

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        if(answer.style.maxHeight){
            answer.style.maxHeight = null;
        }
        else{
            answer.style.maxHeight =
            answer.scrollHeight + "px";
        }

    });
});

// Contact Form

const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Message Sent Successfully!");

    form.reset();
});

// Navbar Shadow on Scroll

window.addEventListener("scroll", () => {

    const navbar =
    document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.style.boxShadow =
        "0 2px 15px rgba(0,0,0,0.3)";
    }
    else{
        navbar.style.boxShadow = "none";
    }

});