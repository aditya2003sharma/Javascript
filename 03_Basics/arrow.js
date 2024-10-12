//  const user={

//   username:"dummy",
//   age:27,


//   welcome_message:function(){
//     console.log(`${this.username},welcome to website`)
//     console.log(this)
//   }
//  }

//  user.welcome_message()
//  user.username="sam"
//  user.welcome_message()


//  console.log(user)
//  console.log(this)



//can only be used in ojects




const newfunc=() =>{
  let username="sam"
  console.log(this)
}

newfunc()





//===========================================================
const adtwo=(num1,num2) =>{
  return num1+num2
}


console.log(adtwo(5,4))


// const adtwo=(num1,num2) => num1+num2 //implicit return


 