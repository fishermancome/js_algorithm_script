function sumFibs(num) {
  var fib = [1, 1];
  for(var i = fib.length; i <= num; i++) {
      fib[i] = fib[i-2] + fib[i-1];
  }
  return fib.filter(function(n){
    return n % 2 && n <= num;
  }).reduce(function(prev,curr){
    return prev+curr;
  },0);
}

sumFibs(75024);
