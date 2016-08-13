function destroyer(arr) {
  var del=arguments;
  delete del["0"];
  return arr.filter(function(a){
    for(var e in del){
      if( del[e]==a){
        return false;
      }
    }
    return true;
  });
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
