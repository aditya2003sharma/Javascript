const name ="dummy"
const repoCount=50

console.log(name+repoCount+"Value");


// backtick
console.log(`${name}`)



const stringName=new String("Hello")


console.log(stringName.length);
console.log(stringName.charAt(0));
console.log(stringName.indexOf('t'));


const newString=stringName.substring(0,3);
console.log(newString)




 /*
 slice
 trim removes the starting and end space
 trim start and trim end
 */


 const url="Hello these all are string methods"

 url.replace('%20','-')

 console.log(url);


 console.log(url.split(" "))
