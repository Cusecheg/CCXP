const dia = document.getElementById("dias")
const hora = document.getElementById("horas")
const minuto = document.getElementById("minutos")
const segundo = document.getElementById("segundos")

const lancamento = "20 jan 2024"

function countDown(){
    const dataLanc = new Date(lancamento)
    const hoje = new Date()
    const segTotal = (dataLanc - hoje) / 1000

    const finalDias = formatoTempo(Math.floor(segTotal / 60 / 60 / 24));
    const finalHoras = formatoTempo(Math.floor(segTotal / 60 / 60) % 24);
    const finalMinutos = formatoTempo(Math.floor(segTotal / 60) % 60);
    const finalsegundos = formatoTempo(Math.floor(segTotal) % 60);

    dias.innerHTML = finalDias
    horas.innerHTML = finalHoras
    minutos.innerHTML = finalMinutos
    segundos.innerHTML = finalsegundos
}
function formatoTempo(tempo){
    return tempo < 10? `0${tempo}` : tempo;
}
countDown();
setInterval(countDown, 1000)