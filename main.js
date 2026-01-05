let cardsEl = document.getElementById("cards");
let sumEl = document.getElementById("sum");
let textEl = document.getElementById("text");
let cards = [];
let sum = 0;
let text = ""
let isGameStarted = false;

console.log(cards);
console.log(sum);
console.log(text);

function addCard(){
    const randomCard = Math.floor((Math.random() * 10) + 2);
    cards.push(randomCard)
    cardsEl.innerText = "Cards: " + cards.join(" ")
    sum += randomCard
}

function startGame(){
    isGameStarted = true;
    cards = [];
    cardsEl.innerText = "Cards:"
    sum = 0;
    sumEl.innerText = 'Sum: '
    addCard()
    addCard()
    sumEl.innerText +=  `Sum: ${sum}` 
    gameText ()
}

function newCard(){
    if( isGameStarted ){
        addCard()
        sumEl.innerText = `Sum: ${sum}` 
        gameText ()
    }else{
        if(confirm('Do you wanna start new game ?')){
            startGame()
        }else{
            alert('You should go')
        }
    }
    
}

function gameText (){
    if (sum === 21){
        textEl.innerText = `You've got Blackjack!`
        isGameStarted = false
    } else if(sum <21){
        textEl.innerText = 'Do you want to draw a new card?'
    }else{
        textEl.innerText = `You're out of the game!`
        isGameStarted = false
    }
   
}

