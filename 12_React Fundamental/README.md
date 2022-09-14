## Summary React Fundamental

### 1. Apa itu Component

Komponen React adalah bagian kode yang dapat digunakan kembali yang digunakan untuk menentukan tampilan, behavior, dan state sebagian UI. Komponen mempermudah untuk memecah UI menjadi bagian tersendiri, bagian yang bisa digunakan kembali, dan berpikir tentang setiap potongan dalam isolasi.

### 2. Apa itu props?

- Singkatan dari properties, membuat kita dapat memberikan argumen / data pada component.
- Props membantu untuk membuat komponen menjadi lebih dinamis
- Props dioper ke component sama seperti memberikan atribut pada tag HTML
- Props pada component adalah read-only dan tidak dapat diubah.

### 3. React lifecycle

**lifecycle method yang umum :**

**1. render()**
Fungsi yang paling sering dipakai Required pada class component Pure function. Tidak boleh ada setState()

```js
class Hello extends Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
```

**2. componentDidMount()**
Dipanggil ketika component sudah di render untuk pertama kali
Tempat yang tepat untuk pemanggilan API
Boleh ada setState()
**3. componentDidUpdate()**
Dipanggil ketika terjadi update (props atau state berubah)
**4. componentWillUnmount()**
Dipanggil ketika component akan dihancurkan
Cocok untuk clean up actions
