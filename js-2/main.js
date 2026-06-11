// // Задание 1
const number = prompt("введите число", 0);
if (number % 2 === 0) {
      alert("число четное")
} else {
      alert("число не четное")
}
alert;

// Задание 2
const age = prompt("Введите ваш возраст", 0);
const discount = age <= 18 ? 10 : age <= 65 ? 20 : 30;
console.log(`Ваша скидка ${discount}%`);

// switch case
// const age = prompt("Введите ваш возраст", 0);
// switch (age) {
//       case "age <= 18":
//             console.log(`Ваша скидка ${10}%`);
//       break;
//       case "age <= 65":
//             console.log(`Ваша скидка ${20}%`);
//       break;
//       default:
//             console.log(`Ваша скидка ${30}%`);
// }


// Задание 3
const ADMIN = "admin";
const USER = "user";

const login = prompt("введите логин", 0);

switch (login) {
      case ADMIN:
            case USER:
            console.log("Доступ разрешен");
            break;
            default:
                  console.log("Доступ запрещен")
}
                  
const PASSWORD = "123456";
const password = +prompt("введите пароль", 0);

switch (password){
      case PASSWORD:
            console.log("Доступ разрешен");
            break;
            default:
                  console.log("Доступ запрещен")
}


