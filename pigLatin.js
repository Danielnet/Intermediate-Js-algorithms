//Pig Latin
//Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

function translatePigLatin(str) {
  
  var consonant = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","x","z"];
  var vowel = ["a","e","i","o","u"];
  
  var newArray = str.split("");
  var tempArray = [];
  var finalArray = [];
 
  
  //TURN string INTO array "newArray"
  for(var i=0;i<newArray.length;i++){
    for(var c=0;c<consonant.length;c++){
      if(newArray[i]==consonant[c]){
          tempArray.push(newArray[i]);
        }
      }
    }
    
  
  //check if first char is Vowel
  function checkVowel(){
    for(var v of vowel){  
if(v == newArray[0]){
  finalArray.push(str+"way");
return true;
  }
}

    
  }
 //check where first consonant begins in string and if next letters are consonant clusters
  function checkCluster(){
  for(var t=0;t<tempArray.length;t++){
            
    var currElIsCon = newArray.indexOf(tempArray[t])+1;
    var nextElIsCon = newArray.indexOf(tempArray[(t+1)]);

    if(currElIsCon != nextElIsCon){
      newArray.splice(t, 1);
     return finalArray.push(tempArray[t]);
    }
    if(currElIsCon == nextElIsCon){
     
      finalArray.push(tempArray[t]);
    }
  }
    }


  
  //Finalize checkVowel and checkCluster
if(checkVowel()){
  str = finalArray.toString();
}
  else{
    checkCluster();
    if(finalArray.length==1){
    str =newArray.join('')+finalArray[0]+"ay";
      }
    if(finalArray.length>1){
      newArray.splice(newArray.indexOf(finalArray[0]), finalArray.length-1);
      str =newArray.join('')+finalArray.join('')+"ay";
    }
   }

  
  return str;
}

translatePigLatin("glove");
