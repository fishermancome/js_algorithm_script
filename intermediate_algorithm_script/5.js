
function myReplace(str, before, after) {
  if(before.slice(0,1).charCodeAt()>=65&&before.slice(0,1).charCodeAt()<=90)
  {
    after = after[0].toUpperCase()+after.slice(1);
  }
  else{
    after = after;
  }
  return str.replace(before,after);
}

myReplace("This has a spellngi error", "spellngi", "spelling");
