// Globálne premenné
let currentTurn = 'X';
let scoreX = 0;
let scoreO = 0;
let gameOver = false;
let lockedCellsX = []; // Políčka zamknuté hráčom X
let lockedCellsO = []; // Políčka zamknuté hráčom O

// Funkcia na aktualizáciu ukazovateľa tahu
function updateTurnIndicator() {
    const turnIndicator = document.getElementById('turnIndicator');
    turnIndicator.textContent = currentTurn;

    // Zavoláme unlockCells, aby sme odomkli všetky políčka, keď je na rade hráč, ktorý ich zamkol
    unlockCells(currentTurn);
}

// Funkcia na prepnutie tahu medzi hráčmi
function toggleTurn() {
    if (!gameOver) {
        currentTurn = currentTurn === 'X' ? 'O' : 'X';
        updateTurnIndicator();
    }
}