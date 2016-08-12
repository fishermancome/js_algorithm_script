function findLongestWord(str) {
  var arr=[];
  var arr_num=[];
  arr = str.split(" ");
  for (var i=0;i<arr.length;i++){
    arr_num.push(arr[i].length);
  }
  return Math.max.apply(null,arr_num);
}

findLongestWord("The quick brown fox jumped over the lazy dog");