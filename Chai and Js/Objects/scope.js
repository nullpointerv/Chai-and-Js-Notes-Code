//browser ke andar console me ka global scope and vs code me  node ka global scope alag h
// let a=22;
// if(true){
//     let a=10;
//     const b=12;
//     var c=2;
//     console.log(a);
// }
// console.log(a);
// console.log(b);
// console.log(c); // var gobal scoped hota h
//******************************************************** */
// function one(){
//     const username="khushi";
//     function two(){
//         const website="youtube";
//         console.log(username);
//     }
//     // console.log(website); //error throw as its not under two funvtion two()
//     two()
// }
// one()
//************************************************* */
// if(true){
//     const username="khushi ";
//     if(username==="khushi "){
//         const website="youtube";
//         console.log(username+website);
//     }
//     // console.log(website); //error
// }
// console.log(username);//error


//************Intresting */

// addone(5) //koi error nhi aaega hoisting
// function addone(num){
//     return num + 1


// }
// console.log(addone(5));  

//------------------------------------------------

// addTwo(7) // cannont be executec 
// const addTwo = function(num){
// return num + 2
// }
// console.log(addTwo(3));
let val1=10;
let val2=10;
function addNum(n1,n2){
    let total=n1 + n2
    return  total
}
let result1=addNum(12,3)
console.log(result1);
let result2=addNum(val1,val2)
console.log(result2);
