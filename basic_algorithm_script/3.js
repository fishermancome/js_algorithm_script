function palindrome(str) {
  var re=/[^a-zA-Z\d]+/ig;
  str = str.replace(re,"");
  var arr=[];
  arr = str.toLowerCase().split("");
  var newarr=[];
  newarr=arr.reverse();
  var newstr = newarr.join("");
  if(str.toLowerCase() ==newstr)
  {
    return true;
  }
  else{
    return false;
  }
}



palindrome("eye");
palindrome("_eye");
palindrome("A man, a plan, a canal. Panama");
palindrome("0_0 (: /-\ :) 0-0");
palindrome("five|\_/|four");