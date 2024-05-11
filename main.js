// IF-1
// let a = +prompt("");
// if (a > 0) {
//   console.log(a + 1);
// } else {
//   console.log("manfiy son kiritdingiz");
// }

// IF-2
// let a = +prompt("");
// if (a < 0) {
//   console.log(a - 2);
// } else if (a == 0) {
//   console.log(10);
// } else {
//   console.log(a + 1);
// }

// let a = +prompt("a sonini kiriting");
// let b = +prompt("b sonini kiriting");
// let c = +prompt("c sonini kiriting");
// if (Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)) {
//   console.log(a b c sonlari butun);
// } else if (
//   (Number.isInteger(a) && Number.isInteger(b))
//   (Number.isInteger(a) && Number.isInteger(c))
//   (Number.isInteger(b) && Number.isInteger(c))
// ) {
//   console.log("2 son butun");
// } else {
//   console.log("1 butn son ");
// }

// 3-iffff
// function countPositiveIntegers(array) {
//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (Number.isInteger(array[i]) && array[i] > 0) {
//       count++;
//     }
//   }
//   return count;
// }

// let numbers = [3, -5, 7, -2, 4, 0, 9];
// console.log("berilgan sonlar: ", numbers);
// console.log("musbat butun sonlar soni: ", countPositiveIntegers(numbers));

// 4-iff
// let passingScore = 15;
// let score = 10;
// if (score >= passingScore) {
//   console.log(`${passingScore} dan siz keritgan son katta ${score} `);
// } else {
//   if (score <= passingScore)
//     console.log(`${passingScore} dan siz keritgan son kichgina ${score} `);

// }

// 5-ifiii
// let a = 10;
// let b = 5;
// if (a - b > 0) {
//   console.log("ikkinchisi kichik");
// } else if (b - a > 0) {
//   console.log("birinchisi kichik");
// } else {
//   console.log("bular teng");
// }
// 6-ifff

// let a = 10;
// let b = 5;
// if (a - b > 0) {
//   console.log(a);
//   console.log(b);
// } else if (b - a > 0) {
//   console.log(b);
//   console.log(a);
// } else {
//   console.log(a + " = " + b);
// }

// 7-ifff
// var A = 5;
// var B = 10;

// if (A >= B) {
//   B = A + 1;
// }

// console.log("A nig qiymati: " + A);
// console.log("B nig qiymati: " + B);

// 10-ifff
//
// let passingScore = 70;
// let lasingScore = 50;
// let score = 40;
// if (score >= passingScore) {
//   console.log("siz keritgan son");
// } else {
//   if (passingScore <= lasingScore) console.log("siz-otaolmadingiz");
// }
// console.log();

// case-15
// function tartibRaqaminiAniqlash(a, b, c) {
//   if (a === b && b === c) {
//     return "Uchta son ham bir-biriga teng";
//   } else if (a === b) {
//     return "Uchta sonning birinchi va ikkinchi sonlari bir biriga teng";
//   } else if (a === c) {
//     return "Uchta sonning birinchi va uchinchi sonlari bir biriga teng";
//   } else if (b === c) {
//     return "Uchta sonning ikkinchi va uchinchi sonlari bir biriga teng";
//   } else {
//     return "Uchta son bir-biriga teng emas";
//   }
// }

// var a = 5;
// var b = 5;
// var c = 7;
// var tartibRaqami = tartibRaqaminiAniqlash(a, b, c);
// console.log(tartibRaqami);

//  case-2
// function fasilniTop(oy) {
//   let fasillar = ["Qish", "Bahor", "Yoz", "Kuz"];

//   let fasil = Math.ceil(oy / 3) % 4;

//   console.log(oy + "-oy " + fasillar[fasil] + " fasliga tegishli.");
// }
// fasilniTop(5);
// case-3
// function kunlarniTop(oy, yil) {
//   var kunlar;

//   if (oy === 1) {
//     if ((yil % 4 == 0 && yil % 100 != 0) || yil % 400 == 0) {
//       kunlar = 29;
//     } else {
//       kunlar = 28;
//     }
//   } else if ([1, 3, 5, 7, 8, 10, 12].includes(oy)) {
//     kunlar = 31;
//   } else {
//     kunlar = 30;
//   }

//   return kunlar;
// }

// var oy = 1;
// var yil = 2024;
// var kunlar = kunlarniTop(oy, yil);
// console.log(oy + "-oyda " + kunlar + " kun bor.");
// 7-caseee
// function keyingiSananiTop(d, m) {
//   var kunlar;

//   if (m === 2) {
//     kunlar = d === 28 ? 1 : d === 29 ? 2 : 3;
//   } else if ([1, 3, 5, 7, 8, 10, 12].includes(m)) {
//     kunlar = d === 31 ? 1 : d + 1;
//   } else {
//     kunlar = d === 30 ? 1 : d + 1;
//   }

//   return kunlar;
// }

// var d = 15;
// var m = 2;
// var keyingiKun = keyingiSananiTop(d, m);
// console.log("Keyingi kun " + keyingiKun);
//  QUSHIMCHA
// Switch casee hafta kunlari
// let day = +prompt("");
// switch (day) {
//   case 1:
//     console.log("Dushanba");
//     break;

//   case 2:
//     console.log("Seshanba");
//     break;

//   case 3:
//     console.log("Chorshanba");
//     break;

//   case 4:
//     console.log("Payshanba");
//     break;

//   case 5:
//     console.log("Juma");
//     break;

//   case 6:
//     console.log("Shanba");
//     break;

//   case 7:
//     console.log("yakshanba");
//     break;
// }
