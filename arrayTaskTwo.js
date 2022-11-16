`use strict`;
/* 

2. **Задача на розворот числа:**

const currentMaxValue = 4589;
let reverseMaxValue;

// тут ваш код...*

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'

*/

const currentMaxValue = 4589;
let reverseMaxValue = currentMaxValue.toString().split('').reverse().join('');
let toNumber = Number(reverseMaxValue);
reverseMaxValue = toNumber;



// = currentMaxValue.toString().split('').reverse().join('') * Math.sign(currentMaxValue);

console.log(reverseMaxValue); //9854
console.log(typeof reverseMaxValue); //'number'

