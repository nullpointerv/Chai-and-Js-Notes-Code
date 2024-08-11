//js ka engine browser ke andar chupa hota h
//alert ka use browsee me hoga not in node js
//code ka readability
// ------------------------------------------------------ 

//Datatypes in JS
// [number=2 ka pow 53
// bigint
// string="",''
// boolean=true/false
// nul=standalone value
// undefined]
// symbol -for finding uniqueness
// object

//------------------------------------------------------

// console.log(typeof "hi")
// console.log(typeof "1")
// // console.log(typeof )
// console.log(typeof 2.88)
// console.log(typeof true)
// console.log(typeof null)//numm ka type h object
// console.log(typeof undefined)//undefined khud ek type h

//------------------------------------------------------

//DATATYPE CONVERSION
// let score=33
// console.log(typeof(score));//both ways can be used
// console.log(typeof score);

//------------------------------------------------------

// let score=33;
// let score="23abvh";// type of me number aaega and ye NAN hoga
// let valueInNumber = Number(score)//converts type to number
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

//------------------------------------------------------

// let isLoggedIn=1 //true
// let isLoggedIn=0 //false
// let isLoggedIn="" //empty string false
// let isLoggedIn="khushi" //true

// let booleanIsLoggedIn=Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

//------------------------------------------------------
//  let score=22
//  let convertToString=String(score)
//  console.log(convertToString)
//  console.log(typeof convertToString);

//------------------------------------------------------
// ****************OPERATIONS*********************
// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2+2);
// console.log(1+2+"2");
// console.log(+true);//1
// console.log(+"");

// let gameCounter =100;
// gameCounter++;
// console.log(gameCounter)//prefix postfix pdhlNo

//****************comparison operator*******************
// console.log(2>3);//with numbers
// console.log("2">7);
// console.log(null>0);
// console.log(null>=0);
// console.log(null==0);

// console.log(undefined>0);
// console.log(undefined==0);
// console.log(undefined<0);

//avoid these comparisons
//summary datatypes:
//primitive:string,number(includes floats and integers ),boolean,null,undefined,symbol


//non-primitive:arrays,objects,functions:iska generally datatype functions hi ata h  and function ka function object ata h
// arr=[1,2,3]
// obj={
//     name:"khushi", 
//     Age:4
// }
// const myfun=function(){
//     console.log("hi");
// }
// console.log(typeof arr)//object
// console.log(typeof obj)//object
// console.log(typeof myfun)//function


