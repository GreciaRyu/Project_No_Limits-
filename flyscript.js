// ¿Qué quiero hacer?
// Usuario ingresa una cantidad de combustible y ese combustible alzanza para viajar una distancia, 
// dependiendo de la cantidad de combustible que ingrese podrá alcanzar un destino determinado.

//  Orden de viaje:
//  Luna 15N
//  Marte  50N
//  Júpiter 100N
//  Saturno 250N
//  Urano  600N
//  Neptuno 800N

let Bienvenida= alert("¡Bienvenido! ¿Estás listo para iniciar un viaje por el espacio?\n Para iniciar tu viaje debes ingresar la cantidad de combustible que gastaras, recuerda guardar suficiente combustible para el regreso o quedaras varado en el espacio")
let combustible=Number(prompt("Ingresa la cantidad de nitrerium que usarás durante tu viaje:"))
let mensaje="¿Deseas volver a casa o continuamos viajando?\n1 - Continuar\n2 - Volver\n Combustible restante: "
let decision=1
let planetaActual
function viajeEspacial(combustibleARestar,planetaDestino,mensajeAterrizaje) {
    combustible-=combustibleARestar
    planetaActual=planetaDestino
    alert(mensajeAterrizaje)
    
}

if (combustible>0) {
    console.log("Has despegado exitosamente")
}
else { 
    console.log("Oh no! No tienes combustible suficiente")
}

while (combustible>0 && decision==1) {
    let planeta=Number(prompt("¿A dónde quieres viajar esta vez?\n 1 - La Luna\n 2 - Marte\n3 - Júpiter\n4 - Saturno")) 
    if (planeta!=planetaActual) {
        if (planeta===1 && combustible>=15) { 
            viajeEspacial (15,1,"Has llegado a la Luna, un gran paso para la humanidad")
        }
        else if (planeta===2 && combustible>=50) {
            viajeEspacial(50,2,"Has llegado a Marte, espero hayas traído agua contigo")
        }
        else if (planeta===3 && combustible>=100) {
            viajeEspacial(100,3,"Has llegado a Júpiter, es incluso más grande cuando aterrizas ¿no?")
        }
        else if (planeta===4 && combustible>=250){
            viajeEspecial(250,4,"Has llegado a Saturno, ¿Notaste que los anillos solo son polvo estelar y otras particulas?")
        }
        else {
            alert("No tienes combustible suficiente para alcanzar ese destino!")
        }
    }
    else {
        alert("Ya estas en este planeta, escoge otro destino")
    }
  
    decision=Number(prompt(mensaje+combustible))
}
console.log("Has salido de la nave, suerte con tu misión")