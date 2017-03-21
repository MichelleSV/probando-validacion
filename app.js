var soloLetras = function(evento){
	evento.preventDefault();
	var ascii = evento.keyCode;
	console.log(ascii);
	if (ascii<97 || ascii>122){
		console.log("me surro tu if");
		return false;
	}
	else{
		return true;
	}
}
document.getElementById("prueba").addEventListener("keypress",soloLetras);
