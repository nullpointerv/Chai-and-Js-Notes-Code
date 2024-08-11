function Papa(){
    const ice="iceCream"
    function beta(){
        // let a=2;
        console.log("Something");
        console.log(ice);
        
    }
    function beti(){
        console.log("somethingggg");

    }

    beta()
    beti()
    // console.log(a);
    
}
Papa()//beta/beti not defined in case of papa

//so basically in lexical scoping beta and beti function can access variables of papa function but papa cannot get values inside the beta/beti function
//and also beta and beti function also dont share there values in between them 