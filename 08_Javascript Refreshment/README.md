## Summary Javascript Refreshment

### 1. JavaScript 
merupakan bahasa pemograman high level scripting untype dan Interpreted. JavaScript merupakan jenis bahasa pemograman dynamic.

### 2. Declaration
Declaration adalah proses pembuatan variabel untuk menyimpan data.  
Pada javascript ada 3 cara declaration yaitu dengan menggunakan var,let,const.  

<details>

<summary>Var</summary>

<p>

Reassignable✅,Redeclarable✅,Hoisted✅,Function scope✅,Blockscope❌.

```js
    // cara deklarasi menggunakan var
    var a = 10;
```
```js
    //redeclaration pada var
    var num1
    var num1
    console.log(num1); //undefined

    // Reassignment pada var
    var num1=20
    console.log(num1); //20
    num1 = 30;
    console.log(num1); // 30
```

</p>
</details>

<details>

<summary>Let</summary>

<p>

Reassignable✅,Redeclarable❌,Hoisted❌,Function scope✅,Blockscope✅.

```js
    // cara deklarasi menggunakan let
    let a = 10;
```

```js
    //redeclaration pada let
    let num1
    let num1
    console.log(num1); // error

    // Reassignment pada let
    let num1=20
    console.log(num1); //20
    num1 = 30;
    console.log(num1); // 30
```
</p>
</details>

<details>

<summary>Const</summary>

<p>

Reassignable❌,Redeclarable❌,Hoisted❌,Function scope✅,Blockscope✅.

```js
    // cara deklarasi menggunakan const
     const a = 10;
```

```js
     //redeclaration pada const
    const num3 = 1
    const num3 = 1
    console.log(num1); //error

    // Reassignment pada const
    const num3=20
    console.log(num3); //20
    num3 = 30;
    console.log(num3); // error
```

</p>
</details>



### 3. Scooping
Yaitu menentukan **dimana** variabel, fungsi, dan objek diatur dan **dapat diakses** dalam kode kita. ini berarti ruang lingkup variabel dikendalikan oleh **lokasi deklarasi**  variabel
Contoh scope :   

```js
    // Global Scope 
    var name = "agil";
    let age = "21";
    // --Global Scope 

    // Function scope
    function angka() {
        let a = 2;
        let b= 3;
        const c = 21;
    }
    // --Function scope

    // Block scope
    if (true){
        let num1=7;
        let num2=8;
        const num3=22;
    }
    // --Block scope
    
```