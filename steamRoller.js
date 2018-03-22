//Steamroller
//Flatten a nested array. You must account for varying levels of nesting.
function steamrollArray(arr) {
 
  var flattenedArray = [];
  
  arr.map(flatten);
  
  function flatten(x){
    if(Array.isArray(x)===false){
      flattenedArray.push(x);
    }
    if(Array.isArray(x)===true){
      x.map(flatten);
    }
  }
 arr = flattenedArray;
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);