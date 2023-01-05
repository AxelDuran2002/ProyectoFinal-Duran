//CICLO

for(let i = 0; i < 3; i++){
    const nombre = prompt("Por favor, ingrese su nombre")
    const edad = prompt("Ingrese su edad")
    const mesNacimiento = prompt("Ingrese su mes de nacimiento")
    const anioNacimiento = prompt("Ingrese su año de nacimiento")

    console.log("La edad del estudiante " + nombre + " es " + edad + " y nació en " + mesNacimiento + " de " + anioNacimiento)
}

//CONDICIONAL

let alumno = prompt("Ingrese su nombre")
let nota1 = parseInt(prompt("Ingrese nota 1"))
let nota2 = parseInt(prompt("Ingrese nota 2"))
let nota3 = parseInt(prompt("Ingrese nota 3"))

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