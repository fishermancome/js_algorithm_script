function convertMap(match){
  return  {
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&apos;",
  }[match];
}
function convertHTML(str) {
  return str.replace(/[&<>'"]/ig,convertMap);
}

convertHTML("Dolce & Gabbana");