function truthCheck(arr, pre) {
  var sum=0;
 for(var i=0;i<arr.length;i++){
   if(Boolean(arr[i][pre])){
     sum +=1;
   }
   else {
     sum +=0;
   }
 }
  if(sum===arr.length){
    return true;
  }
  else{
    return false;
  }
    
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
