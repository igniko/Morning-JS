// Оператор if
// Перевірка часу: Напишіть код, який перевіряє час доби у змінній hour і виводить "Доброго ранку!" якщо час менше 12.

let notice = "Добрий ранок!";
const hour = 9;
if (hour < 12) {
  console.log("Добрий ранок!");
}

// Перевірка віку: Напишіть програму, яка перевіряє вік користувача і виводить "Ви повнолітній", якщо вік більший або дорівнює 18.

let message = "Ви повнолітній";
const age = 35;
if (hour >= 18) {
  console.log("Ви повнолітній");
}

// Оператор if else
// Парність числа: Напишіть програму, яка перевіряє, чи є число парним або непарним, і виводить відповідне повідомлення. (згадайте ознаки парних чисел з математики та оператор % в JavaScript)

let number = 8; // змініть значення для перевірки

if (number % 2 === 0) {
  console.log("Число парне");
} else {
  console.log("Число непарне");
}

// Оператор if else if
// Оцінка за балами: Напишіть програму, яка оцінює бали студента (від 0 до 100) і виводить оцінку: "відмінно" (90-100), "добре" (70-89), "задовільно" (50-69), "незадовільно" (менше 50).

let points = 911; // змініть значення для перевірки

if (points >= 101) {
  console.log("Немає даних");
} else if (points <= 49) {
  console.log("Не задовільно");
} else if (points <= 69 && points >= 50) {
  console.log("Задовільно");
} else if (points <= 89 && points >= 70) {
  console.log("Добре");
} else if (points <= 100 && points >= 90) {
  console.log("Відмінно");
}

// Визначення пори року: Напишіть програму, яка визначає пору року залежно від номера місяця і виводить відповідне повідомлення.

let month = 4; // змініть значення для перевірки

if (month >= 3 && month <= 5) {
  console.log("Весна");
} else if (month >= 6 && month <= 8) {
  console.log("Літо");
} else if (month >= 9 && month <= 11) {
  console.log("Осінь");
} else if (month === 1 || month === 2 || month === 12) {
  console.log("Зима");
} else {
  console.log("Місяців тільки від 1 до 12");
}

// Оператор switch case
// Обмін долларів, евро або британських фунтів на гривню по встановленому заздалегідь курсу кожної валюти для 100 грошових одиниць.

let Currency = "100 USD"; // змініть значення для перевірки

switch (Currency) {
  case "100 USD":
    console.log(`${Currency} is 3 959.94 UAH`);
    break;
  case "100 EUR":
    console.log(`${Currency} is 4 272.32 UAH`);
    break;
  case "100 GBP":
    console.log(`${Currency} is 4 967.85 UAH`);
    break;
  default:
    console.log(`${Currency} is not valid currency`);
    break;
}

// Тернарний оператор
// Повідомлення про знижку: Напишіть однорядковий код, який виводить "Знижка 10%", якщо сума покупки перевищує 1000 грн, а інакше — "Без знижки".

let purchaseAmount = 1001; // змініть значення для перевірки
let discountMessage = purchaseAmount > 1000 ? "Знижка 10%" : "Без знижки";

console.log(discountMessage);
