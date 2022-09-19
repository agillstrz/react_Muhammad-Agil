## Summary React React Hook

### 1. React Hook

Merupakan fitur baru di React 16.8. Dengan hooks, kita dapat menggunakan state dan fitur react lain tanpa perlu menulis sebuah kelas
**hook pada react**  
 | Hooks dasar | Hooks Tambahan |
| ----------- | ----------- |
| useState | useReducer |
| useEffect | useCallback |
| | useMemo |
| | useRef |
| | useImperativeHandle |
| | useLayoutEffect |
| | useDebugValue |

### 2. Aturan pada hook

**Hanya Panggil Hooks di Tingkat Atas** jangan memanggil Hooks dari dalam loops, conditions, atau nasted functions

### 3. useEffect

useEffect memungkinkan kita untuk melakukan side-effect pada komponen. contohnya adalah mengambil data, memperbarui DOM secara langsung, atau pengatur waktu. useEffect menerima dua argumen yaitu function dan dependency, namun untuk argumen kedua ini bersifat opsional.
