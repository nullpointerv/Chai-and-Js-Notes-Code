class User{
    constructor(userName){
        this.userName=userName
    
    }
    logMe(){
        console.log(`userName is ${this.userName}` );
        
    }
}
class Teacher extends User{
    constructor(userName,emailid,password){
        super(userName)
        this.emailid=emailid
        this.password=password
    }
    addCourse(){
        console.log(`A new course is added ${this.userName}`);
        
    }
}
const chai=new Teacher("krishna","khd12@7.com","interkf")
chai.addCourse()
chai.logMe()

const masalaChai=new User("khushi")
masalaChai.logMe()
// masalaChai.addCourse() //masalaChai  cannot access addCourse
console.log(chai===masalaChai);
console.log(chai === Teacher);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);


console.log(masalaChai === User);
console.log(masalaChai instanceof Teacher);
console.log(masalaChai instanceof User);



