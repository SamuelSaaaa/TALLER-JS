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


function obtenerPostPorId(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const post = posts.find(p => p.id === id);
            if (post) {
                resolve(post);
            } else {
                reject(new Error("Post no encontrado"));
            }
        }, 500);
    });
}

function agregarPost(nuevoPost) {
    return new Promise((resolve) => {
        setTimeout(() => {
            nuevoPost.id = posts.length ? posts[posts.length - 1].id + 1 : 1;
            posts.push(nuevoPost);
            resolve(nuevoPost);
        }, 500);
    });
}