const navBar = document.querySelector("nav");
const contactBtn = document.querySelector(".contact-btn");
const aboutMe = document.querySelector(".about-me");

contactBtn.addEventListener("click", () => {
    navBar.classList.toggle("contact");
});

aboutMe.addEventListener("click", () => {
    if(navBar.classList.contains("contact")){
        navBar.classList.remove("contact");
    }
});