//Singleton
//object.create

//object literals

const mysym=Symbol('123')

const JsUser={
  name:'Dummy',
  age:21,
  [mysym]:"hello",
  location:'Delhi',
  isLoggedIn:false,
  jsuserEmail:"dummu@dummy.com"

}


const JsUser2={
  name:'Dummy',
  age:21,
  mysym:"hello",
  location:'Delhi',
  isLoggedIn:false,
  jsuserEmail:"dummu@dummy.com"

}

console.log(JsUser["name"])
console.log(typeof(JsUser[mysym]))

JsUser.jsuserEmail='dummy@gmail.com'
console.log(JsUser)
console.log(JsUser2)

// Object.freeze(JsUser)
console.log(JsUser)



// Dummy
// string
// {
//   name: 'Dummy',
//   age: 21,
//   location: 'Delhi',
//   isLoggedIn: false,
//   jsuserEmail: 'dummy@gmail.com',
//   [Symbol(123)]: 'hello'
// }
// {
//   name: 'Dummy',
//   age: 21,
//   mysym: 'hello',
//   location: 'Delhi',
//   isLoggedIn: false,
//   jsuserEmail: 'dummu@dummy.com'
// }
// {
//   name: 'Dummy',
//   age: 21,
//   location: 'Delhi',
//   isLoggedIn: false,
//   jsuserEmail: 'dummy@gmail.com',
//   [Symbol(123)]: 'hello'
// }



JsUser.greeting=function(){
  console.log(`Hello js User ${this.name}`);
}
console.log(JsUser.greeting())