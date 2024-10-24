const promiseOne=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log("Async task is completed")
    resolve()
  },1000)
})

promiseOne.then((event)=>{
  console.log("Task Accomplished")
}).catch((error)=>{
  console.log("Error:Something went Wrong")
})


new Promise(function(resolve, reject){
  setTimeout(function(){
      console.log("Async task 2");
      resolve()
  }, 1000)

}).then(function(){
  console.log("Async 2 resolved");
})


new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve({username:'dummy',mail:"dummy@dummy.in"})
    
  }, 1000);
}).then((user)=>{

  console.log(user)
})


//if eroor occured


const promiseThree=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    let error =false
    if(!error){
      resolve({username:'dummy',mail:"dummy@dummy.in"})
    } else{
      reject("Error Occured:Something went Wrong")
    }



  },1000)     
  
}).then((user)=>{
  console.log(typeof user)
  return user.username;

}).then((username)=>{
  console.log(username)
}).catch((error)=>{
  console.log(error)

}).finally(()=> console.log("This promise is resolved"))


const promiseFive = new Promise(function(resolve, reject){
  setTimeout(function(){
      let error = false
      if (!error) {
          resolve({username: "javascript", password: "123"})
      } else {
          reject('ERROR: JS went wrong')
      }
  }, 1000)
});

async function consumepromiseFive(){
  try {
    const response=await promiseFive
    console.log(response)
    
  } catch (error) {
    console.log(error)
    
  }
  
}

async function consumepromiseFive(){
  try {
    const response=await fetch("https://api.github.com/users/aditya2003sharma")
    console.log(response.json())
    
  } catch (error) {
    console.log(error)
    
  }
  
}

// https://api.github.com/users/aditya2003sharma
// fetch(https://api.github.com/users/aditya2003sharma)


fetch('https://api.github.com/users/aditya2003sharma')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))