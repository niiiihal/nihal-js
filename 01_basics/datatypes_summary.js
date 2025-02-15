// primitive

// 7 types : string,Number,Boolean,null,undefined,symbol,BigInt

const isloggedin= false
const temp=null
let usermail;

const id= Symbol('123')
const anotherid=Symbol('123')       // these two are not same ids

console.log(id===anotherid)
// REFERENCE(non primitive)

// array, ojjects, functions

const heros=["shaktiman" ," arjun", "karn"]
console.log(heros);

// object declaration
let myobj={
    name: "nihal",
    age: 23,
}
// function declation

const myfunction=function(){
    console.log("hello world");
    
}

console.log(myfunction());


// note: JS is a dynamically typed language

