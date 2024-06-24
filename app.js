let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById(`valorUsuario`).value);
    
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento(`p`, `Acertaste el Número en ${intentos} ${(intentos === 1) ? `vez` : `veces`}`);
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);
    }else {
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento(`p`, `El número Secreto es Menor`);
        }else{
            asignarTextoElemento(`p`, `El número Secreto es Mayor`);
        }
    }
    intentos++;
    limpiarcaja();
    return;
}
function limpiarcaja(){
    document.querySelector(`#valorUsuario`).value = ``;
}
function condicionesIniciales(){
    asignarTextoElemento(`h1`,`Juego del Número Secreto`);
    asignarTextoElemento(`p`,`Indica un número del 1 al ${numeroMaximo} por favor`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarcaja();
    condicionesIniciales();
    document.querySelector(`#reiniciar`).setAttribute(`disabled`,`true`);
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento(`p`,`Ya se sortearon todos los números Posibles`);
    }else {
        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

condicionesIniciales();