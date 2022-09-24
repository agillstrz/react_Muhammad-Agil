# Summary React Form

### 1. Form

Form merupakan salah satu hal krusial dalam pengembangan
aplikasi website.Form dapat digunakan untuk menghandle inputan
dari user.
Form banyak kita jumpai saat login,mendaftarkan sesuatu,
memberikan feedback , mengisi data dan masih banyak lainnya.
Dalam react akan ada banyak hal kita pelajari dari Form. Seperti
bagaimana menghandle inputan ? Bagaimana memvalidasi inputan
dsb.
**Macam - Macam Form :**  
 | Elemen | Fungsi |
| ----------- | ----------- |
| input | biasanya digunakan inputan yang tidak terlalu panjang.|
| textarea | biasanya digunakan inputan yang cukup panjang. Semisal deskripsi. |
| select | biasanya digunakan untuk inputan yang pilihannya sudah ditentukan. |
| Radio button | Radiobutton merupakan salah satu type di elemen input. Kita hanya bisa memilih 1 pilihan menggunakan radiobutton.|
| checkbox| Checkbox merupakan salah satu type di elemen input Kita bisa memilih lebih dari 1 pilihan menggunakan checkbox. |

### 2. Controlled Component

Kita dapat menggabungkan cara menyimpan dan memperbarui state di HTML dan React dengan menggunakan state pada React. Kemudian komponen React yang me-render sebuah form juga mengontrol apa yang terjadi dalam form tersebut pada masukan pengguna selanjutnya.
Sebuah elemen masukan form yang nilainya dikontrol oleh React melalui cara seperti ini disebut sebagai "controlled component".

### 3. Uncontrolled Component

Uncontrolled component adalah alternatif lain dari controlled
component, dimana data form akan ditangani oleh DOM-nya
sendiri. Untuk menulis uncontrolled component, alih-alih menulis
event handler untuk setiap pembaruan state, kita bisa
menggunakan ref untuk mendapatkan nilai form dari DOM.

Karena hal ini, terkadang lebih mudah untuk mengintegrasikan
kode React dan non-React jika menggunakan uncontrolled
component. Ini berarti lebih sedikit kode jika kita menginginkan
solusi cepat walau tak rapi. Selain itu pada umumnya kita harus
menggunakan controlled component.

#### Nilai Default

**Atribut defaultValue**  
Pada lifecycle rendering React, atribut value pada elemen form
akan menimpa nilai pada DOM. Dengan uncontrolled component,
sering kali kita ingin React dapat menentukan nilai awal tetapi
pembaruan berikutnya dilakukan secara uncontrolled. Untuk
menangani kasus ini, kita bisa menggunakan atribut defaultValue
alih-alih menggunakan value.

**Tag File Input**  
Pada HTML, sebuah input dengan type file memungkinkan pengguna
untuk memilih satu atau beberapa flle dari media penyimpanan
mereka untuk diunggah ke server atau dimanipulasi dengan
JavaScript lewat File API.
Dalam React, sebuah input dengan type file merupakan
uncontrolled component karena nilainya hanya bisa disetel oleh
pengguna, bukan oleh kode program.
