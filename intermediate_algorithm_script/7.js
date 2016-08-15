function pairElement(str) {
  var pairs = {
    "A":"T",
    "T":"A",
    "C":"G",
    "G":"C"
  };
  var arr =[];
  for(var i= 0;i<str.length;i++){
    arr.push([str[i],pairs[str[i]]]);
  }
  return arr;
}

pairElement("GCG");
