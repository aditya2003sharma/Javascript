let a =10
const b=20
var c= 30


//Global Scope
{
  //Block scope
}


function one(){
  const username="dummy"


  function two(){
    const website="github"

    console.log(username)
  }
  // console.log(website)
  two()


}

one()






//++++++++++++++++++++++++

console.log(addone(5))

function addone(value){
  return value+1
}


console.log(addone(5))

const addtwo=function(value){ //cannot execute before declaration
  return value+1
}