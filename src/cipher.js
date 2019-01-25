 window.cipher = {

encode: (offset, string) => { //asigna los parámetros offset (desplazamiento) y string(mensaje)

    let resultado = ""; // "let" para definir la variable ´resultado´)
    for (let i = 0; i < string.length; i++) { //ejecutar ciclo for, mientras que:...  (i++ (Incrementa en una unidad (0,1,2,..))   
        let convAscii = string.charCodeAt(i); //se declara que la funcion convAscii es igual al CharCodeAt(devuelve el valor unicode de la cadenade texto) del string ingresado. iniciando en "0" o sea "i").

// &&= and /  
      if (convAscii >= 65 && convAscii <= 90) {     //si:(convAscii es mayor o igual a 65 "y" convAscii es menor o igual a 90) 
        resultado += String.fromCharCode((convAscii - 65 + parseInt(offset)) % 26 + 65);   //se suma   Mayus Ascii: 65 - 90
      } else if (convAscii >= 97 && convAscii <= 122) { 
        resultado += String.fromCharCode((convAscii - 97 + parseInt(offset)) % 26 + 97); // Minus Ascii: 97 - 122
      } else {                            
        resultado += string[i]; // concatena los números, signos, espacios y caracteres especiales
      }
    }
    return resultado;
  },
  
  
decode: (offset, string) => {

    let resultado = ""; // Deja el convertir a entero = parseInt (offset);
    for (let i = 0; i < string.length; i++) {
      let convAscii = string.charCodeAt(i);
      if (convAscii >= 65 && convAscii <= 90) {
        resultado += String.fromCharCode((convAscii - 90 - parseInt(offset)) % 26 + 90);
      } else if (convAscii >= 97 && convAscii <= 122) {
        resultado += String.fromCharCode((convAscii - 122 - parseInt(offset)) % 26 + 122);
      } else {
        resultado += string[i];
      }
    }
    return resultado;
}

}
