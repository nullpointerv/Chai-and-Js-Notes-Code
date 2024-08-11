class User{
    constructor(username,password){
        this.username=username
        this.password=password
    }
    get username(){//always return something
        return`${this._username.toUpperCase()}`;
    }
    set username(value){//does not return it just sets the value
        this._username=value;
    }

    get password(){
        return `${this._password.toUpperCase()}`;
    }
    set password(value){
        this._password=value;
    }
}
const khushi=new User("khushi",'abc')
console.log(khushi.username);
console.log(khushi.password);

