function fnValidar06(turno, mtzAlumnos)
{
	var xTurno = document.getElementById("lstTurno").value;
    if(xTurno=="")
    {
        alert("Seleccion Genero");
        return false;
    }
    var xResult = document.getElementById("txtResult").value;
    if(xResult=="" || xResult==0)
    {
        alert("Revice.... Resultado es 0 o Vacio?");
        return false;
    }
    return true;
}

function verConteo(turno, mtzAlumnos)
{
	contadorTurno=0;
    if(mtzAlumnos.length > 0){
        mtzAlumnos.forEach(element => {
            if(element[4]==turno){
                contadorTurno++;
            }
        });
    } 
    document.getElementById("txtResult").value = contadorTurno;
}

