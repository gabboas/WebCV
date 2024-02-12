let menu = document.getElementById("span__toggle");
let menu_item = document.getElementById("nav__toggle");
let div = document.getElementById("expansiondiv__container");

menu.addEventListener("mouseenter", function () {
  menu_item.classList.add("aparece");
});

menu_item.addEventListener("mouseleave", function () {
  menu_item.classList.remove("aparece");
});
