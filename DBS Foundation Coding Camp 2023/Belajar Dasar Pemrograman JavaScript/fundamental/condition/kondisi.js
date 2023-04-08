// dalam penggunaan kondisi kita dihadapi dengan situasi true dan false karena dalam pembacaan pada komputer, komputer hanya mampu menerjemahkan benar atau salah ga kayak doi mu yang ditanya jawabnya terserah. Ok lets go..

// contoh 1

let lapar = true;

if(lapar){ 
    // sama saja dengan lapar == true, lalu jika menggunakan lapar != true bisa langsung menggunakan negasi langsung seperti -> (!lapar)
    console.log("Aku mau makan");
}else{
    console.log("Aku mau jalan sama kamu.")
}

// javascript juga mampu menggunakan penulisan condition dalam ternary operator / conditional experssions. yakni menulis kondisi dengan hanya satu baris saja.

// contoh 2
// condition ? true expression : false expression

let suka = false;
let keputusan = suka ? "bilang suka."  : " bilang cuman teman.";

console.log("Ketika sukaku kekamu "+ suka +" ,aku akan "+ keputusan);


// dalam penggunaan kondisi tidak selalu menggunakan if statement namun kita dapat menggunakan switch case statement.

/* apa perbedaanya.

Kejelasan Kondisi:
Pada if statement, Anda dapat memeriksa beberapa kondisi menggunakan operator logika (AND, OR) dalam satu statement. Sedangkan pada switch case hanya dapat memeriksa satu kondisi.

Tipe data:
Pada switch case, kondisi hanya dapat memeriksa tipe data primitif seperti angka atau karakter, sedangkan pada if statement dapat memeriksa tipe data apapun.

Kecepatan:
Switch case biasanya lebih cepat daripada if statement ketika terdapat banyak pilihan kondisi. Hal ini karena switch case menggunakan mekanisme indexing untuk memilih alur program yang tepat. Sementara, pada if statement setiap kondisi akan dicek secara berurutan dan memakan waktu lebih lama.

Kesesuaian:
Jika kondisi yang diperiksa adalah variabel yang sama dalam beberapa kondisi, maka switch case lebih sesuai karena lebih efisien dan mudah dibaca. Sementara, jika kondisi yang diperiksa adalah kondisi yang kompleks dan bergantung pada banyak variabel atau mengandung operator logika, maka if statement lebih sesuai. 

Penggunaan break:
Pada switch case, Anda perlu menambahkan perintah "break" setelah setiap blok kode yang terpilih. Hal ini agar program tidak mengeksekusi blok kode berikutnya secara berurutan. Sedangkan pada if statement, jika kondisi terpenuhi, maka program akan langsung melanjutkan ke blok kode berikutnya tanpa memerlukan perintah break.
*/

// umumnya dalam memmbuat sebuah menu maka switch case lebih baik karena menu tidak sekompleks memiliki banyak data;

// contoh 3

let language = "French";
let greeting = null;

switch (language) {
  case "English":
    greeting = "Good Morning!";
    break;
  case "French":
    greeting = "Bonjour!";
    break;
  case "Japanese":
    greeting = "Ohayou Gozaimasu!";
    break;
  default:
    greeting = "Selamat Pagi!";
}

console.log(greeting);

/* output
Bonjour!
*/
