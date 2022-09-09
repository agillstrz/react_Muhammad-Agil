### Bagian mana saja yang terjadi kekurangan tersebut?
	1. nama variable, function dan Class.
	2. cara mendeklarasikan child Class dan fungsi didalamnya.

 **alasan dari tiap kekurangan** :  
 
 1. untuk nama variabel dan function sebaiknya menggunakan camelCase dan untuk nama class sebaiknya diawali dengan huruf kapital.

 ```javascript
    //soal :
    class user{}
    class userservice{}
    var username;
    getallusers()
    getuserbyid()

    //sebaiknya :
    class User{}
    class UserService{}
    let userName;
    getAllUsers()
    getUserById()
```

2. Cara mendeklarasikan child Class dan fungsi didalamnya
 ```javascript
//  soal
class userService {
user [] users = [];
user [] getalluser(){
    return users;
}

}

// seharusnya
class UserService extends User {
    constructor(id,userName,password){
        super(id,userName,password)
        this.users = [id,userName,password];
    }

    getAllUser(){
        return this.users;
    }
}
```
