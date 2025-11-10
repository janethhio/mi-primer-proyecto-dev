function sumar(a, b) { 
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "Error: no se puede dividir entre cero";
  }
  return a / b;
}

function seno (a) {
  return Math.sin (a);
}

function coseno (a) {
  return Math.cos (a);
}

function tangente (a) {
  return Math.tan (a);
}
