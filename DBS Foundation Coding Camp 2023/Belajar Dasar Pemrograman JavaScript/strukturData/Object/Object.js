// mengapa perlu menggunakan object ?.

/*
    Object mampu menyimpan nilai dari beragam tipe data dan membentuk data yang lebih kompleks.

    Object berisi pasangan key dan value yang juga dikenal dengan property. Key berperan mirip seperti nama variabel yang menyimpan sebuah nilai. Sementara, value berisi nilai dengan tipe data apa pun termasuk objek lain. Key dan value di dalam object dituliskan seperti berikut:

    let object = {key1: "value1", key2: "value2", key3: "value3"}   


*/

const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
  };

// Kemudian untuk mengakses nilai dari properti object, kita dapat memanggil nama object lalu tanda titik dan diikuti nama propertinya. Contoh:

console.log("Hallo saya "+user.firstName+" "+user.lastName+" umur "+ user.age+" tahun");

// kita juga dpat meng assignment nilai ke variabel dalam object.
// contoh ubah nama depan menjadi Alif dan umur 20.
console.log("Sebelum : ");
console.log(user);

user.firstName = "Alif";
user.age = 20;

console.log("Setelah : ");
console.log(user);
