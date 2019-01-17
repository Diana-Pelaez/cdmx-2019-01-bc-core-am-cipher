window.cipher = {

encode: (offset, string) => {

    let resultado = '';
    for (let i = 0; i < string.length; i++) {
      let convAscii = string.charCodeAt(i);
      
      if (convAscii >= 65 && convAscii <= 90) {
        resultado += String.fromCharCode((convAscii - 65 + parseInt(offset)) % 26 + 65); // Mayus Ascii: 65 - 90
      } else if (convAscii >= 97 && convAscii <= 122) {
        resultado += String.fromCharCode((convAscii - 97 + parseInt(offset)) % 26 + 97); // Minus Ascii: 97 - 122
      } else {                            
        resultado += string[i];     // concatena los números, signos, espacios y caracteres especiales
      }
    }
    return resultado;
  },
  
  
decode: (offset, string) => {
    let resultado = ''; // Deja el convertir = parseInt(offset);
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
  
  // window.cipher = {    //"cipher" es el "nombre" del objeto, puede CAMBIAR.
  //   encode,
  //   decode,
  
  //   createCipherWithOffset: (offset) => ({  //el offset 
  //     encode: string => encode(offset, string), // El "nombre" del 1er encode puede cambiar. Le puse encode, porque así lo pide el ejercicio
  //     decode: string => decode(offset, string), // El "nombre" del 1er decode puede cambiar. Le puse decode, porque así lo pide el ejercicio
  // }),
  };
