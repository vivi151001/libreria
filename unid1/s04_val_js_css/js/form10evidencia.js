const fnValidar10 = () => {

    let xTexto = document.getElementById("txtNombre").value;
    if (xTexto=="" || /^\s+$/.test(xTexto)){
        alert("Escriba su Nombre y Apellido por favor");
        return false;
    }
    let xNumero = document.getElementById("txtEdad").value;
    if(xNumero==""){
        alert("Falta su edad");
        return false;
    }
    return true;

    let elementoPref = document.getElementsByName("chkPre");
	let valorElegidoPreferencia="";
	let elegioPreferencia=false;
	for(let i=0; i<elementoPref.length; i++){
		if(elementoPref[i].checked){
			valorElegidoPreferencia=elementoPref[i].value;
			elegioPreferencia = true
		}
	}

    if(!elegioPreferencia){
		alert("Elija una Preferencia");
		return false;
	} else{
		alert("Su preferencia elegida es "+valorElegidoPreferencia );
	}
    
}