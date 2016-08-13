function confirmEnding(str, target) {
   var len=target.length;
  if(str.substr(-len)==target){
    return true;
  }
  else {
    return false;
  }
 
}

confirmEnding("Bastian", "n");
