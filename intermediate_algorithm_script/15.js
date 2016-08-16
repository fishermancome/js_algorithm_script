function gcd(a,b){
  if(a%b===0){
    return b;
  }
  else{
    return gcd(b,a%b);
  }
}
function lcm(a,b){
  return a*b/gcd(a,b);
}
function smallestCommons(arr) {
  var min=Math.min.apply(null,arr);
  var max=Math.max.apply(null,arr);
  var newarr=[];
  for(var i=min;i<=max;i++){
    newarr.push(i);
  }
  return newarr.reduce(function(prev,curr){
    return lcm(prev,curr);
  });
}

smallestCommons([8,3]);