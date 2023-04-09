/*
    Map adalah tipe data yang menyimpan koleksi data dengan format key-value layaknya Object. Yang membedakan adalah Map memperbolehkan key dengan tipe data apa pun, dibandingkan Object yang hanya mengizinkan key bertipe String atau Symbol.
*/

// ini obj
var person = {
    name: "John",
    age: 30,
    city: "Jakarta"
  };
  
  // menambahkan property baru
  person.email = "john@example.com";
  
  // mengakses nilai property
  console.log(person.name); // output: John
  
  // iterasi melalui property
  for(var key in person) {
    console.log(key + ": " + person[key]);
  }
  
  console.log("---------");
  var myMap = new Map();

  // menambahkan key-value pairs
  myMap.set("name", "Jhone");
  myMap.set("age", 30);
  myMap.set("merried", true);
  
  // mengakses nilai dengan key tertentu
  console.log(myMap.get("name")); // output: John
  
  // iterasi melalui key-value pairs
  myMap.forEach(function(value, key) {
    console.log(key + ": " + value);
  });
  
  console.log("---------");

const cth = new Map([
    ['1', 'a String key'],
    [1, 'a number key'],
    [true, true]
  ]);
  
  console.log(cth);

  
  /* output
  Map(3) { '1' => 'a String key', 1 => 'a number key', true => true }
  */