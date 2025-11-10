// funciones trigonométricas 

function seno(×) {
  return Math.sin(×);
}

function coseno(×) {
  return Math.cos(×);
}

function tangente(×) {
  return Math.tan(×);
}

// Exportar funciones si se usa en otros archivos 
if (typeof module !== "undefined") {
  module.exports = { seno, coseno, tangente };
}
