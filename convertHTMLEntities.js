//Convert HTML Entities
//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {

   var regExpObjects = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "\'": "&apos;"
  };
  
   for(var i in regExpObjects){
str = str.replace(new RegExp(i, 'g'),regExpObjects[i]);
  }
  


 return str;
}

convertHTML('Stuff in "quotation marks"');