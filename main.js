const nav_toggle = document.querySelector(".nav-toggle");
const nav_list = document.querySelector(".nav_list");

nav_toggle.addEventListener("click", () => {
  nav_list.classList.toggle("nav_list--visible");
});
