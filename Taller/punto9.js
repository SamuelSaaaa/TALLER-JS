function operar(a, b, callback) {
	return callback(a, b);
}

function sumar(x, y) { return x + y; }
function restar(x, y) { return x - y; }
function multiplicar(x, y) { return x * y; }


console.log(operar(5, 3, sumar));        
console.log(operar(5, 3, restar));       
console.log(operar(5, 3, multiplicar));  