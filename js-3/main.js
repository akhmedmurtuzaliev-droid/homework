// задание 1
for (let i = 1; i <= 20; i++) {
      if (i % 4 === 0) {
            continue;
      }
      console.log(i);
}
// задание 2
const number = +prompt("введите число", 0);
let factorial = 1;
for (let i = 1; i <= number; i++) {
      factorial = factorial * i;
}
console.log(factorial);