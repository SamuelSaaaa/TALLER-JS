const config = { modo: "oscuro", idioma: "es" };
const nuevaConfig = { ...config, fuente: "Arial" };


function promedio(...numeros) {
  return numeros.reduce((a, b) => a + b, 0) / numeros.length;
}