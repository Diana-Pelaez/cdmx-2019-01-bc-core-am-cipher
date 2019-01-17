// Llama los ID de las "Cajas de texto y botones" del html.
let btnEncode = document.getElementById("btnEncode");
let btnDecode = document.getElementById("btnDecode");
let btnLimpiar = document.getElementById("botonLimpiar");
// let salida = document.getElementById("salida");

//llama al botón Codificar
btnEncode.addEventListener("click", encode);
function encode() {
	let offset = document.getElementById("offset").value;
	let mensaje = document.getElementById("mensaje").value;
	document.getElementById("Miresultado").innerHTML = window.cipher.encode(offset,mensaje);  
}
//llama al botón Decodificar

btnDecode.addEventListener("click", decode);
function decode() {
	let offset = document.getElementById("offset").value;
	let mensaje = document.getElementById("mensaje").value
	document.getElementById("Miresultado").innerHTML = window.cipher.decode(offset,mensaje);  
}
//llama al botón Limpiar
btnLimpiar.addEventListener("click", limpiar);  
function limpiar() {
	document.getElementById("mensaje").value = "";
	document.getElementById("convertir").value = "";
	document.getElementById("salida").value = "";
}




// IMPORTANTE: 
// document.getElementById("keyHtml")==> Captura la caja de texto
// .value   ==> captura el valor de la caja de texto.
// salTexto ==> es variable de salida, no tiene un valor para capturar.
// el .value de salTexto ==> es igual al resultado que deseo mostrar. 
// --------------------------------------------------------





// document.getElementById("btnCifrar").addEventListener("click", ()=>{
//     var offsetElegido=document.getElementById("offset").value
//     var mensajeVecino=document.getElementById("mensaje").value

// cipher.encode(offsetElegido,mensajeVecino);

// })

// document.getElementById("btnDecifrar").addEventListener("click", ()=>{
//     var offsetElegido=document.getElementById("offset").value
//     var mensajeVecino=document.getElementById("mensaje").value
    
// cipher.decode(offsetElegido,mensajeVecino),
// })

