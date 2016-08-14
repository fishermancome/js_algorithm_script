
function translatePigLatin(str) {
 var index;
  for(var i=0;i<str.length;i++){
    if(str.charAt(i).match(/[aeiou]/g)){
       index = i;
       break;
    }
  }
  
  if(index===0){
    return str+"way";
  }
  else{
    return str.substr(index)+str.substr(0,index)+"ay" ;
  }
  
}

translatePigLatin("glove");
