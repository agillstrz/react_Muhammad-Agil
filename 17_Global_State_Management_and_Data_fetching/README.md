## Summary Global State Management and Data fetching

### 1. Redux

Redux adalah library yang membantu kita dalam menangani state global (State yang sama yang dipakai di beberapa halaman / komponen).
Kapan saat yang tepat untuk menggunakan Redux.  
 a. Banyak state yang perlu ditaruh dibanyak tempat.  
 b. State pada app sering berubah
c. Ukuran codebase yang sedang-besar, dan dikerjakan oleh banyak orang.  
 d. perlu untuk mengetahui bagaimana state diupdate seiring dengan waktu  
 e. logic untuk mengubah state kompleks

**Redux Libraries dan Tools:**  
a. React-Redux  
b. Redux Toolkit  
c. Redux DevTools Extension

### 2. Komponen penting di Redux

a. **Action** : digunakan untuk memberikan informasi dari aplikasi ke store.  
 b. **Reducer** : pure Javascript function yang mengambil state aplikasi saat ini dan object action lalu mengembalikan state aplikasi terbaru.  
 c. **Store** : objek sentral yang menyimpan state pada aplikasi.

### 3. Redux Thunk

Thunk Middleware untuk redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action.  
Redux Thunk dapat menghandle side effect logic seperti logic synchronus kompleks yang perlu mengakses store dan juga logic async seperti request data.
