function spinalCase(str) {
  
  return str.replace(/([a-z])(?=[A-Z])/g,"$1 ").replace(/[^a-zA-Z]/ig,'-').toLowerCase();
}

spinalCase('thisIsSpinalTap');
spinalCase("Teletubbies say Eh-oh");
spinalCase("AllThe-small Things");
