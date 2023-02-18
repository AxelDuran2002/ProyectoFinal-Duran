class Datos {
    constructor(nombre, nota1, nota2, nota3, asignatura, promedio) {
        this.nombre = nombre;
        this.nota1 = parseInt(nota1);
        this.nota2 = parseInt(nota2);
        this.nota3 = parseInt(nota3);
        this.promedio = parseInt(promedio);
        this.asignatura = asignatura;
    }
    calcularNota() {
        this.promedio = (this.nota1 + this.nota2 + this.nota3) / 3;
        return this.promedio
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

const calif1 = document.getElementById("calificacion1")
const calif2 = document.getElementById("calificacion2")
const calif3 = document.getElementById("calificacion3")

const formAgregarDato = document.getElementById("agregarDato");
formAgregarDato.addEventListener("submit", (event) => {

    event.preventDefault();

    const nombre = inputNombreDato.value;
    const asignatura = inputAsignaturaDato.value;

    const nota1 = calif1.value
    const nota2 = calif2.value
    const nota3 = calif3.value

    inputNombreDato.value = "";
    calif1.value = "";
    calif2.value = "";
    calif3.value = "";
    inputAsignaturaDato.value = "";

    const alumno = new Datos(nombre, nota1, nota2, nota3, asignatura)
    alumno.calcularNota()

    datos.push(alumno);

    renderizarTabla();

    localStorage.setItem( "nombre", JSON.stringify( alumno )   );

    swal({
        title: "Genial",
        text: "Se ha realizado su promedio correctamente",
        icon: "success",
        button: "Volver"
    })
})

fetch("./json/datos.json")
.then( (response) => {
    return response.json();
})
.then( (responseDatos) => {
    renderizarTabla(responseDatos);
})