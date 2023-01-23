let alumno;
let nota1;
let nota2;
let nota3;
let promedio;

do{
    alumno = prompt("Ingrese nombre")
}while(!isNaN(alumno))

do{
    nota1 = parseInt(prompt("Ingrese la nota 1"))
}while(isNaN(nota1)||!(nota1 > 0 && nota1 < 11))

do{
    nota2 = parseInt(prompt("Ingrese la nota 2"))
}while(isNaN(nota2)||!(nota2 > 0 && nota2 < 11))

do{
    nota3 = parseInt(prompt("Ingrese la nota 3"))
}while(isNaN(nota3)||!(nota3 > 0 && nota3 < 11))


function calcularNota (alumno, nota1, nota2, nota3){
    let sumaNota = nota1 + nota2 + nota3
    promedio = sumaNota/3

    if (promedio >= 7){
        alert("El estudiante " + alumno + " ha promocionado con " + promedio);
    }else if (promedio >= 4){
        alert("El estudiante " + alumno + " deberá rendir final por sacar " + promedio);
    }else{
        alert("El estudiante " + alumno + " va a tener que recursar");
    }
}

const estudiante = []

estudiante.push({
     nombre: alumno,
     nota1: nota1,
     nota2: nota2,
     nota3: nota3,
     promedio: (nota1 + nota2 + nota3) / 3,
});

console.log(estudiante);

calcularNota(alumno, nota1, nota2, nota3);

let aprobados = estudiante.filter(alumno => alumno.promedio >= 7);
console.log(aprobados);