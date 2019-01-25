// Llamando a los input del html a través de su "Id" (en este caso, los botones)

let btnEncode = document.getElementById("btnEncode"); // Usé "let" para definir las variables de los botones (pues son las que van a accionar las funciones)
let btnDecode = document.getElementById("btnDecode");
let btnLimpiar = document.getElementById("btnLimpiar");
let cajaResultado=document.getElementById("cajaResultado");


//llama al botón "btnEncode"(cifrar)

btnEncode.addEventListener("click", encode); //Usé un "manejador de evento" que al dar "click" en el objeto=(btnEncode) manda a llamar a la funcion `encode´
function encode(){
	cajaResultado.classList.remove("ocultar");
	let offset = document.getElementById("offset").value; //toma valor de la variable "offset"
	let mensaje = document.getElementById("mensaje").value; //toma valor de la variable "mensaje"
	document.getElementById("Miresultado").innerHTML = window.cipher.encode(offset,mensaje); //innerHTML, cambia el resutado por:"la nueva ruta que le dimos (window.cipher...) 
}
//llama al botón "btnDecode" (descifrar)
 
btnDecode.addEventListener("click", decode);
function decode() {
	cajaResultado.classList.remove("ocultar");
	let offset = document.getElementById("offset").value;
	let mensaje = document.getElementById("mensaje").value;
	document.getElementById("Miresultado").innerHTML = window.cipher.decode(offset,mensaje);  
}
//llama al botón Limpiar
btnLimpiar.addEventListener("click", limpiar);  
function limpiar() {
	cajaResultado.classList.add("ocultar");
	document.getElementById("offset").value = "";
	document.getElementById("mensaje").value = "";
	document.getElementById("Miresultado").value = "";
}

