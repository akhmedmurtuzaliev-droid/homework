// // Задание 1
const number = prompt("введите число", 0);
if (number % 2 === 0) {
      alert("число четное")
} else {
      alert("число не четное")
}

// Задание 2
const age = prompt("Введите ваш возраст", 0);
const discount = age < 18 ? 10 : age <= 65 ? 20 : 30;
console.log(`Ваша скидка ${discount}%`);

// switch case
// const age = +prompt("Введите ваш возраст", 0);
// let discount = 0;
// switch (true) {
//       case age < 18:
//             discount = 10;
//       break;
//       case age <= 65:
//             discount = 20;
//       break;
//       case age > 65:
//            discount = 30;
//       break; 
//       default:
//            discount = 0;
// }
// console.log(`Ваша скидка ${discount}%`);


// Задание 3
const username = prompt("введите логин");
const password = prompt("введите пароль");

if ((username === "admin" || username === "user") && password === "123456") {
      alert("доступ разрешен");
} else {
      alert("доступ запрещен");
}

// Задание 4
const weight = +promt("Введите вес посылки (в кг):");

if (weight <= 0 || isNaN(weight)) {
      alert("некорректный вес посылки");
} else {
      const deliveryType = promt("Введите тип доставки (Стандарт, Экспресс, Премиум):");

      const baseCost = weight < 1 ? 5 : weight <= 5 ? 10 : 15;
      let coefficient = 0;

      switch (deliveryType){
            case "Стандарт":
                  coefficient = 1;
                  break;
            case "Экспресс":
                  coefficient = 1.5;
                  break;
            case "Премиум":
                  coefficient = 2;
                  break;
                  default:
                        alert("Неверный тип доставки");
                        coefficient = 0;
      }
      if (coefficient !== 0) {
            const finalCost = baseCost * coefficient;
            alert(`Итоговая стоимость доставки: ${finalCost}`);
      }
}
