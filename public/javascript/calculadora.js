let funcionPredeterminada=()=>{
    
    const formulario = document.getElementById('formulario')

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();

        let valorPorHora=0, interfazHoras=0, htmlHoras=0,javascriptHoras=0, cssHoras=0, testingHoras=0, apisHoras=0

        if(parseFloat(document.getElementById('valorPorHora').value)>0){
            valorPorHora=parseFloat(document.getElementById('valorPorHora').value)
        }
        
        if(parseFloat(document.getElementById('interfazHoras').value)>0){
            interfazHoras=parseFloat(document.getElementById('interfazHoras').value)
        }

        if(parseFloat(document.getElementById('htmlHoras').value)>0){
            htmlHoras=parseFloat(document.getElementById('htmlHoras').value)
        }
        
        if(parseFloat(document.getElementById('javascriptHoras').value)>0){
            javascriptHoras=parseFloat(document.getElementById(' javascriptHoras').value)
        }

        if(parseFloat(document.getElementById('cssHoras').value)>0){
            cssHoras=parseFloat(document.getElementById('cssHoras').value)
        }

        if(parseFloat(document.getElementById('testingHoras').value)>0){
            testingHoras=parseFloat(document.getElementById('testingHoras').value)
        }

        if(parseFloat(document.getElementById('apisHoras').value)>0){
            apisHoras=parseFloat(document.getElementById('apisHoras').value)
        }

        resultado=(valorPorHora*interfazHoras)+(valorPorHora*htmlHoras)+(valorPorHora*javascriptHoras)+(valorPorHora*cssHoras)+(valorPorHora*testingHoras)+(valorPorHora*apisHoras)

        document.getElementById('valorTotal').value=resultado
    })

}

funcionPredeterminada();