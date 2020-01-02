/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundscores, activeplayer, dice1, dice2, gamePlaying, previousscore;
init();

//document.querySelector('#current-' + activeplayer).textContent = dice;
//document.querySelector('#current-' + activeplayer).innerHTML = '<em>' + dice; '</em>';

//var x = document.querySelector('#score-' + activeplayer).textContent;
//console.log(x);

//document.querySelector('.dice').style.display = 'none';

//function btn() {

//}
//btn();


document.querySelector('.btn-new').addEventListener('click', init);

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {

        dice1 = Math.floor(Math.random() * 6) + 1;
        dice2 = Math.floor(Math.random() * 6) + 1;

        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
        //console.log(dice1, dice2);


        if (dice1 !== 1 && dice2 !== 1) {
            roundscores += dice1 + dice2;
            document.querySelector('#current-' + activeplayer).textContent = roundscores;
        } else {
            nextPlayer();
        }
    }



});

document.querySelector('.btn-hold').addEventListener('click', function() {

    if (gamePlaying) {
        scores[activeplayer] += roundscores;
        document.querySelector('#score-' + activeplayer).textContent = scores[activeplayer];
        if (scores[activeplayer] >= 20) {
            document.querySelector('#name-' + activeplayer).textContent = 'WINNER!';
            hidedice();
            document.querySelector('.player-' + activeplayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activeplayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {

            nextPlayer();

        }
    }
});



function nextPlayer() {

    activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
    roundscores = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    hidedice();
}

function init() {
    scores = [0, 0];
    roundscores = 0;
    activeplayer = 0;
    previousscore = 0;

    hidedice();

    gamePlaying = true;

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');



}

function hidedice() {

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

}