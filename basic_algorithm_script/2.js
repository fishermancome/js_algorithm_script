function factorialize(num) {
  var s=1;
  for(var i =1;i<=num;i++){
    s *=i;
  }
  return s;
}

factorialize(5);