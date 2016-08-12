function reverseString(str) {
  var oldarr=[];
  oldarr =str.split('');
  var newarr=[];
  newarr=oldarr.reverse();
   str = newarr.join('');
  return str;
}

reverseString("hello");
