const promiseOne= new Promise(function(resolve,reject){
 //do an async tasks
 //DB calls,cryptography,network calls
    setTimeout(function(){
        // console.log("Async Task is complete");
        resolve()
    },1000)
})
promiseOne.then(function(){
    // console.log("Promise resolved");
})

//without passing a variable for a promise

new Promise(function(resolve,reject){
    //do an async tasks
    //DB calls,cryptography,network calls
       setTimeout(function(){
        //    console.log("Async Task 2 is complete");
           resolve()
       },1000)
   }).then(function(){
    // console.log("Promise 2 resolved");
})
//-----------------------------------------------------------
//resolve me value pass v hota h as a parameter
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
       resolve({userName:"Chai",email:"khushi@ex.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})

//-----------------------------------------------------------

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({userName:"Khushi",email:"khushi@ex.com"})

        }
        else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour
.then((user)=>{//parameter me kuch v likho value
    console.log(user);
    return user.userName
})
.then((username)=>{//parameter me kuch v likho value
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally((function(){
    console.log("PROMISE IS EITHER RESOLVED OR REJECTED")
}))

//-----------------------------------------------------------

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({userName:"javaScript",password:"khushi@1207"})

        }
        else{
            reject('ERROR: JS went wrong');
        }
    },1000);
});
// promiseFive.then ka syntax v chalega and async ka v syntax chalega
   async function consumePromiseFive(){
   try{
    const response=await promiseFive //promise ek object h so promiseFive() aise consume nahi hota
    console.log(response);
   }catch(error){
    console.log(error);
   }
}
consumePromiseFive()

//-----------------------------------------------------------
async function getAllUsers(){
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(response);

        const data = await response.json()//yaha v await dena hoga kyuki response kuch time lagata h data fetch krneme
        console.log(data);
    }
    catch(error){
        console.log("E:",error);
    }
}
// getAllUsers()
//------------------------------------------------------
// fetch('https://jsonplaceholder.typicode.com/users')
// //iska response type promise h
// .then((response)=>{
//     return response.json()

// })
// .then((data)=>{
//     console.log(data);

// })
// .catch((error)=>{
//     console.log(error);
// })