
function getIndexToIns(arr, num) {
  arr.sort(function(a,b){
    return a-b;
  });
  for(var i=0;i<arr.length;i++){
    if(num<=arr[i]){
      return arr.indexOf(arr[i]);
    }
  }return arr.length;
 
}

getIndexToIns([40, 60], 50);
