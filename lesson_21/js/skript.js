"use strict"
// Задача №1
// Вірна 3) let userName, тому що використовується стиль lowerCamelCase


// Задача №2
// Чи буде помилка прі віконанні наступної програми 
// const userName = 20
// userName = "Іштван"

//  Буде помилка, тому що значення константи не можна змінювати Буде вірно, якщо const змінити на let і вивести в консоль

let userName = 20
userName = "Іштван"
console.log(userName)

// Задача №3
//  Що потрапить в консоль?
let numOne = 20
let numTwo = "20"
let numSumm = numOne + numTwo
console.log(numSumm)

// В консоль потрапить 2020, тому що 20-це число (number), а "20" - це текст(string)