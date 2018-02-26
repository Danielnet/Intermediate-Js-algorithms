//Sorted Union
//Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
function uniteUnique(arr) {
  var x= [];//unsorted flattened array
  var y= [];//sorted arr
  
  //flatten array
  for (var i = 0; i < arguments.length; i++) {
    for (var j=0; j < arguments[i].length; j++) {
     x.push(arguments[i][j]);
    }
}
  
  //remove duplicates
  y = x.filter(function(element, index) {
    return x.indexOf(element) == index;
  });
  return y;
}

uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
