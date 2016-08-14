function check(arr,ele){
  for(var i=0;i<arr.length;i++){
    if(arr[i]===ele){
      return true;
    } 
  }return false;
}
function diffArray(arr1, arr2) {
  var newArr = [];
   for(var i=0;i<arr1.length;i++){
     if(!check(arr2,arr1[i])){
       newArr.push(arr1[i]);
     }
   }
   for(var i=0;i<arr2.length;i++){
     if(!check(arr1,arr2[i])){
       newArr.push(arr2[i]);
     }
   }
   
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
