let menu = document.getElementById("span__toggle");
let menu_items = document.getElementById("nav__toggle");
let title = document.getElementById("title__h2");

menu.addEventListener("mouseenter", function () {
  menu_items.classList.add("showing");
});

menu_items.addEventListener("mouseleave", function () {
  menu_items.classList.remove("showing");
});

title.addEventListener("mouseenter", function() {
  menu_items.classList.remove("showing");
});