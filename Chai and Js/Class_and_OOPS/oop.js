// object literal is literally an object ;)
// js me object literal ko hi base unit bola gaya h
const user={
    username:"hitesh",
    loginCount:10,
    signedIn:true,
    getUserDetails:function(){
      
      console.log(`UserName: ${this.username}`);//yaha this keyword use krna jaruri h kyuki function ke andar alag ka execution context ban jata h usme us function ko kaise pata chalega ki username kaha se h thats why we use this keyword 
      console.log(this);
      
    }
}
console.log(user.username);
console.log(user.getUserDetails());
console.log(this);//{}empty parenthesis and windo object in browser

// const promise=new Promise()//these are constructor functions
// const date=new Date()

function User(username,loginCount,isLoggedIn){
    this.username= username;
    this.logincount=loginCount;
    this.isloggedIn=isLoggedIn;//all of them are properties
    

    this.greet=function(){
    console.log(`welcome ${this.username}`)
    }
    return this //>return this nahi v dalo to by default retur krta hi h and ye vhi this object return karta h

}
//constructor function har baar ek naya instance deta h/copy deta h
const userOne = new User("khushi",12,true);
const userTwo =  new User("chai and Js",17,true);
//islie yaha new keyword ka use krenge so that meko new instance mile ..if not then same value will be copied
console.log(userOne);
console.log(userTwo);
// notes on new keyword
//1.new keyword use krne pe sbse pehle ek new instance /empty naya object create hota h
//2.constructor function call hota h new keyword ke karan[basically ye jitne v arguments hote h usko pack krke hume dedeta h]
//3.third step me ye jo this keyword h , jo v arguments likhe us this keyword me inject hojaate h
//4.miljata h function ke andar


