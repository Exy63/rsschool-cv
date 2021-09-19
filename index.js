const burgerMenu = document.getElementById("burger-menu");
const button = burgerMenu.querySelector(".bm-button");
const links = burgerMenu.querySelectorAll(".bm-link");

button.addEventListener("click", (e) => {
  e.preventDefault();
  burgerMenu.classList.toggle("menu-active");
});

links.forEach((el) => {
  el.addEventListener("click", (e) => {
    burgerMenu.classList.remove("menu-active");
  });
});
