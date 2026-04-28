let son = 8; // Masalan
if (son % 2 === 0) {
  console.log("Juft son");
} else {
  console.log("Toq son");
}
let a = 15,
  b = 25;
if (a > b) {
  console.log(a);
} else {
  console.log(b);
}
let ball = 85;
if (ball > 90) {
  console.log("A'lo");
} else if (ball > 70) {
  console.log("Yaxshi");
} else if (ball > 50) {
  console.log("Qoniqarli");
} else {
  console.log("Yiqildi");
}
for (let i = 1; i <= 15; i++) {
  console.log(i * i);
}
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}
let n = 20;
for (let i = 1; i <= n; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
let oy = 4;
switch (oy) {
  case 1:
    console.log("Yanvar");
    break;
  case 2:
    console.log("Fevral");
    break;
  case 3:
    console.log("Mart");
    break;
  case 4:
    console.log("Aprel");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("Iyun");
    break;
  case 7:
    console.log("Iyul");
    break;
  case 8:
    console.log("Avgust");
    break;
  case 9:
    console.log("Sentabr");
    break;
  case 10:
    console.log("Oktabr");
    break;
  case 11:
    console.log("Noyabr");
    break;
  case 12:
    console.log("Dekabr");
    break;
  default:
    console.log("Bunday oy yo'q");
}
