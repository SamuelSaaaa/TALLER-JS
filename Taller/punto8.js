const usuarios = [
    { id: 1, nombre: "Ana" },
    { id: 2, nombre: "Luis" },
    { id: 3, nombre: "Marta" }
];

function getUsuario(id) {
    const usuario = usuarios.find(u => u.id === id);
    return usuario || {};

}
console.log(getUsuario(2));
console.log(getUsuario(5));