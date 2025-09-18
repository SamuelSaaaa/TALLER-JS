const posts = [
    { id: 1, titulo: "Primer post", contenido: "Contenido del primer post" },
    { id: 2, titulo: "Segundo post", contenido: "Contenido del segundo post" }
];

function obtenerPosts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(posts);
        }, 500);
    });
}

function agregarPost(post) {
    return new Promise((resolve) => {
        setTimeout(() => {
            posts.push(post);
            resolve(post);
        }, 500);
    });
}

function buscarPostPorId(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const post = posts.find(p => p.id === id);
            if (post) {
                resolve(post);
            } else {
                reject("Post no encontrado");
            }
        }, 500);
    });
}