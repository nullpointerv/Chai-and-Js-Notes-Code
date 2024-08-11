function makeFun(){
    const name="DIDI";
    function displayName(){
         console.log(name);
         
    }
    return displayName;
}
const myFunc=makeFun()//if we will directly call makeFun then it will return nothing
myFunc()
//here we have only passed function displayName ka reference
//but still we will get the log name as output because 
// beacuse of the lexical scoping
// since when we called a makeFun function then makeFun will take the scope as well the variable thats inside the makeFun
//but the func displayName when returned will have its scope as well as its parent functions ie makeFun's lexical scope
// so this phenomena is nothing but closure
