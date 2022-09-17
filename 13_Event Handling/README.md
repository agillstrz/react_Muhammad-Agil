## Summary Section 13 Event Handling

### 1. Apa itu state

**State** adalah data private sebuah component. Data ini hanya tersedia untuk component tersebut dan tidak bisa diakses dari component lain.
**state :**  
 a. Data yang bisa dimodifikasi menggunakan setState  
 b. Setiap terjadi modifikasi akan terjadi render ulang  
 c. bersifat asynchronus  
 d. dipakai dalam class

### 2. Stateful component dan Stateless component

**Stateful component** adalah memiliki state. component ini dibuat dengan class. kelebihan dari class component adalah memiliki lifecycle.  
**Stateless component** adalah tidak memiliki state hanya prop. Umumnya component ini dibuat dengan function karena codenya kebih ringkas  
| Stateless Component | Stateful Component |
| --- | ----------- |
| tidak tahu tentang aplikasi | mengerti aplikasi |
| tidak melakukan data fetching | melakukan data fetching|
| tidak melakukan data fetching | melakukan data fetching|
| tujuan utamanya adalah visualisasi | berinteraksi dengan aplikasi|
| dapat digunakan kembali | tidak dapat digunakan kembali |
| hanya berkomunikasi dengan induk langsungnya | meneruskan status dan data ke anak-anaknya |

### 3. Handling Event

**Handling Event** adalah suatu metode untuk menangani sebuah event / aksi yang diberikan pengguna kepada suatu komponen  
Beberapa contoh List Event :

1. **Clipboard Events**(promise terpenuhi)
2. **Form Events** (onChange, onSubmit)
3. **Mouse Events** (onClick,onDoubleClick,onMouseOver)
4. **Generic Events** (onError, onLoad)
