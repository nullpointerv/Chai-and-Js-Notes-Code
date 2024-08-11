//*************************** ARRAYS*****************************
//shallow copies hi hota hai arrays me- original reference
//deep copies - copy hota hai  
// my_Arr=[0,1,2,3,4,5]; 
// my_Arr.unshift(3); //unshift me first place me kuch v add kr skte h.
// my_Arr.shift(); //shift me bas first wala remove hojata h koi parameter do ya na do ..bas first wala hi remove hogA
// my_Arr.push(0); //end me add hojata hai koi v parameter
// my_Arr.pop();  //end wala remove hojata hai ..koi parameter do ya na do bas end hi remove hoga
// console.log(my_Arr);
//  new_arr=my_Arr.join()

// console.log(my_Arr.includes(1));
// console.log(my_Arr.indexOf(3));
// console.log(my_Arr);
// console.log(new_arr);
// console.log(typeof new_arr);



//slice and splice
my_arr=[0,1,2,3,4]
console.log(my_arr);

const n1_arr=my_arr.slice(1,3)
console.log(n1_arr);
console.log(my_arr);


const n2_arr=my_arr.splice(1,3) //splice me original array hi manipulate krdeta hai splice method
console.log(n2_arr);
console.log(my_arr);

