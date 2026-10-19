//Создай три числа и найди среди них самое большое ( number )
const number1 = prompt("Введите любое первое число:");
const number2 = prompt("Введите любое второе число:");
const number3 = prompt("Введите любое третье число:");
if (number1 >= number2 && number1 >= number3) {
  console.log(number1 + " win");
} else if (number2 >= number1 && number2 >= number3) {
  console.log(number2 + " win");
} else {
  console.log(number3 + " win");
}


//Проверь, находится ли возраст в диапазоне от 18 до 60 лет включительно ( true | false )
const age = prompt("Введите ваш возраст:");
if (age <= 60  && age >= 18  ) console.log(true);
else console.log(false);


//Создай константы username и password, затем попроси у пользователя ввести username и пароль. Eсли пользователь
// ввёл данные корректно - выведи “Вы успешно вошли в систему”, а если нет то выведи “Некорректный username или пароль”
const username = "Ali";
const password = "12345";

const enteredUsername = prompt("Введите username:");
const enteredPassword = prompt("Введите пароль:");

if (enteredUsername === username && enteredPassword === password) {
  console.log("Вы успешно вошли в систему");
} else {
  console.log("Некорректный username или пароль");
}


//Создай тест из 5 вопросов и создай 5 констант с правильными ответами. Попроси у пользователя ввести 5 ответов на всё
// 5 вопросов и в конце выведи количество правильных ответов пользователя ( 0 | 1 | 2 | 3 | 4 | 5 )
const correctAnswer1 = "Париж";
const correctAnswer2 = "7";
const correctAnswer3 = "Марс";
const correctAnswer4 = "Тихий";
const correctAnswer5 = "HTML";

let score = 0;

const answer1 = prompt("1. Столица Франции?");
const answer2 = prompt("2. Сколько дней в неделе?");
const answer3 = prompt("3. Какая планета называется Красной планетой?");
const answer4 = prompt("4. Какой океан самый большой?");
const answer5 = prompt("5. Какой язык используют для разметки веб-страниц?");

if (answer1 === correctAnswer1) {
  score++;
}

if (answer2 === correctAnswer2) {
  score++;
}

if (answer3 === correctAnswer3) {
  score++;
}

if (answer4 === correctAnswer4) {
  score++;
}

if (answer5 === correctAnswer5) {
  score++;
}

console.log("Количество правильных ответов: " + score);


//Если число делится на 2 или на 7, выведи "Подходит" а иначе “Не подходит”  ( "Подходит" |  “Не подходит” )
const number = prompt("Введите любое число:");

if (number % 2 === 0 || number % 7 === 0) {
  console.log("Подходит");
} else {
  console.log("Не подходит");
}


//Если сумма покупки больше 5000, предоставь скидку 10% и выведи результат, а иначе выведи саму сумму. ( number )
const purchaseAmount = 6000;

if (purchaseAmount > 5000) {
  const discountedAmount = purchaseAmount * 0.9;
  console.log(discountedAmount);
} else {
  console.log(purchaseAmount);
}


//Проверь, является ли символ гласной буквой (a, e, i, o, u). ( true | false )
const letter = prompt("Введите любую гласную букву:");

const isVowel =
  letter === "a" ||
  letter === "e" ||
  letter === "i" ||
  letter === "o" ||
  letter === "u";

console.log(isVowel);


//Попроси у пользователя число и процент, затем вычисли данный процент от данного числа ( number )
const number0 = Number(prompt("Введите число:"));
const percent = Number(prompt("Введите процент:"));

const result = number0 * percent / 100;

console.log(result);