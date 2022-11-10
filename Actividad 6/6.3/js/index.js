let jugar = function(){
    let rdo = document.getElementById("rdo");
    rdo.innerHTML = `<h3>${euromillon()}</h3>`;
}

function euromillon(){
    let comb = " ";
    for(let i=0; i<5; i++){
        //Se suma un 1 para que los números sean del 1 al 50, ya que si no solo obtendriamos del 0 al 49 con el (Math.random()*50). Math.random() devuelve un número del 0 al 1, sin incluir el 1.
        let valor = 1 + parseInt(Math.random()*50);
        /* se comprueba si el aleatorio generado ya existe en la cadena que se está generando en cada paso del bucle. Si ya existe se vuelve a lanzar uno nuevo*/
        while (comb.indexOf(" " + valor + " ")!=-1) {
            valor = 1 + parseInt(Math.random()*50);
        }
        comb += valor + " ";
    }

    let estrellas = "";

    for(let i=0; i<2; i++){
        let valor = 1 + parseInt(Math.random()*12);
        while (estrellas.indexOf(" " + valor + " ")!=-1){
            valor = 1 + parseInt(Math.random()*12);
        }
        estrellas += valor + " ";
    }
    
    return comb + " : " + estrellas;
}