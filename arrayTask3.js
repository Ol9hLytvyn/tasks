/* 

1. **Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності:**

const resultsArray = [1, 2, [3, [4]]];
let productOfArray;

// тут ваш код...*

console.log(productOfArray); // 24

*/


const resultsArray = [1, 2, [3, [4]]];
const flatArray = resultsArray.flat(Infinity);
let productOfArray = flatArray.reduce((prev, current) => prev * current);



// let productOfArray = resultsArray.flat(Infinity).map(Number);


// start here

console.log(productOfArray); //24
