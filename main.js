// 1 Check prime 
// How would you verfiy a prime number? 
// a prime number is only divisible by itself and 1. So, i will run a while loop and increase by 1.

function isPrime(n){
    var divisor = 2;
  
    while (n > divisor){
      if(n % divisor == 0){
       return false; 
      }
      else
        divisor++;
    }
    return true;
  }
  
// > isPrime(137);
//  = true
  