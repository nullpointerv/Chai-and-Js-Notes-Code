//singleton
//Object.create

//------------------------------------------------- 
//object literals
const mu_Sym=Symbol("key1")
jS_User={
    name:"khushu",
    "full Name":"khushi singh",
    age:19,
    [mu_Sym]:"mykey1",
    location:"jaipur",
    email:"hjebfkj.com",
    isLoggedin:false,
    lastLoginDays:["Monday","Saturday"]
     
}
console.log(jS_User.name);
console.log(jS_User["name"]);
console.log(jS_User["full Name"]);//this cant be accessed by . method error aaega
// console.log(typeof jS_User["mu_Sym"]);//aise mr string aaega but symbol datatype chaie to uska syntax alag hoga
console.log(jS_User[mu_Sym] );
console.log(jS_User);



jS_User.email="khushi@atlassian.com"
console.log(jS_User);
// Object.freeze(jS_User)
jS_User.email="khushi@towerreasearch.com"
console.log(jS_User);



jS_User.greeting=function(){
    console.log("hello moto");
}
console.log(jS_User.greeting())