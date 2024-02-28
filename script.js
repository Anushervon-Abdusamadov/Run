// все целые числа от 1 до 100.
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// все целые числа от -100 до 0
for (let a = -100; a <= 0; a++) {
  console.log(a);
}

// все целые числа от 100 до 1
let num = 100;
while (num >= 1) {
  console.log(num);
  num--;
}

// все четные числа из промежутка от 1 до 100
for (let b = 1; b <= 100; b++) {
  if (b % 2 === 0) {
    console.log(b);
  }
}

// все числа кратные трем в промежутке от 1 до 100.
for (let c = 1; c < 100; c++) {
  if (c % 3 === 0) {
    console.log(c);
  }
}

// Заполните массив целыми числами от 1 до 10.
let massive = [];

for (let i = 1; i <= 10; i++) {
  massive.push(i);
}
console.log(massive);

// Заполните массив четными числами из промежутка от 1 до 100.
let arr = [];
for (let d = 1; d <= 100; d++) {
  if (d % 2 === 0) {
    arr.push(d);
  }
  console.log(arr);
}

// Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.
let otrisat = [-1, 2, -2, 1, -3, 3];
let negativenumbers = 0;
for (let neega = 0; neega < otrisat.length; neega++) {
  if (otrisat[neega] < 0) {
    negativenumbers++;
  }
}
console.log("Количество отрицательных чисел: " + negativenumbers);

// Дан массив с числами. Оставьте в нем только положительные числа.
let nice = [-1, 2, -2, 1, -3, 3];
let nmass = [];
for (let n = 0; n <= nice.length; n++) {
  if (nice[n] > 0) {
    nmass.push(nice[n]);
  }
}
console.log(nmass);

// Дана строка. Удалите предпоследний символ из этой строки
let st = "stringG";
console.log(st.slice(0, -1));
