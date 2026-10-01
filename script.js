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

function createCard(title, description) {
  // 1. Создаём div с классом card
  let card = document.createElement("div");
  card.classList.add("card");

  // 2. Создаём h3 с заголовком
  let h3 = document.createElement("h3");
  h3.textContent = title;

  // 3. Создаём p с описанием
  let p = document.createElement("p");
  p.textContent = description;

   let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Удалить";
  deleteBtn.classList.add("delete-btn");

  // НОВОЕ: обработчик клика на кнопку
  deleteBtn.addEventListener("click", function() {
    card.remove();
  });

  // 4. Складываем h3 и p внутрь card
  card.appendChild(h3);
  card.appendChild(p);
  card.appendChild(deleteBtn);

  // 5. Возвращаем готовую карточку
  return card;
}

let cardsContainer = document.querySelector(".cards");

let count = 0;

let addForm = document.querySelector(".add-form");
let inputTitle = document.querySelector(".input-title");
let inputDesc = document.querySelector(".input-desc");

addForm.addEventListener("submit", function(event) {
  event.preventDefault();   // ← обязательно! отменяет перезагрузку страницы

  let title = inputTitle.value;   // ← берём текст из поля
  let desc = inputDesc.value;

  let newCard = createCard(title, desc);
  cardsContainer.appendChild(newCard);

  inputTitle.value = "";   // ← очищаем поля
  inputDesc.value = "";
});
