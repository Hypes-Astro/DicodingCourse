/*
    Set
Struktur data yang akan kita bahas berikutnya adalah Set. Set sederhananya merupakan kumpulan nilai (set of values). Hal yang membedakan Set dengan struktur data yang lain adalah data pada Set tidak berurutan dan juga tidak diindeks. Selain itu, data di dalam Set juga bersifat unik dan tidak ada duplikasi.

*/

const numberSet = new Set([1, 4, 6, 4, 1]);

console.log(numberSet);
/*
    Pada kode di atas terdapat beberapa angka yang duplikat, yaitu angka 1 dan 4. Secara otomatis Set akan membuang angka yang sama, sehingga nilai yang tersimpan adalah {1, 4, 6}.

    Untuk menambahkan data ke dalam Set kita bisa memanfaatkan fungsi add().
*/

numberSet.add(10);
numberSet.add(6);
numberSet.add(2);


console.log(numberSet);
