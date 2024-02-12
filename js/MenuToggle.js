let menu = document.getElementById("span__toggle");
let menu_item = document.getElementById("nav__toggle");

menu.addEventListener("mouseenter", function () {
  menu_item.style.display = "block";
});

menu.addEventListener("mouseleave", function () {
  menu_item.style.display = "none";
});
