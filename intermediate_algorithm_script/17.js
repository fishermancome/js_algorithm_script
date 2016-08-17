function dropElements(arr, func) {
  
  var index;
  for (var i=0;i<arr.length;i++){
    if(func(arr[i])){
      index=arr.indexOf(arr[i]);
      return arr.slice(index);
      break;
    }
  }
  return [];
}

dropElements([1, 2, 3], function(n) {return n < 3; });
