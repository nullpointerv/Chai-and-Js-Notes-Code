function myUserName(userName){
 this.userName=userName;
 console.log("called");
 
}
//call humara current execution context kisi aur fn ko pass krdeta h
//but when we tell the function using this keyword in the createUsername func tab vo this reference store kr leta h myusername ka
function createUser(userName,roll,subject){
    myUserName.call(this,userName)
    this.roll=roll
    this.subject=subject
} 
const userDetails=new createUser("Khushi",21,"Physics")
console.log(userDetails);
