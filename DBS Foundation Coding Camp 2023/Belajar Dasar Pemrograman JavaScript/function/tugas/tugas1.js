/**
 * TODO:
 * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai terkecil antara a atau b.
 *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 *
 *    contoh:
 *    minimal(1, 4) // output: 1
 *    minimal(3, 2) // output: 2
 *    minimal(3, 3) // output: 3
 *
 * 2. Buatlah sebuah function bernama findIndex yang menerima dua parameter, yaitu array dan number.
 *    Fungsi tersebut harus mengembalikan index dari angka yang sesuai pada array tersebut.
 *    Jika angka tidak ditemukan, maka kembalikan nilai -1.
 *
 *    contoh:
 *    findIndex([1, 2, 3, 4, 5], 3) // output: 2
 *    findIndex([1, 2, 3, 4, 5], 6) // output: -1
 *    findIndex([1, 2, 3, 4, 5], 5) // output: 4
 */

// Tulis kode di bawah ini


const minimal = (a,b) => {
    if (a<b) {
        console.log(a);
    } else {
        console.log(b);
    }
}

minimal(1, 4) // output: 1

const findIndex = (arr,find)=>{
    // terdpat dua cara.
    /*
    ini bisa temukan indexnya langsung, hasilnya true /false.
        const result = arr.includes(find);
        return result;
    */
   const jmlArr = arr.length;
   let hasil;
//    console.log(jmlArr);
    for (let index = 0; index <= jmlArr-1; index++) {
        const element = arr[index];
        if (element == find) {
            hasil = index;
            break;
        } else {
            hasil = -1;
        }  
    }
    console.log(hasil);
    
}
findIndex([1, 2, 3, 4, 5], 3) // output: 2
findIndex([1, 2, 3, 4, 5], 6)
findIndex([1, 2, 3, 4, 5], 5)
