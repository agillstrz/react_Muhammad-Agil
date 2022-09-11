// Terdapat N tombol yang dinomori dari 1 hingga N dan sebuah lampu dalam keadaan mati. Apabila tombol ke-i ditekan, keadaan lampu akan berubah (dari mati menjadi menyala, atau sebaliknya) jika N habis dibagi oleh i. Apabila masing-masing tombol ditekan tepat sekali,
// bagaimana keadaan lampu pada akhirnya?

const jumlahTombol = (tombol) => {
    let keadaanLampu = "mati";
    for (let i = 1; i <= tombol; i++) {
      if (tombol % i === 0) {
        if (keadaanLampu === "mati") {
          keadaanLampu = "Menyala";
        } else {
          keadaanLampu = "mati";
        }
      }
    }
    console.log("Lampu", keadaanLampu);
  };
  
  jumlahTombol(5); //Lampu Mati = Keadaan Lampu paling akhir ketika semua tombol di klik satu persatu
  jumlahTombol(4); //Lampu Menyala
  
