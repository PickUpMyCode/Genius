var memoria_game = []
var memoria_jogador = []
var buttons = document.getElementsByClassName('button')
var pontos = document.getElementById('pontos')
var tocando = false, jogoIniciado = false
var btn_atual, iniciarMemo
var cont = 0, pontuacao = 0

//Adiciona o primeiro botao a tocar
memoria_game.push(gerarMemoria(0, 3))

console.log(memoria_game)

console.log(buttons)

iniciar()

function iniciar() {
    if (!jogoIniciado) {
        tocando = true
        jogoIniciado = true
        iniciarMemo = setInterval(tocar, 1000)
    }
}


function tocar() {

    if (btn_atual != undefined) desligaButton(btn_atual)

    if (cont == memoria_game.length) {
        btn_atual = undefined
        cont = 0
        tocando = false
        clearInterval(iniciarMemo)
        return
    }

    btn_atual = memoria_game[cont]

    ligaButton(btn_atual)

    cont++

}

function clicado(btn_id) {
    if (!tocando && jogoIniciado) {

        var audio = new Audio('sound.mp3')
        audio.playbackRate = 1.6
        audio.play()

        memoria_jogador.push(btn_id)

        var indice = memoria_jogador.length - 1

        console.log("indice: " + indice)

        console.log("Memoria indice: " + memoria_game[indice])

        console.log("botao clickado: " + btn_id)

        if (memoria_jogador[indice] != memoria_game[indice]) {
            jogoIniciado = false

            alert("Voce Perdeu!")
            
        } else {

            if (memoria_jogador.length == memoria_game.length) {

                tocando = true

                memoria_game.push(gerarMemoria(0, 3))

                memoria_jogador = []

                console.log(memoria_jogador)

                pontuacao++
                
                pontos.innerHTML = pontuacao.toString()

                iniciarMemo = setInterval(tocar, 1000)

            }
        }

    }
}

function gerarMemoria(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function ligaButton(button) {
    let audio = new Audio('sound.mp3')
    audio.playbackRate = 1.6
    audio.play()

    switch (button) {
        case 0:
            buttons[button].style.background = "green"
            break

        case 1:
            buttons[button].style.background = "red"
            break
        case 2:
            buttons[button].style.background = "blue"
            break

        case 3:
            buttons[button].style.background = "yellow"
            break
    }
}

function desligaButton(button) {
    switch (button) {
        case 0:
            buttons[button].style.background = "rgba(0, 128, 0, 0.445)"
            break

        case 1:
            buttons[button].style.background = "rgba(255, 0, 0, 0.445)"
            break
        case 2:
            buttons[button].style.background = "rgba(0, 0, 255, 0.445)"
            break

        case 3:
            buttons[button].style.background = "rgba(255, 255, 0, 0.445)"
            break
    }
}