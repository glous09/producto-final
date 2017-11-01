
var text = prompt("Ingresa una frase");

//Funcion para validar que sea strig y no numeros
function valideText(text){

for(var i=0; text.length; i++ ){
  if(text.chartAt(i)< = 0 && text.chartAt(i)<=9){

  return true;
 }
}
  return false;

  //Creacion de funcion de cifrado

function cipher(text, desplace){
  if(valideText(tex)){
    ("Frase no valida!, solo strings");
    return " ";
  }
  var encode = "";
  desplace = % 26;

  //Se recorre el texto asignado
  for (var i = 0; i < text.length; i++) {
    if (text.charAt(i) >= 'a' && text.charAt(i) <= 'z') {
      if (String.fromCharCode(text.charCodeAt(i) + desplace) > 'z') {
        console.log(String.fromCharCode(text.charCodeAt(i) + desplace));
        velidText += String.fromCharCode(text.charCodeAt(i) + desplace - 26);
      } else {
        valideText += String.fromCharCode(text.charCodeAt(i) + desplace);
      } else if (text.charAt(i) >= 'A' && text.charAt(i) <= 'Z') {
           if (String.fromCharCode(text.charCodeAt(i) + desplace) > 'Z') {
             valideText += String.fromCharCode(text.charCodeAt(i) + desplace - 26);
           } else {
             velidText += String.fromCharCode(text.charCodeAt(i) + desplace);

         } else {
           valideText += text.charAt(i);
         }

       return valideText;
     }
}
