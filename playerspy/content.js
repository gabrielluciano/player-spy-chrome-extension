let linkBlue = ""
let linkRed = ""

let firstplayerBlue = '1'
let firstplayerRed = '1'

let blueButton = document.createElement('button')
let redButton = document.createElement('button')

blueButton.setAttribute("id", "btnBlue")
redButton.setAttribute("id", "btnRed")

blueButton.addEventListener("click", clickBlue)
redButton.addEventListener("click", clickRed)

function clickBlue() {
    window.open(linkBlue)
}

function clickRed() {
    window.open(linkRed)
}

const interval = setInterval(() => {
    if (document.getElementsByClassName('bfy-table').length == 2) {
        let tabela1 = document.getElementsByClassName('bfy-table')[0]
        let tabela2 = document.getElementsByClassName('bfy-table')[1]

        blueButton.innerHTML = "Ver no OP.GG"
        redButton.innerHTML = "Ver no OP.GG"

        if (tabela1 && tabela2) {
            let playersBlue = tabela1.querySelectorAll('div#match-extras-content td.player-in-game-name')
            let playersRed = tabela2.querySelectorAll('div#match-extras-content td.player-in-game-name')

            if (playersBlue && playersRed) {
                if ((firstplayerBlue != playersBlue[0].textContent) || (firstplayerRed != playersRed[0].textContent)) {
                    firstplayerBlue = playersBlue[0].textContent
                    firstplayerRed = playersRed[0].textContent

                    let nicksBlue = []
                    let nicksRed = []

                    let playerNick = ''
                    for (let j = 0; j < playersBlue.length; j++) {

                        let playerNameBattlefy = playersBlue[j].textContent

                        for (let i = 0; i < playerNameBattlefy.length; i++) {
                            if (/\w|á|à|â|ã|é|è|ê|í|ï|ó|ô|õ|ö|ú|ç|ñ/gi.test(playerNameBattlefy[i])) {
                                playerNick += playerNameBattlefy[i]
                            }
                        }

                        nicksBlue.push(playerNick.replace(/\C$/, ''))
                        playerNick = ''
                    }

                    playerNick = ''
                    for (let j = 0; j < playersRed.length; j++) {

                        playerNameBattlefy = playersRed[j].textContent

                        for (let i = 0; i < playerNameBattlefy.length; i++) {
                            if (/\w|á|à|â|ã|é|è|ê|í|ï|ó|ô|õ|ö|ú|ç|ñ/gi.test(playerNameBattlefy[i])) {
                                playerNick += playerNameBattlefy[i]
                            }
                        }

                        nicksRed.push(playerNick.replace(/\C$/, ''))
                        playerNick = ''
                    }

                    document.querySelector("div.card").appendChild(blueButton)
                    document.querySelector("div.card").appendChild(redButton)

                    linkBlue = `https://br.op.gg/multi/query=${nicksBlue[0]}`
                    for (let pos = 1; pos < nicksBlue.length; pos++) {
                        linkBlue += `%2C${nicksBlue[pos]}`
                    }

                    linkRed = `https://br.op.gg/multi/query=${nicksRed[0]}`
                    for (let pos = 1; pos < nicksRed.length; pos++) {
                        linkRed += `%2C${nicksRed[pos]}`
                    }

                }
            }
        }
    }

}, 2000)