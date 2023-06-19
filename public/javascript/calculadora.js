const funcionPredeterminada = () => {
    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const valorPorHoraInput = document.getElementById('valorPorHora');
        const horas1Input = document.getElementById('horas1');
        const horas2Input = document.getElementById('horas2');

        const horas3Input = document.getElementById('horas3');
        const horas4Input = document.getElementById('horas4');



        const valorTotalElemento = document.getElementById('valorTotal');

        const valorPorHora = parseFloat(valorPorHoraInput.value);
        const horas1 = parseFloat(horas1Input.value);
        const horas2 = parseFloat(horas2Input.value);

        const horas3 = parseFloat(horas3Input.value);
        const horas4 = parseFloat(horas4Input.value);

        const valorTotal = valorPorHora * (horas1 + horas2 + horas3 + horas4);

        valorTotalElemento.textContent = valorTotal.toFixed(2);


    });


};
  
  // Invocar la función predeterminada
  funcionPredeterminada();
  