let tareas = [];


function crearTarea(descripcion) {
    const tarea = { id: Date.now(), descripcion, completada: false };
    tareas.push(tarea);
    return tarea;
}

function leerTareas() {
    return tareas;
}

function actualizarTarea(id, nuevaDescripcion) {
    const tarea = tareas.find(t => t.id === id);
    if (tarea) {
        tarea.descripcion = nuevaDescripcion;
        return true;
    }
    return false;
}

function eliminarTarea(id) {
    const index = tareas.findIndex(t => t.id === id);
    if (index !== -1) {
        tareas.splice(index, 1);
        return true;
    }
    return false;
}

crearTarea("Estudiar JavaScript");
crearTarea("Hacer ejercicio");
console.log(leerTareas());
actualizarTarea(tareas[0].id, "Estudiar ES6");
eliminarTarea(tareas[1].id);
console.log(leerTareas());