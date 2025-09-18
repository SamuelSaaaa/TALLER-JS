let producto = [
    { id: 1, nombre: "Laptop" },
    { id: 2, nombre: "Mouse" },
    { id: 3, nombre: "Teclado" }
];

function getProducto(id) {
    return new Promise((resolve, reject) => {
        const producto = productos.find(p => p.id === id);
        if (producto) {
            resolve(producto);
        } else {
            reject(new Error("Producto no encontrado"));
        }
    });
}