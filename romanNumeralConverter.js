//Roman Numeral Converter
//Convert the given number into a roman numeral.
function convertToRoman(num) {
  
  var romans = ["I", "V", "X", "L", "C", "D", "M",];
  var newArr=[];
  var combArr=[];
  
  
  //turn "num" into array
  var x = Array.from(num.toString());
  for(i=0;i<x.length;i++){
      var exp = (x[i]*(Math.pow(10, x.length-(i))))*0.1;
      newArr.push(exp);
  }
  var y= newArr.length;

  
  //main convert function
  for(index =0 ;index<=y+2;index++){
   var counter=0;
    var times=2;
    
      if(y==0){
   counter= newArr[index];
    y--;
  }
  if(y==1){
   counter= newArr[index];
    y--;
  }
  if(y==2){
   counter= newArr[index]/10;
    y--;
  }
  if(y==3){
   counter= newArr[index]/100;
    y--;
  }
  if(y==4){
   counter= newArr[index]/1000;
    y--;
  }


    switch(counter) {
      case 1:
        combArr.push(romans[0+y*times]);//I    //XI
        break;
      case 2:
        combArr.push(romans[0+y*times].concat(romans[0+y*times]));//II    //XII
        break;
      case 3:
        combArr.push(romans[0+y*times].concat(romans[0+y*times]).concat(romans[0+y*times]));//III    //XIII
        break;
      case 4:
        combArr.push(romans[0+y*times].concat(romans[1+y*times]));//IV      //XL
        break;
      case 5:
        combArr.push(romans[1+y*times]);//V    //X
        break;
      case 6:
        combArr.push(romans[1+y*times].concat(romans[0+y*times]));//VI    //XI
        break;
      case 7:
        combArr.push(romans[1+y*times].concat(romans[0+y*times]).concat(romans[0+y*times]));//VII    //XII
        break;
      case 8:
        combArr.push(romans[1+y*times].concat(romans[0+y*times]).concat(romans[0+y*times]).concat(romans[0+y*times]));//VIII  //XIII
        break;
      case 9:
        combArr.push(romans[0+y*times].concat(romans[2+y*times]));//IX    //XIX
      }
    
    
  }
  

//turns array to string and replaces "," with "" between elements
  var final = combArr.toString().replace(",", "").replace(",", "").replace(",", "");
console.log(newArr,+" " +num," " +final);

 return final;
}

convertToRoman(1004);
