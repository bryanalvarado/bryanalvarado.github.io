
function bigger() {
   let text = document.getElementById("textArea");
   text.style.fontSize = "24pt";
}

function bold() {
   let text = document.getElementById("textArea");
   text.style.fontWeight = "bold";
   text.style.color= "blue";
   text.style.textDecoration= "underline";
}

function boring() {
   let text = document.getElementById("textArea");
   text.style.fontSize = "initial";
   text.style.fontWeight = "normal";
   text.style.color = "black";
   text.style.textDecoration= "none";
}

function moo() {
   let addText = '-Moo',
   text = document.getElementById('textArea');
   text.style.textTransform="uppercase";
   text.value = text.value.split('.').join('') + addText;
}