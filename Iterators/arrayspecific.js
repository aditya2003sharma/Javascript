//for of



const myarr=[1,2,3,4,5]


for (const element of myarr) {
  // console.log(element)
  
}

const stringy="Hello This is Dummy"
for (const element of stringy) {
  // console.log(`Each char is ${element} `)
  
}


//Maps

const map =new Map()
map.set('IN',"INDIA")
map.set('USA','UNITED STATES OF AMERICA')


for (const key of map) {
  console.log(key)
  
}

for (const [key] of map) {
  console.log(key)
  
}