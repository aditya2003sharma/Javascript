const accountId= 4777
let accountEmail="dummy@gmail.com"
var accountPassword="1234"
accountCity="Jaipur"

let accountState;
/*
Prefer not to use var because of use in block scope and functional scope
*/
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])