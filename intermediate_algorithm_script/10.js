function uniteUnique(arr) {

  arr = Array.prototype.slice.call(arguments);
  arr = arr.reduce(function(prev,curr){
    return prev.concat(curr);
  });
  return arr.filter(function(item,pos){
    return arr.indexOf(item)===pos; //filter repeated elements
  });
}



uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);