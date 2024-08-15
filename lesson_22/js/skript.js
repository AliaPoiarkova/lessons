"use strict"
// Задача №1
let someVar = 0;
++someVar;
if (someVar) {
console.log(someVar);
}

// Задача №2
for(let i=1; i<=10; i++){
console.log(`Пункт ${i}`)
}

// Задача №3
if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
console.log('000');
}

// Задача №4
function calcNum(a, b){
const result =  a / b
if(Number.isNaN(result)){
    return `Дані помилкові`
}
else if(b === 0){
    console.log(`На нуль ділити не можна`)
}
else {
    return `Результат ділення: ${result}`
}
}

// Задача №5

let monthNum = [2, 4, 7, 10, 12];
monthNum.forEach(monthNum => {
    if(monthNum === 10){
        console.log(monthNum);
    }
    }
    )

    
