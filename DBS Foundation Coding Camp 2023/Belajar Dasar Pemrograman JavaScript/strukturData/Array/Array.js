/*
Array merupakan tipe data yang dapat mengelompokkan lebih dari satu nilai dan menempatkannya dalam satu variabel. Contoh:
*/

let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray);

// untuk akses index menggunakan bracket [..] semua dimulai dari 0, jadi jika myArray[0] maka hasilnya adalah "Cokelat"

// Spread array digunakan untuk menggabungkan nilai dari lebih dari satu array menjadi satu.


const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [...favorites, ...others];

console.log(allFavorites);

let jmlArray = allFavorites.length;
console.log("Jumlah index array : "+jmlArray);
// akses terakhir
console.log(allFavorites[jmlArray-1]);//donat karena array mulai dari 0

// Selain array, spread operator juga bisa digunakan untuk object literals. Hal ini memungkinkan kita dapat menggabungkan beberapa object dengan kode yang lebih ringkas.

const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'Laki' };

const newObj = { ...obj1, ...obj2 };

console.log(newObj);
console.log(newObj.gender);