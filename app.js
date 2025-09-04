let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
//let maximosIntentos = 2;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}    

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(typeof(numeroDeUsuario));
    //console.log(numeroSecreto);
    //console.log(typeof(numeroSecreto));   
    //console.log(numeroDeUsuario);   
    //console.log(numeroDeUsuario === numeroSecreto);
    //console.log(intentos);
    if(numeroDeUsuario === numeroSecreto) { 
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
  intentos++;

  console.log("Intentos:", intentos, "Maximos Intentos:", maximosIntentos); // Agrega esta línea
if (intentos > maximosIntentos) {
} else {    
    asignarTextoElemento('p', `Llegaste al número máximo de ${maximosIntentos} intentos`);
    // Aquí podrías agregar un mensaje si quieres mostrar algo mientras no se alcanza el límite
}
      limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'ya se sortearon todos los números posibles')
    } else {
        //Si el numero generado esta incluido en la lista
   if(listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();    
   } else {
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
   }
    }

    }

function condicionesIniciales() {
    asignarTextoElemento("h1","Juego del número secreto");
    asignarTextoElemento("p",`Indica un número del 1 al ${numeroMaximo}`); 
    numeroSecreto = generarNumeroSecreto();
    intentos = 1; 
}


function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja(); 
    // indicar mensaje de intervalo de números
    // Generar el número aleatorio
    // Inicializar el número de intentos
    condicionesIniciales();
    // Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');    
    
}

condicionesIniciales();


