const menuIcon = document.querySelector
(".hamburger-menu");
const snav = document.querySelector(".snav");

menuIcon.addEventListener("click",() => {
    snav.classList.toggle("change");
}); 