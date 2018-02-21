//DNA Pairing
//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
function pairElement(str) {

  var result = [];
  var obj = {
    A : "T",
    T : "A",
    C : "G",
    G : "C"
  };

  var arr = str.split('');

  for(var i=0;i<arr.length;i++){
    result.push([arr[i],obj[arr[i]]]);
  }
  str =result;
  return str;
}

pairElement("GCG");
