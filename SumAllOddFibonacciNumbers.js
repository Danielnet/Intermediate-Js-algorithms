//Sum All Odd Fibonacci Numbers
//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
function sumFibs(num) {
 
  var arr = [1,1,2];
  var result=arr[2];

  function isOdd(x){
    return x % 2;
  }
  
  for(var i = 2;i<=num;i++){
    arr[i] = arr[i-1]+arr[i-2];
    
    if(isOdd(arr[i])&&arr[i]<=num){
     result+=arr[i];
    }
  }
  
num=result;

  return num;
}

sumFibs(4);