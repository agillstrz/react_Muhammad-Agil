## Summary Deployment

### 1. Build

Alasan melakukan build
Secara default, React mengandung banyak pesan peringatan.
Peringatan-peringatan ini sangat berguna dalam pengembangan
aplikasi. Namun, pesan-pesan ini membuat React menjadi lebih
besar dan lambat. Oleh karenanya kita harus menggunakan versi
produksi ketika men-deploy aplikasi.
Tujuan melakukan build agar aplikasi kita menjadi versi production,
sehingga performanya lebih ringan cepat.

### 2. Deployment

Deployment adalah kegiatan yang bertujuan untuk
menyebarkan aplikasi yang sudah kita buat. Harapannya
aplikasi tersebut dapat diakses oleh banyak orang, tidak hanya
oleh kita sendiri.

### 3. Surge dan netlify

**Apa itu Surge?**  
 Deployment adalah kegiatan yang bertujuan untuk
menyebarkan aplikasi yang sudah kita buat. Harapannya
aplikasi tersebut dapat diakses oleh banyak orang, tidak hanya
oleh kita sendiri.
**Install Surge**

```js
npm install --global surge
```

**Apa itu Netlify?**  
 Netlify adalah salah satu platform penyedia layanan build tools
sekaligus Continous Deployment. Netlify memungkinkan kita untuk
mempublish website statis secara gratis. Netlify juga sudah
terintegrasi dengan Git Host popular seperti Github, Gitlab dan
Bitbucket.
