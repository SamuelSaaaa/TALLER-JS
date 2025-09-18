const usuario = {
    nombre: "Ana",
    edad: 28,
    correo: "ana@email.com"
};

const usuarioJSON = JSON.stringify(usuario);

localStorage.setItem("usuario", usuarioJSON);

const usuarioRecuperado = JSON.parse(localStorage.getItem("usuario"));

console.log(usuarioRecuperado);