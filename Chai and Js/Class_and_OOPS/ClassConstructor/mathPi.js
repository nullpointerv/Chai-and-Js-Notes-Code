const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(Math.PI);
// Math.PI=2;
// console.log(Math.PI)
// console.log(descripter);

const maggie={
    name:"maggie magie maggiee",
    price:51,
    isAvailable:true,
    ordermaggie:function(){
        console.log("maggie nahi bani");
        
    }
}
// console.log(maggie);
// console.log(Object.getOwnPropertyDescriptor(maggie));//it will give undefined kyuki descriptor ask for the property jisme change krna h islie always give propetry which need to change 
console.log(Object.getOwnPropertyDescriptor(maggie,'name'));

// console.log(Object.getOwnPropertyDescriptors(maggie));//it will give all the properties of the object maggie Descriptors


//what if we want to change my object descriptor properties
//we can do that too
Object.defineProperty(maggie,'name',{
writable:false,
enumerable:true
})
console.log(Object.getOwnPropertyDescriptor(maggie,'name'));


//using for of loops
for (let [key , value] of Object.entries(maggie)){
    if(typeof value!=='function'){
        console.log(`${key}:${value}`);
        
    }
}