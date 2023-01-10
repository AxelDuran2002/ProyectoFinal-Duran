let alumno;
let nota1;
let nota2;
let nota3;

do{
    alumno = prompt("Ingrese nombre")
}while(!isNaN(alumno))

do{
    nota1 = parseInt(prompt("Ingrese la nota 1"))
}while(isNaN(nota1))

do{
    nota2 = parseInt(prompt("Ingrese la nota 2"))
}while(isNaN(nota2))

do{
    nota3 = parseInt(prompt("Ingrese la nota 3"))
}while(isNaN(nota3))


function calcularNota (alumno, nota1, nota2, nota3){
    let sumaNota = nota1 + nota2 + nota3
    let promedio = sumaNota/3

    if (promedio >= 7){
        alert("El estudiante " + alumno + " ha promocionado con " + promedio);
    }else if (promedio >= 4){
        alert("El estudiante " + alumno + " deberá rendir final por sacar " + promedio);
    }else{
        alert("El estudiante " + alumno + " va a tener que recursar");
    }
}

calcularNota(alumno, nota1, nota2, nota3)