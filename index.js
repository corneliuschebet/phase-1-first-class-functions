function receivesAFunction(printName) {
    return printName();
  }
  
  function returnsANamedFunction() {
    function namedFUnction() {
      console.log("Function calling who");
    }
  
    return namedFUnction;
  }
  
  function returnsAnAnonymousFunction() {
    
    return function () {
      console.log("Bomboclaat");
    };
  }