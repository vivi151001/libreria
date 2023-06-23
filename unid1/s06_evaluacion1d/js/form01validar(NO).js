const fnValidar01 = () => 
{
	let xTexto = document.getElementById("txtTexto").value;
    if(xTexto=="" ||/^\s+$/.test(xTexto)) {
        alert("Falta texto....");
        return false;
    }
    let xNumero = document.getElementById("txtNumero").value;
    if (xNumero==""){
        alert("Falta numero....");
        return false;
    }
    let xNumero1 = document.getElementById("txtNumero1").value;
    if(xNumero1=="") {
        alert("Falta numero....");
        return false;
    }
    return true;

}