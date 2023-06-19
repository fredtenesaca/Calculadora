const funcionPredeterminada = () => {
    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
 
      });

    // Código de la función predeterminada
    console.log("¡Función predeterminada invocada!");
  };
  
  // Invocar la función predeterminada
  funcionPredeterminada();
  