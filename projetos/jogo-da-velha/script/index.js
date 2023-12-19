// TODAS AS CLASSES CEL DENTRO DE UMA ÚNICA VARIÁVEL
var cell = document.querySelectorAll('.cel')

// PARÂMETROS INICIAIS
var vezX = 0
var vezO = 0
var pontosX = 0
var pontosO = 0

// PARÂMETROS FIXOS
var jogador_X = "X"
var jogador_O = "O"
var combinacoes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
var placarX = document.getElementById('X')
var placarO = document.getElementById('O')
var indicador = document.getElementById('vez')
var telaNot = document.getElementById('notificacao')

// IDENTIFICA QUAL OPÇÃO (td) FOI SELECIONADA
document.addEventListener("click", (event) => {
    if (event.target.matches('.cel')){
        jogar(event.target.id)
    }
})

function jogar(n) { //SERÁ ACIONADA SEMPRE QUE ALGUÉM JOGAR
    //VERIFICA SE A OPÇÃO JÁ FOI ESCOLHIDA ANTERIORMENTE
    var opcao = document.getElementById(n)
    if (opcao.textContent == "X" || opcao.textContent == "O") {
        alert('Opção já selecionada')
    } else {
        // IDENTIFICA DE QUEM É A VEZ DE JOGAR
        if (vezX == vezO) {
            var vez = jogador_X
            vezX++
            indicador.innerHTML = jogador_O
        } else {
            var vez = jogador_O
            vezO++
            indicador.innerHTML = jogador_X
        }

        // ADICIONA O SÍMBOLO (X / O) NA OPÇÃO SELECIONADA
        opcao.textContent = vez
        opcao.classList.add(vez)
        vencedor(vez) 
    }
}

function vencedor(vez) { //VERIFICA SE HOUVE ALGUM VENCEDOR NA RODADA
    var vencedor = combinacoes.some((comb) =>{
        return comb.every((index) => {
            return cell[index].classList.contains(vez)
        })
    })

    // RESPOSTAS EM CASO DE VITÓRIA OU EMPATE
    if (vencedor) {
        if (vez == "X") {
            pontosX++
            placarX.innerHTML = pontosX
        } else {
            pontosO++
            placarO.innerHTML = pontosO
        }
        fimPartida(vez)
    }  else if(vezX + vezO == 9) {
        fimPartida(vez)
    }
}

function fimPartida(vez) {
    telaNot.style.display = "block"
    var playerWin = document.getElementById('player-win')
    if(vezX + vezO == 9) {
        playerWin.innerHTML = `O jogo empatou!!`
    } else {
        playerWin.innerHTML = `O jogador "${vez}" ganhou!!`
    }   
}

document.addEventListener("click", (button) => {
    if (button.target.matches('#reload')) {
        reiniciar()
    } else if (button.target.matches('#quit')) {
        sair()
    }
})

function reiniciar() { //REINICIAR OS PARAMETROS E O JOGO
    telaNot.style.display = "none"
    vezX = 0
    vezO = 0
    indicador.innerHTML = jogador_X
    for (var c = 0; 0 < 9; c++) {
        var limparcel = document.getElementsByClassName('cel') [c]
        limparcel.classList.remove('X')
        limparcel.classList.remove('O')
        limparcel.textContent = ""
    }
}