class Kendaraan {
    constructor(totalRoda,kecepatanPerJam){
      this.totalRoda = totalRoda;
      this.kecepatanPerJam = kecepatanPerJam;
    }
  }
  
  class Mobil extends Kendaraan {
    constructor(totalRoda,kecepatanPerJam){
      super(totalRoda,kecepatanPerJam)
    }
  
    tambahKecepatan(kecepatanBaru) {
     this.kecepatanPerJam+=kecepatanBaru;
    }
    berjalan(){
        return console.log(`mobil berjalan dengan kecepatan : ${this.kecepatanPerJam}`);
    }
  }
  
  let mobilCepat = new Mobil(3,10);
  mobilCepat.tambahKecepatan(10);
  mobilCepat.tambahKecepatan(10);
  mobilCepat.berjalan(); //output mobil berjalan dengan kecepatan : 30
  
  let mobilLamban = new Mobil(3,10);
  mobilLamban.berjalan(); //output: mobil berjalan dengan kecepatan : 10
  
  
  