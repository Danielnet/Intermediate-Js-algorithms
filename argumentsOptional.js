//Arguments Optional
//Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
function addTogether() {

  var args = [];
    for (let y of arguments) {
      args.push(y);
  }
  
 
  function checkIfNumber(arg){
  return typeof arg==="number";
 }


     if(args.length===2){
       if(checkIfNumber(args[0]) && checkIfNumber(args[1])){
        return args[0]+args[1];
       }
        return undefined;
  }
else
       if(checkIfNumber(args[0])){
       return function(arg2){
         if(!checkIfNumber(arg2)){
           return undefined;
           }
         else
           return arg2+args[0];
          };
      }
   else
        return undefined;
}

//addTogether(2)(3);
