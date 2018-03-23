//Everything Be True
//Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
function truthCheck(collection, pre) {

  function truthy(element) {
  return element[pre];
}
  

  return collection.every(truthy);

}

//  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
