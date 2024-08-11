// class User{
//     constructor(userName,emailid,password){
//         this.userName=userName
//         this.emailid=emailid
//         this.password=password
//     }
//     encryptPassword(){
//         return`${this.password}1207`
//     }
//     changeUsername(){
//         return`${this.userName.toUpperCase()}`
//     }
//     //this is a method even if ye function h still we call it a method
// }
// const change=new User("khush","khushi@DEshaw.in","invincible")
// console.log(change.encryptPassword());
// console.log(change.changeUsername());

//behing the scenes using functions

function User(userName,emailid,password){
    this.userName=userName
    this.emailid=emailid
    this.password=password

}
User.prototype.encryptPassword=function(){
    return`${this.password}1207`;

}
User.prototype.changeUsername=function(){
    return`${this.userName.toUpperCase()}`
}
const change=new User("khush","khushi@DEshaw.in","invincible")
console.log(change.changeUsername());
console.log(change.encryptPassword());

