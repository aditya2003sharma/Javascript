// //for





// for (let i = 0; i < 10; i++) {
//   const element = i;
//   if(element==5){
//     console.log("IS THE BEST ELEMENT")
//   }
//   console.log(element)

// }


// // console.log(element)  --->out of scope not accesible

for (let i = 0; i < 10; i++) {
//  console.log("***Outer loop running:***",i)
  for (let j = 0; j < 10; j++) {
//   console.log("Inner loop runnung:",j)
    
  }
  
  
}



const myarr=["batman","superman","ironman"]


for (let index = 0; index < myarr.length; index++) {
  const element = myarr[index];
  console.log(element)
  
}




//break and contine


for (let index = 1; index <=20; index++) {
  if(index===5){
    // console.log("Detected 5")
    break;
  }
  // console.log(`Value is${index}`)
  
}


for (let index = 1; index <=20; index++) {
  if(index===5){
    console.log("Detected 5")
    continue;
  }
  console.log(`Value is${index}`)
  
}

