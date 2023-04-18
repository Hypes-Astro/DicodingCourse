/*
    Paradigma Functional Programming adalah paradigma pemrograman di mana proses komputasi didasarkan pada fungsi matematika murni. Functional Programming (selanjutnya akan kita singkat menjadi FP) ditulis dengan gaya deklaratif yang berfokus pada “what to solve” dibanding “how to solve” yang dianut oleh gaya imperatif.
*/

const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];// diberikan array dengan nilai value per index nama nama orang.

// lalu kita akan memasukan nilai dari array names, kedalam newNameSwitch. dengan cara meng push per index.

const newNamesWithExcMark = [];

for(let i = 0; i < names.length; i++) {
  newNamesWithExcMark.push(`${names[i]}!`); //  <- ini merupakan sifat dari imperatif dengan mengecek satu persatu.
}

console.log(newNamesWithExcMark);