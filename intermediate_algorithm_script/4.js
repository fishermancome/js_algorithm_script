function whatIsInAName(collection, source) {
 
  var arr = [];
  
  var searchkeys=Object.keys(source);
  var flag=false;
  collection.forEach(function(object){
    searchkeys.forEach(function(searchkey){
      if(object[searchkey]===source[searchkey])
        {
          flag=true;
        }
      else{
        flag=false;
      }
    });
    if(flag===true)
    {
      arr.push(object);
    }
  });
  
 
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
