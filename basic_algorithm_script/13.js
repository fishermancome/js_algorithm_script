
function bouncer(arr) {
  var newarr =[];
  return arr.filter(function(val){
   if(Boolean(val))
      {
        return newarr.push(val);
      }
  });
}

bouncer([7, "ate", "", false, 9]);
