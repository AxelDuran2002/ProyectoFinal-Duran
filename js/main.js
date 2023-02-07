let nota1;
let nota2;
let nota3;

function calcularNota() {
    resultado = (nota1 + nota2 + nota3)/3;
}

class Datos {
    constructor(nombre, nota1, nota2, nota3, asignatura, promedio) {
        this.nombre = nombre;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.asignatura = asignatura;
        this.promedio = promedio;
    }
}

function renderizarTabla () {
    const tbody = tabla.querySelector("tbody");
    tbody.innerHTML = "";

    for(const dato of datos) {
        const tr = document.createElement("tr");

        const tdNombre = document.createElement("td");
        tdNombre.innerHTML = `${dato.nombre}`;

        const tdAsignatura = document.createElement("td");
        tdAsignatura.innerHTML = `${dato.asignatura}`;

        const tdPromedio = document.createElement("td");
        tdPromedio.innerHTML = `${dato.promedio}`;

        tr.append(tdNombre);
        tr.append(tdAsignatura);
        tr.append(tdPromedio);

        tbody.append(tr);
    }
}


const datos = [];

const tabla = document.getElementById("tabla");
const inputNombreDato = document.getElementById("nombreDato");
const inputAsignaturaDato = document.getElementById("select1");
const inputPromedioDato = document.getElementById("promedioDato");

const formAgregarDato = document.getElementById("agregarDato");
formAgregarDato.addEventListener("submit", (event) => {

    event.preventDefault();

    const nombre = inputNombreDato.value;
    const asignatura = inputAsignaturaDato.value;
    const promedio = inputPromedioDato.value;

    inputNombreDato.value = "";
    inputAsignaturaDato.value = "";
    inputPromedioDato.value = "";

    datos.push(new Datos(nombre, nota1, nota2, nota3, asignatura, promedio));

    renderizarTabla();
})


/*let alumno;
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
console.log(aprobados);*/