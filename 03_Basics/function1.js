// function addTwoNumbers(number1,number2){ //input in definition are called parameters

//   console.log(number1+number2)
    
// }

function addTwoNumbers(number1,number2){ //input in definition are called parameters

  return number1+number2
    
}


const result=addTwoNumbers(3,4) //and these are arguments


console.log("Result value",result)


function isLoggedIn(username){
   if(username===undefined){
    console.log("Please Enter a username")
    return
   }
   return `${username} Just LoggedIn`

}



console.log(isLoggedIn("Dummy"))



console.log(isLoggedIn()) //undefined




function calculateCartPrice(...num1){ //rest or spread operator

  return num1

}


console.log(calculateCartPrice(200,400,500))


const user={
  username:"dummy",
  age:27
}

function handleObject(anyobject){

  console.log(`My name is ${anyobject.username} and my age is ${anyobject.age}`)



}


handleObject({
  username:"dummy",
  age:27
  
})

const myNewArray=[4,5,6,7,8,6,4]


function returnsecondvalue(getarray){
  return  getarray[2];
}


console.log(returnsecondvalue(myNewArray))
