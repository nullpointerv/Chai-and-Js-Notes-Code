// const tinderUser=new Object() //SINGLETON OBJECT
const tinderUser={} //NON-SINGLETON OBJECT HAI
tinderUser.name="khushi"
tinderUser.email="khushi@walmart.com"
tinderUser.role="SDE-I"

console.log(tinderUser);
console.log(Object.keys(tinderUser));//array h iska datatype
console.log(Object.values(tinderUser));//array h isks datatype
console.log(Object.entries(tinderUser));//puraa array me change krdega
console.log(tinderUser.hasOwnProperty('name'));//if the object has this property it will show true else false

//*************************************************************************
const regularUser={
    email:"khushi@atlassian.com",
    fullName:{
        userfullName:{
            fname:"khushi"
        }
    }
}
//console.log(regularUser.fullName.userfullName.fname);
obj1={1:"khushi",2:"ash"}
obj2={3:"shushi",4:"cash"}
// obj3={obj1,obj2}
obj3=Object.assign({},obj1,obj2)
// obj3={...obj1 , ...obj2}
// console.log(obj3);


//********************************************************************************************** 

const users=[ //ARRAY OF OBJECTS
{
    name:"khushi",
 id:3
},
{
    name:"don",  
 id:3
},
{
    name:"john",
 id:3
},
]
// console.log(users[0].name)


