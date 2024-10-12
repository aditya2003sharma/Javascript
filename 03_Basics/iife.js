//Immediately Invoked Function Expressions(IIFE)


(function newt(){
  // named iife
  console.log("Server is running");
})();



(() =>{
  console.log("Server is running");
})();



//to create a local scope for variables to prevent them from polluting the global scope.