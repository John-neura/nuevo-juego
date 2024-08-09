
let numeroSecreto=0;
let intentos = 0;
let numerosSorteados =[];
let numeroMaximo= 10
console.log(numeroSecreto);

function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(numeroSecreto);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos===1)? "intento":"intentos"}`);
    document.getElementById("reiniciar").removeAttribute("disabled");
        // el usuario no acerto
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja() {
    document.querySelector("#valorUsuario").value="";
    
}
    
             
function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
        // si el numero generado esta en la lista hacer una operacion
        console.log(numeroGenerado);
        console.log(numerosSorteados); 
        // si ya sorteamos todos los numeros
    if (numerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p","ya se sortearon todos los numeros posibles");

    } else{
        if(numerosSorteados.includes(numeroGenerado)){
           return numeroSecreto();
         }else{
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
         }
    }
    
}
function condiconesIniciales(){
    asignarTextoElemento("h1","Juego del Numero Secreto");
    asignarTextoElemento("p",`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    console.log(numeroSecreto)
    intentos=1;


}
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numero
    condiconesIniciales();
    //generar el numero aleatorio
    
    //iniicar el numero de intentos
    
    // desabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true"); 
    



}
condiconesIniciales();


