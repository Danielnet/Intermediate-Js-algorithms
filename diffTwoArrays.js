//Diff Two Arrays
//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
function diffArray(arr1, arr2) {
    
  var newArr = [];
  
  function compArray1(value) {
    return (arr2.indexOf(value)==-1);
    }
  
    function compArray2(value) {
    return (arr1.indexOf(value)==-1);
    }

//array containing unique elements in arr1 && arr2
newArr = arr1.filter(compArray1).concat(arr2.filter(compArray2));

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
