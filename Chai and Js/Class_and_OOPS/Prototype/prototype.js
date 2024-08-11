//Prototype hi hai jo new keyword ka acces dera h
//classes v isi ke through mili hai
//this key v isi se mili h
//prototypal inhertance v  isi prototype ke through aara h

//--Array,string,Numbers etc all are OBJECTS and Object ka khud ka koi parent nahi hota
//Object ki saari property uske khud ki rehti hai 
//to yaha(OBJECT) pr jo prototype ka reference null pe jata h

//but what abt functions lets see with an example  

function multiplyBy2(num){
    return num*2;
}
multiplyBy2.power=2;

console.log(multiplyBy2(4));
console.log(multiplyBy2.power);
console.log(multiplyBy2.prototype);


//Function function bhi h and object bhi hai
function meraUser(userName,rate){
    this.userName=userName;
    this.rate=rate;
}

meraUser.prototype.increment=function(){
    this.rate++;
    console.log(`rate is ${this.rate}`);
    
}
meraUser.prototype.printMe=function(){//.prototype likhna is not necessary
    console.log(`rate is ${this.rate}`);
    
}

const chai = new meraUser("chai",25)
const tea = new meraUser("tea",250)
chai.printMe()//har baar .prototype likhna is not necessary infact its not at all needed (syntactical sugar)
tea.increment()

//ALL ABOUT THE FUNCTIONALITY OF THE [new] KEYWORD 
//to be noted

let myHeros=["Papa","Mumma","Didi","Bhaiya"]
let heroRoles={
    Papa:"Business",
    Mumma:"Guradian of The House",
    Didi:"Cricketer",
    Bhaiya:"Software Dev",
    getBhaiyaPower:function(){
        console.log(`Bhaiyas Power${this.Bhaiya}`);
        
    }

}
let nayaObj={
    user:"khushi",
    roll:21
}
Object.prototype.Khushi = function(){
    console.log("khushi has all roles");
    
}
heroRoles.Khushi()//object has its own power
myHeros.Khushi()//array also has objects power kyuki sab kuch object se hi pass hota h at the end
nayaObj.Khushi()


Array.prototype.heyKhushi = function(){
    console.log("checking if array has value of object");


}
myHeros.heyKhushi()//but array has its own power ,and it does not share its power to functions and strings 
// myHeros.heroRoles() myHeros object does not have values of arrays