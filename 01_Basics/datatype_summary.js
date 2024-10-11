// Primitive
// 7 types
/*
String
Number
Boolean
Null
Undefined
Symbol
BigInt
*/

//Dynamically typed language


/*

Reference type
Arrays
Objects
Functions

*/


const score =100
const scoreValue = 100.3


const isLoggedIn= false
const outsideTemp=null
let email;


const id=Symbol('123')
const userid=Symbol('123')


// the above two are not equal

console.log(id)
console.log(userid)


const bigNumber =12324324243453455365456n


const ages=[10,20,30] //arrays

let myObj={
  name:"dummy",
  age:22
}



const myfunction=function(){

  console.log("Dummy")

}


//null ka datatype will come object

console.log(typeof ages);
console.log(typeof myObj)
console.log(typeof (myfunction))
console.log(typeof null)

// object
// object
// function object
//object