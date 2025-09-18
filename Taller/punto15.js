class Tarea {
    constructor(titulo, estado = "pendiente") {
        this.titulo = titulo;
        this.estado = estado;
    }

    toggleEstado() {
        this.estado = this.estado === "pendiente" ? "completada" : "pendiente";
    }
}

const tarea1 = new Tarea("Aprender programacion");

console.log(tarea1);
tarea1.toggleEstado();
console.log(tarea1);