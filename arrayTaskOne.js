`use strict`;

/* 

1. **Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку:**

const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials;

/ тут ваш код ...*

console.log(initials); // [ "Г.П.А", "П.О.І", "Р.А.О"]

*/
// v1
/*
const userNames = [
  'Петрик Ольга Іванівна',
  'Гнатюк Петро Антонович',
  'Рудко Андрій Опанасович',
];

let initials = userNames.toString();
let cutFirst =
  initials.substring(0, 1) +
  '.' +
  initials.substring(7, 8) +
  '.' +
  initials.substring(13, 14) +
  ', ' +
  initials.substring(22, 23) +
  '.' +
  initials.substring(29, 30) +
  '.' +
  initials.substring(35, 36) +
  ', ' +
  initials.substring(45, 46) +
  '.' +
  initials.substring(51, 52) +
  '.' +
  initials.substring(58, 59);

initials = cutFirst.split(' ').sort();

console.log(initials); //[ "Г.П.А", "П.О.І", "Р.А.О"];
// console.log(cutFirst); // П.О.І, Г.П.А, Р.А.О
*/

// v2
// 
const userNames = ['Петрик Ольга Іванівна'];

const initials = userNames.map(function (word) {
  let convertedArr =
    String(word).slice(0, 1) +
    '.' +
    String(word).slice(7, 8) +
    '.' +
    String(word).slice(13, 14);
  return convertedArr;
  console.log(convertedArr);
});

console.log(initials);

