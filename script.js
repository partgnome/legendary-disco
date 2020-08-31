let $burger = document.querySelector(".navbar-burger");
let $menu = document.querySelector(".navbar-menu");

$burger.addEventListener("click", () => {
  console.log("burger clicked!");
  $burger.classList.toggle("is-active");
  $menu.classList.toggle("is-active");
  $menu.classList.toggle("gradient");
});
