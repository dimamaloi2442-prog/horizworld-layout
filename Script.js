let name = "Emerald_NS";
console.log("Привет," + name);

let logo = document.querySelector(".logo");
logo.textContent = "HorizWorld";

let cards = document.querySelectorAll(".card");
console.log("Карточек на странице: " + cards.length);

let firstCardTitle = document.querySelector(".card h3");
firstCardTitle.textContent = "Выживание (обновлено)"

let footerCopy = document.querySelector(".footer");
footerCopy.textContent = "© 2026 Emerald_NS. Все права защищены."

cards.forEach(function(card) {
    let title = card.querySelector("h3").textContent;
    console.log("Карточка - " + title);
});

let themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

let savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}
