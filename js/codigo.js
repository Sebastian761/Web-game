
const seleccionarAtaque = document.getElementById('seleccion_ataque')
const botonMascota = document.getElementById("boton-mascota")
const botonFuego = document.getElementById("boton-fuego")
const botonAgua = document.getElementById("boton-agua")
const botonTierra = document.getElementById("boton-tierra")
const botonReiniciar = document.getElementById("boton-reinicio")
const sectionReinicio = document.getElementById("reiniciar")

const seleccionarMascota = document.getElementById('seleccion_mascota')
const spanMascotaJugador = document.getElementById("mascotaJugador")

const spanMascotaEnemigo = document.getElementById("mascotaEnemiga")

const sectionMensajes = document.getElementById("resultado")
const ataqueDelJugador = document.getElementById("ataqueDelJugador")
const ataqueDelEnemigo = document.getElementById("ataqueDelEnemigo")

const spanVidaJugador = document.getElementById('vidas-jugador')
const spanVidaEnemigo = document.getElementById('vidas-enemigo')

const sectionMensaje = document.getElementById("mensajes")

const contenedorTarjetas = document.getElementById('contenedorTarjetas')

let mokepones = []

let ataqueJugador
let ataqueAleatorioEnemigo
let opcionMokepones

let Mascotahipodoge
let Mascotacapipepo 
let Mascotaratigueya 

let valorMascota

let vidaJugador = 3
let vidaEnemigo = 3
let resultado

class Mokepon {
  constructor(nombre, foto, vidas){
      this.nombre = nombre
      this.foto = foto
      this.vida = vidas
      this.ataques = []
  }
}

let hipodoge = new Mokepon('Hipodoge','./assets/hipo.jpg', 3)

let capipepo = new Mokepon('Capipepo', './assets/lan.jpg', 3)

let ratigueya = new Mokepon('Ratigueya', './assets/rati.jpg', 3)

hipodoge.ataques.push(
  { nombre: '💧', id: 'boton-agua'},
  { nombre: '💧', id: 'boton-agua'},
  { nombre: '💧', id: 'boton-agua'},
  { nombre: '🔥', id: 'boton-fuego'},
  { nombre: '🌱', id: 'boton-tierra'},
)

capipepo.ataques.push(
  { nombre: '🌱', id: 'boton-tierra'},
  { nombre: '🌱', id: 'boton-tierra'},
  { nombre: '🌱', id: 'boton-tierra'},
  { nombre: '💧', id: 'boton-agua'},
  { nombre: '🔥', id: 'boton-fuego'},
)

ratigueya.ataques.push(
  { nombre: '🔥', id: 'boton-fuego'},
  { nombre: '🔥', id: 'boton-fuego'},
  { nombre: '💧', id: 'boton-agua'},
  { nombre: '🌱', id: 'boton-tierra'},
)

mokepones.push(hipodoge, capipepo, ratigueya)

function IniciarJuego(){
  seleccionarAtaque.style.display = 'none'

  
  mokepones.forEach((mokepon) => {
    opcionMokepones = `
    <input type="radio" id=${mokepon.nombre} name="Mascota">
    <label for=${mokepon.nombre}>
        <p>${mokepon.nombre}</p>
        <img src=${mokepon.foto} alt=${mokepon.nombre}>
    </label> `

    contenedorTarjetas.innerHTML += opcionMokepones

    Mascotahipodoge = document.getElementById("Hipodoge")
    Mascotacapipepo = document.getElementById("Capipepo")
    Mascotaratigueya = document.getElementById("Ratigueya")

  })
    botonMascota.addEventListener("click", seleccionMascota)
    botonFuego.addEventListener("click",ataqueFuego)
    botonAgua.addEventListener("click",ataqueAgua)
    botonTierra.addEventListener("click",ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciarJuego)
    sectionReinicio.style.display = 'none'

}

function seleccionMascota(){
  seleccionarAtaque.style.display = 'flex'
  seleccionarMascota.style.display = 'none'

    if(Mascotahipodoge.checked){
        alert("Has escogido correctamente a Hipodogue")
        spanMascotaJugador.innerHTML = Mascotahipodoge.id
        valorMascota = Mascotahipodoge.id
    }
    else if(Mascotacapipepo.checked){
        alert("Has escogido correctamente a Capipepo")
        spanMascotaJugador.innerHTML = Mascotacapipepo.id
        valorMascota = Mascotacapipepo.id
    }
    else if(Mascotaratigueya.checked){
        alert("Has escogido correctamente a Ratigueya")
        spanMascotaJugador.innerHTML = Mascotaratigueya.id
        valorMascota = Mascotaratigueya.id
    }
    else{
        alert("No has seleccionado a ninguna mascota")
    }
    
    extraerAtaques(valorMascota)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(valorMascota) {
  let ataques
  for (let i = 0; i < mokepones.length; i++) {
      if(valorMascota == mokepones[i].nombre) {
        ataques = mokepones[i].ataques
      }
  }
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria  = aleatorio(0, mokepones.length -1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre

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

function revisarVidas(){
  if(vidaEnemigo == 0){
    crearMensajeFinal("Ganaste :)")
    reiniciar()
  } else if ( vidaJugador == 0) {
    crearMensajeFinal("Perdiste :(")
    reiniciar()
  }
}

function crearMensaje(){
  let nuevoAtaqueJugador = document.createElement("p")
  let nuevoAtaqueEnemigo = document.createElement("p")

  sectionMensajes.innerHTML = resultado
  nuevoAtaqueJugador.innerHTML = ataqueJugador
  nuevoAtaqueEnemigo.innerHTML = ataqueAleatorioEnemigo

  
  ataqueDelJugador.appendChild(nuevoAtaqueJugador)
  ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo)

}

function resultados(){
  if(ataqueAleatorioEnemigo == ataqueJugador){
    resultado = "EMPATE"
  }
  else if(ataqueJugador == "FUEGO 🔥" && ataqueAleatorioEnemigo == "TIERRA 🌱"){
    resultado = "GANASTE"
    vidaEnemigo--
    spanVidaEnemigo.innerHTML = vidaEnemigo
  }
  else if(ataqueJugador == "AGUA 💧" && ataqueAleatorioEnemigo == "FUEGO 🔥"){
    resultado = "GANASTE"
    vidaEnemigo--
    spanVidaEnemigo.innerHTML = vidaEnemigo
  }
  else if(ataqueJugador == "TIERRA 🌱" && ataqueAleatorioEnemigo == "AGUA 💧"){ 
  resultado = "GANASTE"
  vidaEnemigo--
  spanVidaEnemigo.innerHTML = vidaEnemigo
  }
  else{
    resultado = "PERDISTE"
    vidaJugador--
    spanVidaJugador.innerHTML = vidaJugador
  }

  revisarVidas()
  crearMensaje()

}

function crearMensajeFinal(resultadoFinal){
  sectionMensaje.innerHTML = resultadoFinal
  botonFuego.disabled = true
  botonAgua.disabled = true
  botonTierra.disabled = true
}

function reiniciarJuego(){

  location.reload()
}

function reiniciar(){
  sectionReinicio.style.display = 'initial'
}

function aleatorio(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", IniciarJuego)