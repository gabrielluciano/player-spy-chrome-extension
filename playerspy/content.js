let nicksBlue = []
let nicksRed = []
let nome2 = ''
let firstplayerBlue = '1'
let firstplayerRed = '1'
let blueButton = document.createElement('button')
let redButton = document.createElement('button')
let linkBlue = ""
let linkRed = ""

const interval = setInterval(() => {
    let tabela1 = document.getElementsByClassName('bfy-table')[0]
    let tabela2 = document.getElementsByClassName('bfy-table')[1]

    if (tabela1 && tabela2) {
        let playersBlue = tabela1.querySelectorAll('div#match-extras-content td.player-in-game-name')
        let playersRed = tabela2.querySelectorAll('div#match-extras-content td.player-in-game-name')
        let nome1 = ''
        if (playersBlue != undefined && playersRed != undefined) {
            if ((firstplayerBlue != playersBlue[0].textContent) || (firstplayerRed != playersRed[0].textContent)) {
                firstplayerBlue = playersBlue[0].textContent
                firstplayerRed = playersRed[0].textContent

                nicksBlue = []
                nicksRed = []

                for (let j = 0; j < playersBlue.length; j++) {

                    nome1 = playersBlue[j].textContent

                    for (let i = 0; i < nome1.length; i++) {
                        if (/\w|á|à|â|ã|é|è|ê|í|ï|ó|ô|õ|ö|ú|ç|ñ/gi.test(nome1[i])) {
                            nome2 += nome1[i]
                        }
                    }

                    nicksBlue.push(nome2.replace(/\C$/, ''))
                    nome2 = ''
                }

                for (let j = 0; j < playersRed.length; j++) {

                    nome1 = playersRed[j].textContent

                    for (let i = 0; i < nome1.length; i++) {
                        if (/\w|á|à|â|ã|é|è|ê|í|ï|ó|ô|õ|ö|ú|ç|ñ/gi.test(nome1[i])) {
                            nome2 += nome1[i]
                        }
                    }

                    nicksRed.push(nome2.replace(/\C$/, ''))
                    nome2 = ''
                }

                blueButton.innerHTML = "Ver no OP.GG"
                redButton.innerHTML = "Ver no OP.GG"

                blueButton.setAttribute("id", "btnBlue")
                redButton.setAttribute("id", "btnRed")

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

            blueButton.addEventListener("click", clickBlue)

            redButton.addEventListener("click", clickRed)

        }
    }

}, 2000)

function clickBlue() {
    window.open(linkBlue)
}

function clickRed() {
    window.open(linkRed)
}