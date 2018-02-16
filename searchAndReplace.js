//Search and Replace
//Perform a search and replace on the sentence using the arguments provided and return the new sentence.
function myReplace(str, before, after) {
  function replacer(){
    var char = before.charAt(0);
if (char == char.toUpperCase()) {
  after = after.replace(after.charAt(0),after.charAt(0).toUpperCase());
 return after;
}
if (char == char.toLowerCase()){
 return after;
}
  }
  str = str.replace(before,replacer);
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
