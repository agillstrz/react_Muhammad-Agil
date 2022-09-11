// Dalam matematika, bilangan prima adalah bilangan asli yang lebih besar dari angka 1, yang faktor pembaginya adalah 1 dan bilangan itu sendiri. 2 dan 3 adalah bilangan prima. 4 bukan bilangan prima karena 4 bisa dibagi 2. Kamu diminta untuk membuat fungsi untuk menentukan bahwa sebuah bilangan termasuk bilangan prima atau tidak.

function cekPrima(bil) {
    let pembagi = 0;
    for (let i = 1; i <= bil; i++) {
        if (bil % i == 0) {
            pembagi++;
        }
    }

    if (pembagi <= 2 && bil > 1) {
        return console.log(`${bil} bilangan prima`);
    } else {
        return console.log(`${bil} bukan bilangan prima`);
    }

    
}

cekPrima(3); // 3 bilangan prima✅
cekPrima(7); // 7 bilangan prima✅
cekPrima(10); // 10 bukan bilangan prima
