function fnValidar05()
{
	var xTurno = document.getElementById("lstTurno").value;
    if(xTurno=="")
    {
        alert("Seleccione Turno...");
        return false;
    }
    var xResult = document.getElementById("txtResult").value;
    if(xResult=="" || xResult==0)
    {
        alert("Revice.... Resultado es ¿0 o Vacio?");
        return false;
    }
    return true;
}

function verConteo(turno, mtzAlumnos)
{
	contadorTurno=0;
    if(mtzAlumnos.length > 0){
        mtzAlumnos.forEach(element => {
            if(element[3]==turno){
                contadorTurno++;
            }
        });
    } 
    document.getElementById("txtResult").value = contadorTurno;
}