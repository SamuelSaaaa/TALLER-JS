const curso = {
  titulo: "JavaScript",
  duracion: 40,
  temas: ["Funciones", "Objetos", "Asincronía"]
};

const { titulo, duracion, temas } = curso;
const [primerTema] = temas;

console.log(titulo); 
console.log(duracion);    
console.log(primerTema); 