let ataqueJugador
let ataqueAleatorioEnemigo
let resultado

function IniciarJuego(){
    let botonMascota = document.getElementById("boton-mascota")
    botonMascota.addEventListener("click", seleccionMascota)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click",ataqueFuego)

    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click",ataqueAgua)

    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click",ataqueTierra)

}

function seleccionMascota(){

    let hipodogue = document.getElementById("hipodogue")
    let capipepo = document.getElementById("capipepo")
    let ratigueya = document.getElementById("ratigueya")
    let langostelvis = document.getElementById("langostelvis")
    let tucapalma = document.getElementById("tucapalma")
    let pydos = document.getElementById("pydos")
    let spanMascotaJugador = document.getElementById("mascotaJugador")

    if(hipodogue.checked){
        alert("Has escogido correctamente a Hipodogue")
        spanMascotaJugador.innerHTML = "hipodogue"
    }
    else if(capipepo.checked){
        alert("Has escogido correctamente a Capipepo")
        spanMascotaJugador.innerHTML = "Capipepo"
    }
    else if(ratigueya.checked){
        alert("Has escogido correctamente a Ratigueya")
        spanMascotaJugador.innerHTML = "Ratigueya"
    }
    else if(langostelvis.checked){
        alert("Has escogido correctamente a Langostelvis")
        spanMascotaJugador.innerHTML = "Langostelvis"
    }
    else if(tucapalma.checked){
        alert("Has escogido correctamente a Tucapalma")
        spanMascotaJugador.innerHTML = "Tucapalma"
    }
    else if(pydos.checked){
        alert("Has escogido correctamente a Pydos")
        spanMascotaJugador.innerHTML = "Pydos"
    }
    else{
        alert("No has seleccionado a ninguna mascota")
    }
    
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria  = aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById("mascotaEnemiga")
    if (mascotaAleatoria == 1) {
      spanMascotaEnemigo.innerHTML = "Hipodogue"
    } else if (mascotaAleatoria == 2) {
      spanMascotaEnemigo.innerHTML = "Capipepo"
    } else if (mascotaAleatoria == 3) {
      spanMascotaEnemigo.innerHTML = "Ratigueya"
    } else if (mascotaAleatoria == 4) {
      spanMascotaEnemigo.innerHTML = "Langostelvis"
    } else if (mascotaAleatoria == 5) {
      spanMascotaEnemigo.innerHTML = "Tucapalma"
    } else {
      spanMascotaEnemigo.innerHTML = "Pydos"
    }
  }

function ataqueFuego() {
  ataqueJugador = "FUEGO 🔥"
  AtaqueEnemigo()
}

function ataqueAgua() {
  ataqueJugador = "AGUA 💧"
  AtaqueEnemigo()
}

function ataqueTierra() {
  ataqueJugador = "TIERRA 🌱"
  AtaqueEnemigo()
}

function AtaqueEnemigo(){
  let ataqueAleatorio = aleatorio(1,3)

  if(ataqueAleatorio == 1){
    ataqueAleatorioEnemigo = "FUEGO 🔥"
  }
  else if(ataqueAleatorio == 2){
    ataqueAleatorioEnemigo = "AGUA 💧"
  }
  else if(ataqueAleatorio == 3){
    ataqueAleatorioEnemigo = "TIERRA 🌱"
  }

  resultados()
}

function crearMensaje(){
  let sectionMensajes = document.getElementById("Mensajes")

  let parrafo = document.createElement("p")
  parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + ", La mascota enemiga atacó con " + ataqueAleatorioEnemigo +"... " + resultado 

  sectionMensajes.appendChild(parrafo)
}

function resultados(){
  if(ataqueAleatorioEnemigo == ataqueJugador){
    resultado = "EMPATE"
  }
  else if(ataqueJugador == "FUEGO 🔥" && ataqueAleatorioEnemigo == "TIERRA 🌱"){
    resultado = "GANASTE"
  }
  else if(ataqueJugador == "AGUA 💧" && ataqueAleatorioEnemigo == "FUEGO 🔥"){
    resultado = "GANASTE"
  }
  else if(ataqueJugador == "TIERRA 🌱" && ataqueAleatorioEnemigo == "AGUA 💧")
  resultado = "GANASTE"
  else{
    resultado = "PERDISTE"
  }

  crearMensaje()

}

function aleatorio(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", IniciarJuego)