function fnValidar02()
{
    let xNombre = document.getElementById("txtNombres").value;
    if(xNombre=="" ||/^\s+$/.test(xNombre)) {
        alert("Falta Nombres....");
        return false;
   
    }

    let xApellido = document.getElementById("txtApellidos").value;
    if(xApellido=="" ||/^\s+$/.test(xApellido)) {
        alert("Falta Apellidos....");
        return false;
   
    }
    
    let xDireccion = document.getElementById("txtDireccion").value;
    if(xDireccion=="" ||/^\s+$/.test(xDireccion)) {
        alert("Falta la Direccion....");
        return false;
   
    }

    let xEdad = document.getElementById("txtEdad").value;
    if (xEdad==""){
        alert("Falta Edad....");
        return false;
   
    }
   
    let xFecNac = document.getElementById("fecNac").value;
    if (xFecNac==""){
        alert("Falta Fecha de Nacimiento....");
        return false;
   
    }
    

    let xGenero = document.getElementById("rdGenero").value;
    if (xGenero=="rdGenero"){
        alert("Falta Genero....");
        return false;
   
    }

    let xEstado = document.getElementById("lstEstado").value;
    if (xEstado==""){
        alert("Falta Estado....");
        return false;
   
    }
    return true
    
}