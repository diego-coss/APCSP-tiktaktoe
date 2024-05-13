// Project: tic-tak-toe
// Author:   Rafael D. Coss <rdcoss@icloud.com>
// Filename: home.js
// Created:  Mon Apr  1 11:40:15 PDT 2024
// Language: JavaScript - ECMA-262, ECMAScript® 2023 language specification
// Purpose:  TBD       
//  Copyright 2024, Rafael D Coss
//

// Make the players and assgn them X and O
var playerX = "X";
var playerO = "O";
var currentPlayer = playerX;
// create a Array to store the buttons that have been clicked
var buttonValues = [];
var xButtons = [];
var oButtons = [];
// variables to keep track of the game
var startingNewGame = false;
var gameDraw = false;

// This function that creates a 3x3 table with buttons inside each cell
function makeTable() {
        // get rid of the start button or reset button depending on the 
    if (startingNewGame) {
        var removeRestartButton = document.getElementById('restartButton');
        const rnn = removeRestartButton.parentElement;
        console.log("I am about to remove the start button");
        rnn.removeChild(removeRestartButton);
        startingNewGame = false;
        xButtons = [];
        oButtons = [];
        buttonValues = [];
        currentPlayer = playerX;
        gameDraw = false;
    }
    else {
    var removeStartButton = document.getElementById('startButton');
        const rrn = removeStartButton.parentElement;
        console.log("I am about to remove the start button");
        rrn.removeChild(removeStartButton);
    }
// loop that lets me create a table with 3 rows and 3 columns        
    for (let ti = 1; ti < 4; ti++) {
    var makeTr =  document.createElement('tr');
    const myParent = document.getElementById('myTbody');
    myParent.appendChild(makeTr);

    for (let i = 1; i < 4; i++) {
        var makeTd = document.createElement('td');
        makeTr.appendChild(makeTd);
       var makeButton = document.createElement('button');
       //give each button a unique id
         var myIdValue = `button-${ti}-${i}`;
            makeButton.setAttribute("id" , myIdValue);
            makeButton.innerHTML = " ";
        // add an event listener to each button
            makeButton.addEventListener('click', (event) => {
                acceptUserMove(event);
            });

        makeTd.appendChild(makeButton);
      }
    }
}

// create a function that will accept the user move and display an X or O
function acceptUserMove(event) {
    var button = event.target;
    console.log(button); 
    buttonValues.push(button);
    console.log( buttonValues );
    button.setAttribute("value", currentPlayer);
    const newText = document.createTextNode(currentPlayer);
    button.appendChild(newText);
    //disable button here
    button.disabled = true;
    if (updateTurn()) {
    }
    else {
        switchPlayers();
    }
}

// create a function that will update the turn on the small text bellow
function updateTurn() {
    var terrmination = false;
    var turn = document.getElementById('turn');
    // display who wins
    if (checkWinner()) {
        console.log("Game Over: " + currentPlayer + " wins");
        turn.innerHTML = currentPlayer + " wins";
        var disableButtons = document.querySelectorAll('button');
        for (let i = 0; i < disableButtons.length; i++) {
            disableButtons[i].disabled = true;
        }
        restartGame();
        terrmination = true;
    }
    // display a tie
    if (gameDraw) {
        console.log("Game Over: It's a tie");
        turn.innerHTML = "It's a tie";
        var disableButtons = document.querySelectorAll('button');
        for (let i = 0; i < disableButtons.length; i++) {
            disableButtons[i].disabled = true;
        }
        restartGame();
        terrmination = true;
    }
return terrmination;
}

// make a function that will swich playes when called
function switchPlayers() {
    if (currentPlayer === playerX) {
        currentPlayer = playerO;
    } else {
        currentPlayer = playerX;
    }
    turn.innerHTML = currentPlayer + "'s turn";
}

// function that will play the game
function playGame() {
    var buttons = document.querySelectorAll('button');
    console.log("there are " + buttons.length + " buttons");
    console.log("the current player is " + currentPlayer);
    checkWinner();
}

// create a function that will filter the buttons and separate them by X and O
function filterButtons() {
    for (let i = 0; i < buttonValues.length; i++) {

        if (buttonValues[i].value === "X") {
            xButtons.push(buttonValues[i].getAttribute("id"));
        } else {
            oButtons.push(buttonValues[i].getAttribute("id"));
        }
    }
}

