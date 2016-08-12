function titleCase(str) {
  var arr = str.split(" ");
  var newarr=[];
  var newarr2=[];
  for (var i=0;i<arr.length;i++)
    {
      newarr.push(arr[i].toLowerCase());
    }
  for (var j=0;j<newarr.length;j++){
      newarr2.push(arr[j][0].toUpperCase()+newarr[j].slice(1));
  }
  str=newarr2.join(" ");
  return str;
}

titleCase("I'm a little tea pot");
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
