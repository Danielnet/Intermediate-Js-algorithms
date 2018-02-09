//Sum All Numbers in a Range
//We'll pass you an array of two numbers. Return the sum of those two numbers and //all numbers between them.
function sumAll(arr) {
  
 var sum= 0;

  return arr.reduce(function(a, b){
   var min= Math.min(a, b);
   var max= Math.max(a, b);
    
    for(var i=min+1; i<=max; i++){
      sum+= i;
    }
        return sum+min;
  });
  
}

sumAll([5, 10]);