// create a function that will find a winer
function checkWinner() {
    var results = false;
    filterButtons();

    if (xButtons.includes("button-1-1") && xButtons.includes("button-1-2") && xButtons.includes("button-1-3")) {
        console.log("X wins");
        results = true;
    }
    if (xButtons.includes("button-2-1") && xButtons.includes("button-2-2") && xButtons.includes("button-2-3")) {
        console.log("X wins");
        results = true;
    }
    if (xButtons.includes("button-3-1") && xButtons.includes("button-3-2") && xButtons.includes("button-3-3")) {
        console.log("X wins");
        results = true;
    }
    if (xButtons.includes("button-1-1") && xButtons.includes("button-2-1") && xButtons.includes("button-3-1")) {
        console.log("X wins");
        results = true;
    }
    if (xButtons.includes("button-1-2") && xButtons.includes("button-2-2") && xButtons.includes("button-3-2")) {
        console.log("X wins");
        results = true;
    }
    if (xButtons.includes("button-1-3") && xButtons.includes("button-2-3") && xButtons.includes("button-3-3")) {
        console.log("X wins");
        results = true;
    }
    if (xButtons.includes("button-1-1") && xButtons.includes("button-2-2") && xButtons.includes("button-3-3")) {
        console.log("X wins");
        results = true;
    }
    if (xButtons.includes("button-1-3") && xButtons.includes("button-2-2") && xButtons.includes("button-3-1")) {
        console.log("X wins");
        results = true;
    }
    if (oButtons.includes("button-1-1") && oButtons.includes("button-1-2") && oButtons.includes("button-1-3")) {
        console.log("O wins");
        results = true;
    }
    if (oButtons.includes("button-2-1") && oButtons.includes("button-2-2") && oButtons.includes("button-2-3")) {
        console.log("O wins");
        results = true;
    }
    if (oButtons.includes("button-3-1") && oButtons.includes("button-3-2") && oButtons.includes("button-3-3")) {
        console.log("O wins");
        results = true;
    }
    if (oButtons.includes("button-1-1") && oButtons.includes("button-2-1") && oButtons.includes("button-3-1")) {
        console.log("O wins");
        results = true;
    }
    if (oButtons.includes("button-1-2") && oButtons.includes("button-2-2") && oButtons.includes("button-3-2")) {
        console.log("O wins");
        results = true;
    }
    if (oButtons.includes("button-1-3") && oButtons.includes("button-2-3") && oButtons.includes("button-3-3")) {
        console.log("O wins");
        results = true;
    }
    if (oButtons.includes("button-1-1") && oButtons.includes("button-2-2") && oButtons.includes("button-3-3")) {
        console.log("O wins");
        results = true;
    }
    if (oButtons.includes("button-1-3") && oButtons.includes("button-2-2") && oButtons.includes("button-3-1")) {
        console.log("O wins");
        results = true;
    }
    // check for a tie
    if (results === false && buttonValues.length === 9) {
        console.log("It's a tie");
        var turn = document.getElementById('turn');
        turn.innerHTML = "It's a tie";
        gameDraw = true;
    }
    return results;
}

// create a function that will restart the game
function restartGame() {
    var makeRestart = document.createElement('button');
    var restartId = `restartButton`;
       makeRestart.setAttribute("id" , restartId);
       makeRestart.innerHTML = " New Game? ";
       const myParent = document.getElementById('mainPage');
       myParent.appendChild(makeRestart);
       // when the button is clicked it will clear the board and start a new game
       makeRestart.addEventListener('click', (event) => {
        clearBoard();
        startingNewGame = true;
        makeTable(event);
    });
}

// create a function that will dealete the board
function clearBoard() {
    var button11 = document.getElementById(`button-1-1`);
    button11.remove();
    var button12 = document.getElementById(`button-1-2`);
    button12.remove();
    var button13 = document.getElementById(`button-1-3`);
    button13.remove();
    var button21 = document.getElementById(`button-2-1`);
    button21.remove();
    var button22 = document.getElementById(`button-2-2`);
    button22.remove();
    var button23 = document.getElementById(`button-2-3`);
    button23.remove();
    var button31 = document.getElementById(`button-3-1`);
    button31.remove();
    var button32 = document.getElementById(`button-3-2`);
    button32.remove();
    var button33 = document.getElementById(`button-3-3`);
    button33.remove();
}

// create a function that will start the game after the start button is clicked
const startButton = document.getElementById('startButton');
startButton.addEventListener('click', function() {
    makeTable();
    startButton.disabled = true;
    console.log("Start button is disabled");
});