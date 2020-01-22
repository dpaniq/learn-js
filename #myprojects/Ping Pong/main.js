

let pingpongGame = {
    score: {
        l: 0,
        r: 0,
        endgame: false},
    
    serve: {
        inserve: localStorage.getItem('inserve'),
        sides: true, // true = left / false = right // VIBRATJ KTO V NACHALE
        servesCounter : 0,
        totalserves: 0},

    listMoves: [], 

    tournament: {
        trnmt: false, 
        pairs: [],
        games: 1,
        totalGames: 1,
        gamesOut: {} // Player : Score; Player 2: Score
    },



    plusPoint: function (key) {
        if (!this.endgame()) {
            if (key === 'ArrowLeft') {
                this.score.l += 1
                this.serve.sides = true}
            if (key === 'ArrowRight') {
                this.score.r += 1
                this.serve.sides = false}
            this.serve.totalserve += 1
            this.listMoves.push(key)
            if (this.endgame()) this.score.endgame = true
        } 
    },

    minusPoint: function () {
        const lastelem = this.listMoves.pop()
        if (lastelem === 'ArrowLeft' && this.score.l > 0) this.score.l -= 1
        if (lastelem === 'ArrowRight' && this.score.r > 0) this.score.r -= 1
    },

    // score > 21 and difference +2 or 
    endgame: function() {
        return (Math.max(this.score.l, this.score.r) - Math.min(this.score.l, this.score.r)) > 1 &&
                (this.score.l > 20 || this.score.r > 20) ||
                (this.score.l == 5 && this.score.r == 0) ||
                (this.score.l == 0 && this.score.r == 5)
    },

    wingame: function() {
        return `The ${this.listMoves[this.listMoves.length - 1]} win the game with  ${this.score.l > this.score.r ? this.score.l : this.score.r} score`
    }
}

// document.addEventListener("DOMContentLoaded", () => {
//     const sixserves = document.querySelector('#serves')
//     console.log(localStorage.getItem('inserve'))
    

// })

// Tournament
const tournament = document.querySelector('#tournament-tab')
const ngames = document.querySelector("[name='number-of-games']")
const nplayers = document.querySelector("[name='number-of-players']")
const playersNames = document.querySelector('#players-name')

const go = document.querySelector("[name='go']")

//
const left = document.querySelector('#left')
const right = document.querySelector('#right')
const leftArrow = document.querySelector('#left-arrow')
const rightArrow = document.querySelector('#right-arrow')
const sixserves = document.querySelector('#serves')
setTimeout(() => sixserves.checked = localStorage.getItem('inserve'), 2000) 
const reset = document.querySelector('#reset')
const listmoves = document.querySelector('#list-moves')
const moveside = document.querySelector('#move-side')
const servescounter = document.querySelector('#serves-counter')
const endg = document.querySelector('#end-game')
// 

document.addEventListener('keydown', keydown)

function keydown(event) {
    if (event.key ==='ArrowLeft' || event.key === 'ArrowRight') {
        pingpongGame.plusPoint(event.key)
        showState(pingpongGame.serve.inserve)
    }

    if (event.key === 'ArrowDown') {
        pingpongGame.minusPoint()
        showState(pingpongGame.serve.inserve)
    }
}
    

document.querySelector('header').addEventListener('click', (event) => {

    if (event.target == sixserves){
        if (sixserves.checked){
            pingpongGame.serve.inserve = true
        } else {
            pingpongGame.serve.inserve = false
        }
        localStorage.setItem('inserve', pingpongGame.serve.inserve)
    } 

    if (event.target == reset) location.reload();

    if (event.target.id == 'tournament') {
        tournament.style.display = 'flex'
    }
})

ngames.addEventListener('input', () => pingpongGame.games = ngames.value)

createPlayers() // create before 
nplayers.addEventListener('input', createPlayers)


go.addEventListener('click', () => {
    pingpongGame.pairs = determinePairs()
})
// document.querySelector('container').addEventListener('click', (event) => {

//     showState()
// })

// document.querySelector('footer').addEventListener('click', (event) => {

//     showState()
// })


function showState(flag) {
    if (pingpongGame.score.endgame) {
        endg.textContent = pingpongGame.wingame()
    }
    left.textContent = pingpongGame.score.l
    right.textContent = pingpongGame.score.r

    // if simple match
    if (!flag){
        pingpongGame.serve.side ? moveside.textContent = 'left' : moveside.textContent = 'right'
        
        pingpongGame.serve.servesCounter += 1
        servescounter.textContent = pingpongGame.serve.servesCounter


        if (pingpongGame.serve.sides) {
            leftArrow.innerHTML = "<div class='circle'></div>"
            rightArrow.innerHTML = "<div class='circle inv'></div>"
        } else {
            rightArrow.innerHTML = "<div class='circle'></div>"
            leftArrow.innerHTML = "<div class='circle inv'></div>"
        }
        
    // If five serve INSERVE = true
    } else {
        pingpongGame.serve.side ? moveside.textContent = 'left' : moveside.textContent = 'right'
        
        pingpongGame.serve.servesCounter += 1
        servescounter.textContent = pingpongGame.serve.servesCounter

        if (pingpongGame.serve.servesCounter > 4){
            pingpongGame.serve.servesCounter = 0
            pingpongGame.serve.side = !pingpongGame.serve.side
 
            // change color of circle 
            leftArrow.children[0].classList.toggle('inv')
            rightArrow.children[0].classList.toggle('inv')
        }
    }
}




function createPlayers(){
    if (nplayers.value == 0) {
        playersNames.textContent = ''
    } else {
        playersNames.textContent = 'Write your name below'
    
        for (let i = 0; i < nplayers.value; i++) {
            let input = document.createElement('input')
            input.setAttribute('name', 'player')
            input.value = 'Player ' + i
            playersNames.appendChild(input)
        }
    }
   
}


function determinePairs() {

    let couples = []
    let temp = []
    document.querySelectorAll("[name='player']").forEach(element => {
        temp.push(element.value)
    });

    
    for (let i = 0; i < temp.length; i++) {
        for (let j = 1; j < temp.length; j++) {
            if (!couples.includes(temp[0] + '|' + temp[j]) && !couples.includes(temp[j] + '|' + temp[0])){    
                couples.push(temp[0] + '|' + temp[j])
            }
        }
        let x = temp.shift()
        temp.push(x)
    }

    const stuck_couples = couples
    for (let x = 0; x < 2; x++){  
        couples.concat(stuck_couples)
        console.log(x, couples)
    }
    
    console.log(couples)
    return couples
}

// determinePairs([1, 2, 3, 4, 5])


// do {
//     console.log('asdasdasd')
// } while (pingpongGame.tournament > 0) {
//     pingpongGame.tournament -= 1
// }

let count_tourn

// do {
    
// } while (condition);

