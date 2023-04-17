
function perkalian(a,b) {
    return a*b;
}

console.log("Hasil perkalian : "+perkalian(3,2));

function greeting(name, language) {
    if(language === "English") {
      console.log(`Good Morning ${name}!`);
    } else if (language === "French") {
      console.log(`Bonjour ${name}!`);
    } else {
      console.log(`Selamat Pagi ${name}!`);
    }
  }

greeting("Alif","English");

