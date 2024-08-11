// function addTwonum(n1,n2){

// //  console.log(n1+n2);
// }
// const add=addTwonum(2,9)
// addTwonum(2,"9a")
// addTwonum("2a",9)
// addTwonum(2,"9")
///////////////////////////////////////////
// function addTwonum(n1,n2){
     
//     return n1+n2; 

// }
// const result=addTwonum(22,3)
// console.log("result=",result)

/////////////////////////////////////////////////////
function loginUserMsg (username){
    if(username==undefined)// or (!username)
    {
        // console.log("please enter user name");
        return
    }

     return `${username} has logged in`
}
// console.log(loginUserMsg());
////////////////////////////////////////////////////////////!SECTION


// function calculateCartPrize(val1,...num1){
//     return num1
// }
// console.log(calculateCartPrize(200,30,1000));


//////////////////////////////////////////////////


// const user={
//     name:"khush",
//     price:123,
// }
// function handleobj (anyobj){
//     console.log(`Username is ${anyobj.name} and price is ${anyobj.price}`);
// }
// // handleobj(user);
// handleobj({
//     name:"kon",
//     price:"don"//diectly v pass kr skte h object ko
// })
/////////////////////////////////////////////////////
const myArr=[22,33,44,55,23]
function returnsecondValue(getArr){
return getArr[2];
}
// console.log(returnsecondValue(myArr));
console.log(returnsecondValue([22,33,23,43,45]));
