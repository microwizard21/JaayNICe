var p = 10;
var timer
function count() {
    if(p){
        console.log(p)

    }
    else {
        clearInterval(timer)
    }
    p--
    if(p === 0){
        console.log("DONE!")
    }
}
timer = setInterval(function(){count()}, 1000)
/******** ***************************************
 * 
 * **********************************************/


 

   function specialMultiply(a,c){
    if(arguments.length === 1){
      return function(c){
        return a*c;
      }
      
    } else{
      return a*c;
    }
    
  }
  console.log(specialMultiply(3,4));
  console.log(specialMultiply(3)(4));
  console.log(specialMultiply(3));
 


  /*************************************************
   * 
   * odd
   *************************************************/

   function isPrime(k){
    if (k===1) {
      return false;
    }else if(k === 2){
      return true;
    }else{
      for(var x = 2; x < n; x++){
        if(n % x === 0){
          return false;
        }
      }
      return true;  
    }
  }
  
  console.log(isPrime(9));
  console.log(isPrime(17));
  

  /******************************************
   * 
   * 
   *******************************************/

   function value(value1, callback){
    return callback(value1) .map(fn => fn())
}
function isEven(a){
    return[
        () => a % 2 === 1
    ]
}
function isPrime(n){
    if (n===1) {
      return false;
    }else if(n === 2){
      return true;
    }else{
      for(var x = 2; x < n; x++){
        if(n % x === 0){
          return false;
        }
      }
      return true;  
    }
  }
  
  console.log(isPrime(9));
  console.log(isPrime(17));


  /***********************************************
   * 
   * 
   **********************************************/

   function isEven(num){
    if(num % 2 == 0){
        return "True"
      }  else {
        return "False"
      }
    
}

console.log(isEven(3));
console.log(isEven(2));

  