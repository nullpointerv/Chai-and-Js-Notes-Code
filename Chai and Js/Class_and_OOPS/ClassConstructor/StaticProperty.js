class User{
    constructor(username){
        this.username=username

    }
    logMe(){
      return `New User is ${this.username}`
    }
    static createID(){
         return "1207"
    }

}
const khushi = new User("KHUSHI")
console.log(khushi.logMe());
console.log(khushi.createID());//static method lagane ke baad apni class as well as other classes who are connected cannot access this createId 

class Teacher extends User{
   constructor(username,email,password){
   super(username);
   this.email=email;
   this.password=password;

    }
}
const any = new Teacher("khushiii","khushi@1207.com","khushi12")
console.log(any.logMe());
// console.log(any.createID());//agar static method  laga de then another class cannot access that createId function 
