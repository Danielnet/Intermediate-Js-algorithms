//Drop it
//Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
function dropElements(arr, func) {
  var boolArray = arr.map(func);
  while(boolArray[0]===false){
    boolArray.shift();
    arr.shift();
  }

  return arr;
}

dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;});
