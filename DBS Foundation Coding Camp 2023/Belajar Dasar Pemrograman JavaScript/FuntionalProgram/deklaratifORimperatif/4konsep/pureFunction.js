// inti dari pure function adalah menerapkan nilai kosntan unruk variable pada fungsi tidk mempengaruhi return dari fungsi sebelumnya.

// jika nilai variabel mampu merubah nilai dari suatu fungsi maka bukan pure function, melainkan impure function lawan dari pure


const hitungLuasLingkaran = (jariJari) => {
    return 3.14 * (jariJari * jariJari); 
  }
  
  console.log(hitungLuasLingkaran(4)); // 50.24
  console.log(hitungLuasLingkaran(4)); // 50.24
  console.log(hitungLuasLingkaran(8)); // 200.96
  console.log(hitungLuasLingkaran(8)); // 200.96


//   dengan membuat nilai pi menjadi langsung pada function dapat meminimalisir terjadinya impure function