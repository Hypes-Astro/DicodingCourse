/*
ES6 memperkenalkan fungsi baru yang dinamakan arrow function expression atau lebih dikenal sebagai arrow function. Arrow function mirip seperti regular function secara perilaku, tetapi berbeda dalam penulisannya. Sesuai namanya, fungsi didefinisikan menggunakan tanda panah atau fat arrow ( => ). Tentunya penulisan arrow function ini akan lebih singkat.

Selain perbedaan sintaksis, terdapat perbedaan perilaku antara arrow function dan regular function. Regular function dapat berupa function declaration dan function expression. Namun, arrow function hanya berupa expression function saja. Itu sebabnya arrow function memiliki nama lengkap “arrow function expression”.
*/

/*
    Sebelum
    // function declaration
        function sayHello(greet) {
        console.log(`${greet}!`);
        }
    
    // function expression
        const sayName = function (name) {
        console.log(`Nama saya ${name}`)
        }

*/

// setelah

const sayHello = (greet) => {
    console.log(`${greet}!`)
  }
   
  const sayName = (name) => {
    console.log(`Nama saya ${name}`)
  }

  sayHello("Selamat datang");
  sayName("Alif")


//   Namun, jika kita sama sekali tidak membutuhkan parameter, maka kita tetap menuliskan tanda kurung namun kosong seperti ini:
const salam = () => {
    console.log("Selamat pagi semuanya!")
  };
  
  sayHello();

//   FUN FACT
/* Satu hal yang menarik, ketika body dari function hanya terdiri dari satu baris, kita bisa menghapus tanda kurung kurawal. Tentunya ini akan menghemat baris kode yang kita tulis. */