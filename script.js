'use strict';
const btnRoll = document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');
const btnNew=document.querySelector('.btn--new')
const player1=document.querySelector('.player--0');
const player2=document.querySelector('.player--1');
const currentState_player1=document.querySelector('#current--0');
const currentState_player2 = document.querySelector('#current--1');
const currentScore_player1 = document.querySelector('#score--0');
const currentScore_player2 = document.querySelector('#score--1');

let player1_score=0;
let player2_score=0;
let player1_current=0;
let player2_current=0;

const dice=document.querySelector('.dice')
function resetGame(){ 
    let zero=0;
    currentState_player1.textContent=zero;
    currentState_player2.textContent=zero;
    currentScore_player1.textContent=zero;
    currentScore_player2.textContent=zero;
     player1_score = zero;
     player2_score = zero;
     player1_current = zero;
     player2_current = zero;
}
function generateRandomRoll(){
    let randomRoll = Math.trunc(Math.random() * 6 + 1);
    dice.src=`dice-${randomRoll}.png`;
    currentState(randomRoll);
}
function switchplayers(){
player1.classList.toggle('player--active');
player2.classList.toggle('player--active')
}
function holdHandler(){
currentScoreHandler();
switchplayers();
}

function currentState(currentRoll){
    if(player1.classList.contains('player--active')){
        currentRoll == 1 ? player1_current = 0 : player1_current = player1_current + currentRoll;
        currentState_player1.textContent=player1_current
    }
    if (player2.classList.contains('player--active')) {
        currentRoll == 1 ? player2_current = 0 : player2_current = player2_current + currentRoll;
        currentState_player2.textContent = player2_current
    }
}
function currentScoreHandler(){
    if (player1.classList.contains('player--active')) {
    player1_score=player1_score+player1_current;
    currentScore_player1.textContent=player1_score;}

    if (player2.classList.contains('player--active')) {
        player2_score = player2_score + player2_current;
        currentScore_player2.textContent = player2_score;
    }

}
btnHold.addEventListener('click',holdHandler);
btnRoll.addEventListener('click',generateRandomRoll);
btnNew.addEventListener('click',resetGame)