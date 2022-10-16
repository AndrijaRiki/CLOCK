var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var x = canvas.width / 2
var y = canvas.height / 2

var c = canvas.getContext('2d')

canvas.style.background = "radial-gradient(circle at center, lightblue, rgb(72, 72, 158), rgb(49, 49, 146), blue)"

function krajniUgao(ugao) {
    ugao *= Math.PI / 180

    if(ugao >= 2 * Math.PI)
        ugao -= 2 * Math.PI

    return ugao - Math.PI / 2
}

function setClock() {
    c.clearRect(0, 0, innerWidth, innerHeight)

    const datum = new Date()
    const sekunde = datum.getSeconds() / 60
    const minuti = (sekunde + datum.getMinutes()) / 60
    const sati = (minuti + datum.getHours()) / 12

    var ugaoSati = krajniUgao(sati * 360)
    var ugaoMinuti = krajniUgao(minuti * 360)
    var ugaoSekunde = krajniUgao(sekunde * 360)

    // lukovi
    c.beginPath()
    c.arc(x, y, 300, -Math.PI / 2, ugaoSekunde, false)
    c.strokeStyle = "#ff5d9e"
    c.lineWidth = 20
    c.stroke()

    c.beginPath()
    c.arc(x, y, 270, -Math.PI/2, ugaoMinuti, false)
    c.strokeStyle = "#8f71ff"
    c.lineWidth = 20
    c.stroke()

    c.beginPath()
    c.arc(x, y, 240, -Math.PI/2, ugaoSati, false)
    c.strokeStyle = "#82acff"
    c.lineWidth = 20
    c.stroke()

    // kazaljke
    c.beginPath()
    c.moveTo(x, y)
    c.lineTo(x + 200 * Math.cos(ugaoSekunde), y + 200 * Math.sin(ugaoSekunde))
    c.strokeStyle = "#ff5d9e"
    c.lineWidth = 12
    c.stroke()
    c.closePath()

    c.beginPath()
    c.moveTo(x, y)
    c.lineTo(x + 170 * Math.cos(ugaoMinuti), y + 170 * Math.sin(ugaoMinuti))
    c.strokeStyle = "#8f71ff"
    c.lineWidth = 12
    c.stroke()
    c.closePath()

    c.beginPath()
    c.moveTo(x, y)
    c.lineTo(x + 140 * Math.cos(ugaoSati), y + 140 * Math.sin(ugaoSati))
    c.strokeStyle = "#82acff"
    c.lineWidth = 12
    c.stroke()
    c.closePath()

    c.beginPath()
    c.arc(x, y, 10, 0, Math.PI * 2, false)
    c.fillStyle = "white"
    c.fill()
}

setInterval(setClock, 1000)