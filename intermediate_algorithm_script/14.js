function prime(prime){
  if(prime===2){
    return true;
  }
  if(prime===3){
    return true;
  }
  for(var i=2;i<=Math.sqrt(prime);i++){
    if(prime%i===0){
      return false;
    }
  }
  return true;
}
var sum=0;
function sumPrimes(num) {
  for(var i=2;i<=num;i++){
    if(prime(i)){
      sum+=i;
    }
  }
  return sum;
}

sumPrimes(977);



