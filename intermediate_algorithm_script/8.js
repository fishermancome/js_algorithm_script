function fearNotLetter(str) {
  for (var i = 0;i<str.length;i++){
    var ele = String.fromCharCode(str.charCodeAt(0)+i);
    if(ele != str[i]){
      letter = String.fromCharCode(str.charCodeAt(i)-1);
      return letter;
    }
  }
}

fearNotLetter("abcdefghjklmno");