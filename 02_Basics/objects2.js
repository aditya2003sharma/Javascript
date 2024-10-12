const newobj=new Object()

newobj.name='Dummy'
newobj.id='12233'
newobj.email='deep@gmail.in'


// console.log(newobj)


const user={
  email:'@gmail.com',
  fullname:{
    userfullname:{
      firstname:'Dummy',
      lastname:'Sharma'
    }
  }
}



console.log(user.fullname.userfullname.firstname)



const newobj2=Object.assign({},user,newobj)

const obj3={...newobj,...user}
console.log(newobj2)
console.log(obj3)

//has own property checks wheather a key is present


//DESTRUCTURING in objects


const course={
  courseName:"jAavascript",
  price:"freee",
}

const {courseName:Name}=course

console.log(courseName)



//API's

