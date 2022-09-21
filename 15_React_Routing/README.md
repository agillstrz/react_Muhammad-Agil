## Summary React Routing

### 1. Parameter URL

**Parameter URL** adalah suatu parameter yang nilainya ditetapkan secara dinamnis di URL halaman
Perbedaan Link dan Redirect
| Link | Redirect |
| ----------- | ----------- |
| Dapat digunakan pada kondisi apapun| Lebih sering digunakan pada halaman 404 |
| Memberikan History baru pada browser | Menimpa history pada browser |
|Bereaksi dengan click seperti a href | Bereaksi dengan suatu kondisi |

### 2. UseHistory

**UseHistory** Memberi kita akses ke instance riwayat yang dapat anda gunakan untuk bernavigasi :  
Contoh :

| Property  | Kegunaan                                                           |
| --------- | ------------------------------------------------------------------ |
| length    | (angka) jumlah entri dalam tumpukan riwayat                        |
| go        | (fungsi) Memindahkan penunjuk di tumpukan riwayat sebanyak n entri |
| goBack    | (fungsi) Setara dengan go(-1)                                      |
| goForward | (fungsi) Setara dengan go(1)                                       |
| Push      | (fungsi) mendorong entri baru ketumpukan riwayat                   |
| Replace   | (fungsi) Mengganti entri saat ini di tumpukan riwayat history      |

### 3. useRouteMatch

**useRouteMatch** mencoba mencocokkan URL saat ini dengan cara yang sama seperti <Route>.Ini sebagian besar berguna untuk mendapatkan akses ke data kecocokan tanpa benar-benar merender <Route>.
