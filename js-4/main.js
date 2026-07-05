// дз
// задание 1
console.log(calculateFinalPrice(100, 10, 0.2));
function calculateFinalPrice(basePrice, discountPercent, taxRate) {
      const discountAmount = basePrice * (discountPercent / 100);
      const priceAfterDiscount = basePrice - discountAmount;
      const taxAmount = priceAfterDiscount * taxRate;
      const finalPrice = priceAfterDiscount + taxAmount;
      return finalPrice;
}
// задание 2
console.log(checkAccess("admin", "12345"));

function checkAccess(username, password) {
      if (username === "admin" && password ==="123456") {
            return "доступ разрешен";
      } else {
            return "доступ запрещен";
      }
}
// тернарный оператор
// (username === "admin" && password === "123456") ? "доступ разрешен" : "доступ запрещен";
// задание 3
const getTimeOfDay = function (time) {
      if (time <= 5) {
            return "ночь";
      } else if (time >= 6 && time <= 11) {
            return "утро";
      } else if (time >= 12 && time <= 17) {
            return "день";
      } else if (time >= 18 && time <= 23) {
            return "вечер";
      } else {
            return "некорректное время";
      }
}
console.log(getTimeOfDay(26));
// задание 4
function findFirstEven(start, end) {
      for (let i = start; i <= end; i++) {
            if (i % 2 === 0) {
                  return i;
            }
      }
      return "четных чисел нет";
}
console.log(findFirstEven(1, 10));