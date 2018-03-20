//Sum All Primes
//Sum all the prime numbers up to and including the provided number.
function sumPrimes(num) {

  //array starts with the first prime numb since its the only non-odd prime.
  var arr = [2];


function isOdd(n) {
   return Math.abs(n % 2) == 1;
}
  
function checkIfNOTPrime(max,counter) {
   return Math.abs(max % counter) == 0;
}
  

  //add all odd numbers to array. if not prime , then arr.pop()
  for(var i = 2;i<=num;i++){
    if(isOdd(i)){
      arr[i] =i;
      
      //check all numbers up to i if they can be divided by i
      for(var j = 1;j<i;j++){
              if(checkIfNOTPrime(i,arr[j])){
        arr.pop();
                break;

      }
      } 
    }
  }

  
 
  function add(a, b) {
   return a + b;
 }
  
  //adding all primes to get the sum
  var sum = arr.reduce(add, 0);



  return sum;
}

sumPrimes(977);
