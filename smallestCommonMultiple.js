//Smallest Common Multiple
//Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
function smallestCommons(arr) {

 var max = Math.max(arr[0],arr[1]);
  var min = Math.min(arr[0],arr[1]);
  var newArr = [];
    for (var i = max; i >= min; i--) {
    newArr.push(i);
    }

    return newArr.reduce(function(x,y){
    for (var i = x; i<=x*y; i+=x){
      if (i % y===0 ){
        return i;
      }
    } 
  });
  
}

 
smallestCommons([23,18]);