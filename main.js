/*
1 misol
let son = prompt ("son kiriting:");
if (son % 2 === 0){
 console.log("Juft son");
}else{
    console.log("Toq son");
    
}
2misol
 let a = +prompt("Birinchi sonni kiriting:");
let b = +prompt("Ikkinchi sonni kiriting:");

if (a > b) {
    console.log("Kattasi: " + a);
} else if (b > a) {
    console.log("Kattasi: " + b);
} else {
    console.log("Ular teng");
} 
    3misol
    let tugilganYil = prompt("Tug'ilgan yilingizni kiriting:");
let joriyYil = new Date().getFullYear();
let yosh = joriyYil - tugilganYil;
console.log("Sizning yoshingiz: " + yosh);
4 misol
let x = 10, y = 25, z = 15;
let max = Math.max(x, y, z);
console.log("Eng kattasi: " + max);
5 misol
let n1 = +prompt("1-son:");
let n2 = +prompt("2-son:"); 
let amal = prompt("Amalni kiriting (+, -, *, /):");

switch(amal) {
    case '+': console.log(n1 + n2); break;
    case '-': console.log(n1 - n2); break;
    case '*': console.log(n1 * n2); break;
    case '/': console.log(n1 / n2); break;
    default: console.log("Noma'lum amal");
}
    6misol
    let n = +prompt("n ni kiriting:");
let yigindi = 0;
for (let i = 1; i <= n; i++) {
    yigindi += i;
}
console.log("Yig'indi: " + yigindi);
7 misol
let son = +prompt("Qaysi sonning ko'paytirish jadvali kerak?");
for (let i = 1; i <= 10; i++) {
    console.log(`${son} x ${i} = ${son * i}`);
}*/