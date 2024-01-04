//*1. Bir nömrəni geri çevirən JavaScript funksiyası yazın.  Misal x = 32243;  Gözlənilən nəticə : 34223

// function tersiniTap(reqemler) {
//   var tersi = "";
//   for (var i = reqemler.length - 1; i >= 0; i--) {
//     tersi += reqemler[i];
//   }
//   return tersi;
// }
// console.log(tersiniTap("32243"));

//*5. Bir strinq parametr olaraq qəbul edən və hər sözün ilk hərfini yuxarı hərflərə çevirən
//*JavaScript funksiyasını yazın. Misal strinq : 'tez qəhvəyi tülkü' Gözlənilən nəticə:'Tez Qəhvəyi Tülkü'

// function ilkHerfiBoyelt(dəyişdirilməliOlan) {
// \b\w ifadesiyle kelimelerin başındaki her herfi seçiriy
// herf => herf.toUpperCase() ile her harfi büyük harfe çeviririy
//   return dəyişdirilməliOlan.replace(/\b\w/g, (herf) => herf.toUpperCase());
// \b: Bu ifadə, bir kəlmənin başlama yerini təyin edir.
// \w: Bu ifadə, hər hansı bir alfanümerik (harf və ya rəqəm) simvolu təmsil edir.
// g: Bu ifadə, təkrarlanan bütün alınanları tapmaq üçün global axtarışı göstərir.
// }

// let strinq = "tez qəhvəyi tülkü";
// let netice = ilkHerfiBoyelt(strinq);

// console.log("Gözlənilən nəticə:", netice);

//* 14. Bir məbləği qepiklərə çevirmək üçün JavaScript funksiyası yazın.
//* Nümunə funksiyası : amountTocoins ( 46, [ 25, 10, 5, 2, 1 ] )
//* Burada 46 məbləğdir. və 25, 10, 5, 2, 1 sikkələrdir.
//* Çıxış : 25, 10, 10, 1

// function amountToCoins(mebleg, sikkelar) {
//   let netice = [];

//   for (let i = 0; i < sikkelar.length; i++) {
//     const sikke = sikkelar[i];
//     while (mebleg >= sikke) {
//       netice.push(sikke);
//       mebleg -= sikke;
//     }
//   }

//   return netice;
// }

// const mebleg = 46;
// const sikkelerArr = [25, 10, 5, 2, 1];
// const sikkelar = amountToCoins(mebleg, sikkelerArr);

// console.log(sikkelar); // [25, 10, 10, 1]
