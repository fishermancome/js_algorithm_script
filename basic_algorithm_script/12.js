function mutation(arr) {
  var fir = arr[0].toLowerCase();
  var sec = arr[1].toLowerCase();
  var secarr=sec.split("");
  for(var i=0;i<secarr.length;i++){
    if(fir.indexOf(secarr[i])==-1){
      return false;
    } 
  }return true;
}

mutation(["hello", "hey"]);
