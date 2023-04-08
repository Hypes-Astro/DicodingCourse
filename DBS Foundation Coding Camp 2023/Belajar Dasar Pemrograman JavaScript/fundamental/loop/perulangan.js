// ada beberapa cara penulisan perulangan, bisa cari ae sih tapi
// rata rata penggunaan loop, menggunakan for..lop tergantung kebutuhan.

// cari ae lah, ada tu while, do while, for, for of.. dll
// tapi disini aku pengen ngasih tau yang bagian for dan for of aja.


let bykData = 10;
let awal = 1;
let data;
//   inisialisasi ; kondisi ; increment;
for (awal; awal <= bykData; awal++) {
    data = awal;
    console.log(data);
}


// for of
let myArray = ["Luke", "Han", "Chewbacca", "Leia"];
console.log("------------------");

for(const arrayItem of myArray) {
  console.log(arrayItem);
}console.log("untuk akses huruf depan aja bisa menggunakan arrayItem[0], untuk mendapatkan index ke[0] tiap arrrayItem");


console.log("------------------");

myArray.forEach(element => {
    console.log(element);
});