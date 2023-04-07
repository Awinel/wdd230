const hamburguer = document.querySelector(".hamburguer");
const navBar = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("change");
  navBar.classList.toggle("active");
})