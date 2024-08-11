//For-of generally used in arrays
["","",""]//array of strings
[{},{},{}]//array of objects

//for of syntax:
// for (const iterator of object) {
    //note yaha jo object likha h uska 
    //mtlb object nahi h bas ye h ki kis cheez
    // pr loop lagana h
// }

arr=[1,2,3,4,5]
for (const num of arr) {
    // console.log(num);

}

const str="Hello Moto";
for (const letter of str) {
    // console.log(letter);
}
//MAP for-of loop
const map= new Map();
map.set('IN','India')
map.set('Fr','France')
map.set('UN','United nations')
// console.log(map);

for (const key of map) {
    // console.log(key);//gives values inside array
}

for (const [key,value] of map) {
    // console.log(key , ":-" ,value);//to get values w/o array
}

//Objects are not iterable in for of loop

// const myObject={
//     'game1':'NFS',
//     'game2':'spiderman',
//     'game3':'batman'
// }
// for (const [key,value] of myObject) {
//     console.log(key,":",value);
    
// }
//TypeError: myObject is not iterable


const myObject1={
    game1:'NFS',
    game2:'spiderman',
    game3:'batman'
}
for (const key in myObject1) {
    // console.log(`${key} : ${myObject1[key]}`);
    
}

const myarr=['js','rb','py','java']
for (const key in myarr) {
// console.log(key);
}//array ki key number hoti h and 0 se hi start hoti h
//map pr for in nahi lgega

//for-each
//for each me call back fn use hota h /call back fn ka koi name nahihota
const coding =["js","ruby","java","py"]
coding.forEach( function (val) {//using callback fn
    // console.log(val);
} )
coding.forEach(  (val)=>{//using arrow fn
    // console.log(val);

} )
function printMe(item){
    // console.log(item);
}
// coding.forEach(printMe)//fn ka refe dena h usko vaha() execute nhi krna h vo 

coding.forEach((value,index,array)=>{
    // console.log(value,array,index);
})

const myCoding=[
    {lang:"javascript",
     file:"js"
    },
    {lang:"java",
     file:"java"
    },
]
myCoding.forEach((item)=>{
    // console.log(item.file);
})

//for each koi v value return nahi karta hai

const myNums=[1,2,3,4,5,6,7]
// const NewNum=myNums.filter((num)=>num > 4)
const NewNum=myNums.filter((num)=>{
    return num>4//curly bracket ke sath return keyword must h
})
    // console.log(NewNum);
//using for each only without returning value
const newNums=[]
myNums.forEach((num)=>{
    if (num>4){
        newNums.push(num)
    }
})
// console.log(newNums);
///////////////////////////////////
