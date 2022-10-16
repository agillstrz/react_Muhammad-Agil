## Summary Testing

### 1. Testing

Testing adalah proses memverifikasi bahwa test assertions kita
benar dan bahwa code kita tetap benar sepanjang masa aplikasi.
Test assertion ini adalah ekspresi boolean yang mengembalikan
nilai true kecuali ada bug di kode kita.

### 2. Manfaat Testing

Walaupun menambahkan waktu dan code dalam membuat testing, testing memiliki manfaat sebagai berikut:

- Ketika aplikasi kita mempunyai coverage yang baik (mayoritas
  codebase tercover oleh test), Kita akan merasa percaya diri jika
  harus mengubah suatu bagian pada aplikasi kita. Saat kita
  mengubah bagian tersebut, dan ada bagian yang lain menjadi
  broken kita akan segera mengetahuinya.

- Mengurangi bug pada aplikasi. Walaupun testing tidak
  menjamin aplikasi kita bebas bug, tetapi kita bisa mencegah
  beberapa hal yang berpotensi menjadi bug.

**Kategori Testing**  
secara umum, cara mengetes di React terbagi menjadi dua kategori:

1. **Rendering Component trees** didalamnya enviroment tes yang sudah disederhakan dan ditegaskan pada keluarannya.
2. **Menjalankan aplikasi lengkap** didalam enviroment peramban(browser) asli. ini dikenal sebagai "end-to-end"

### 3. Testing Custom Hook

Liblary yang digunakan:

```js
npm install -D @testing-library/react-hooks
```

Implementasi:

```js
import { useState, useEffect } from "react";

export function useUppercase(initialvalue) {
const transformed = initialValue.toUpperCase()
const [value, setValue] =  useState(transformed);

const update = (newValue)=> {
setValue( newValue.toUpperCase());
};

useEffect(() => {
    setValue(initialValue.toUpperCase());
}, [initialValue]);
return {value, update}

```
