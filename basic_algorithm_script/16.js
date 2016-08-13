function rot13(str) { 
  var arr=[];
  for (var i=0;i<str.length;i++)
    {
      arr.push(str.charCodeAt(i));
    }
  for (var i=0;i<arr.length;i++);{
    if (arr[i]>=78 && arr[i]<=90)
      {
        arr[i] -= 13;
      }
    else if(arr[i]>=65 && arr[i]<=77)
      {
        arr[i] += 13;
      }
    else{
      arr[i] =arr[i];
    }
  }
  for( i=0;i<arr.length;i++){
    arr[i] = String.fromCharCode(arr[i]);
  }
  return str=arr.join("");
}


rot13("SERR PBQR PNZC");
