const funcionPredeterminada = () => {
    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
 
      });

    
  };
  
  // Invocar la función predeterminada
  funcionPredeterminada();
  