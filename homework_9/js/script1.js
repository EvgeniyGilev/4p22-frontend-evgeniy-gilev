'use strict';

// первый вариант c глобальными переменными

let firstValue = 0;
let secondValue = 1;

function fibonacci() {
  console.log(firstValue);
  const newFirstValue = secondValue;

  secondValue = firstValue + secondValue;

  firstValue = newFirstValue;
}

fibonacci(); // Вывод в консоль: 0
fibonacci(); // Вывод в консоль: 1
fibonacci(); // Вывод в консоль: 1
fibonacci(); // Вывод в консоль: 2
fibonacci(); // Вывод в консоль: 3
