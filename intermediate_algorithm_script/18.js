function steamrollArray(arr) {
  var newarr=[];
  for(var i=0;i<arr.length;i++){
    if (Array.isArray(arr[i])===true){
      var temparr=steamrollArray(arr[i]);
      for(var j in temparr){
        newarr.push(temparr[j]);
        }
      }
    else{
         newarr.push(arr[i]);
      }
  }
  return newarr;
}

steamrollArray([1, [2], [3, [[4]]]]);

/*function steamrollArray(arr) {
  return [].concat(...arr.map(s => Array.isArray(s) ? steamrollArray(s) : s));
}

steamrollArray([1, [2], [3, [[4]]]]);
*/