// const myArr=[1,2,3,4,5,'array',true]


// console.log(myArr)





// shallow copy



// Shalow copy is the concept in which a copy of an object or an array is made pointing to the same reference means 
// if we are changing anything in the copied section the results will be  reflected in the original one


//Deep Copy

// a new portion is made in the memory in deep copy.No changes in original if the copy gets changed


const myarr=[1,2,3,4,5,6,7,8,9]

console.log("A",myarr)


myarr1=myarr.slice(1,3);
console.log("B",myarr1)
console.log(myarr)

myarr2=myarr.splice(1,3);
console.log("c",myarr2)

console.log(myarr)


// push and pop operation