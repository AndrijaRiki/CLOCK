setInterval(setClock, 1000)

const casKaz = document.getElementById('cas')
const minKaz = document.getElementById('min')
const sekKaz = document.getElementById('sek')

function setClock() {
    const datum = new Date()
    const sekunde = datum.getSeconds() / 60
    const minuti = (sekunde + datum.getMinutes()) / 60
    const sati = (minuti + datum.getHours()) / 12

    setTime(casKaz, sati)
    setTime(minKaz, minuti)
    setTime(sekKaz, sekunde)
}

function setTime(elem, rotacija) {
    elem.style.setProperty('--rot', rotacija * 360)
}

setClock()