function repeatStringNumTimes(str, num) {
  var newstr ="";
  if(num>0){
    for (var i=1;i<=num;i++)
      {
        newstr =newstr+ str;
      }
    return newstr;
  }
  else{
    return newstr;
  }
  
}

repeatStringNumTimes("abc", 3);
