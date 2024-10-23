document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.cell').forEach(cell => {
        cell.addEventListener('click', handleCellClick, { once: true });
    });
    document.getElementById('restartButton').addEventListener('click', resetGame);
    document.querySelectorAll('.ability').forEach(button => button.addEventListener('click', handleAbilityClick));
});

// Funkcia na obsluhu kliknutí na tlačidlá schopností
function handleAbilityClick() {
    if ((this.id === 'clearX' && currentTurn === 'X') || (this.id === 'clearO' && currentTurn === 'O')) {
        activateClearAbility(currentTurn);
    } else if ((this.id === 'changeX' && currentTurn === 'X') || (this.id === 'changeO' && currentTurn === 'O')) {
        activateChangeAbility(currentTurn);
    } else if ((this.id === 'lockX' && currentTurn === 'X') || (this.id === 'lockO' && currentTurn === 'O')) {
        activateLockAbility(currentTurn);
    }
    this.disabled = true;
}

function handleCellClick(event) {
    const cell = event.target;
    if (cell.textContent === '' && !gameOver) {
        placeMark(cell, currentTurn);
        checkGameState();
        if (!gameOver) {
            toggleTurn();
        }
    }
}

function placeMark(cell, player) {
    cell.textContent = player;
}

function checkForWin(player) {
    const cells = document.querySelectorAll('.cell');
    const wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    return wins.find(combination => combination.every(index => cells[index].textContent === player));
}

function isDraw() {
    return ![...document.querySelectorAll('.cell')].some(cell => cell.textContent === '');
}

function checkGameState() {
    let winningCombination = checkForWin(currentTurn);
    if (winningCombination) {
        endGame(false, winningCombination);
        gameOver = true;
    } else if (isDraw()) {
        endGame(true);
        gameOver = true;
    } else {
        gameOver = false;
    }
}

function endGame(draw, winningCombination = null) {
    if (winningCombination) {
        winningCombination.forEach(index => {
            document.getElementById(`cell${index}`).classList.add('winner');
        });
    }
    alert(draw ? "Remíza!" : `Víťaz je ${currentTurn}!`);
    if (!draw) updateScores();
    gameOver = true;

    // Pridanie triedy 'winner' na tlačidlo restart
    document.getElementById('restartButton').classList.add('winner');
}

function updateScores() {
    if (currentTurn === 'X') {
        scoreX++;
        document.getElementById('scoreX').textContent = scoreX;
    } else {
        scoreO++;
        document.getElementById('scoreO').textContent = scoreO;
    }
}

function resetGame() {
    document.querySelectorAll('.cell').forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('winner', 'locked', 'temporarilyRemoved');
        cell.style.opacity = '1';
        cell.style.visibility = 'visible';
        cell.removeEventListener('click', handleCellClick);
        cell.addEventListener('click', handleCellClick, { once: true });
    });
    currentTurn = 'X';
    gameOver = false; // Reset game over state
    lockedCellsX = []; // Reset locked cells for player X
    lockedCellsO = []; // Reset locked cells for player O
    updateTurnIndicator();
    document.querySelectorAll('.ability').forEach(button => button.disabled = false);

    // Odstránenie triedy 'winner' z tlačidla restart
    document.getElementById('restartButton').classList.remove('winner');
}

function deactivateAbilityButton() {
    document.querySelectorAll('.ability').forEach(button => {
        button.disabled = true;
        button.classList.add('used');
    });
}

// Reactivácia tlačidiel po reštarte hry
function resetAbilityButtons() {
    document.querySelectorAll('.ability').forEach(button => {
        button.disabled = false;
        button.classList.remove('used', 'active');
    });
}

document.getElementById('restartButton').addEventListener('click', function() {
    resetGame();
    resetAbilityButtons();
});

function restoreLockedCells(player) {
    const cells = document.querySelectorAll('.temporarilyRemoved');
    if (cells.length > 0) {
        cells.forEach(cell => {
            cell.classList.remove('temporarilyRemoved');
            cell.style.visibility = 'visible';  // Obnoví viditeľnosť políčka
        });
    }
}

function manageEventListeners() {
    document.querySelectorAll('.cell').forEach(cell => {
        cell.removeEventListener('click', handleCellClick);
        if (!cell.textContent && !cell.classList.contains('locked') && !cell.classList.contains('temporarilyRemoved')) {
            cell.addEventListener('click', handleCellClick, { once: true });
        }
    });
}

function updateTurnIndicator() {
    const turnIndicator = document.getElementById('turnIndicator');
    turnIndicator.textContent = currentTurn;
    // Zavoláme unlockCells, aby sme odomkli všetky políčka, keď je na rade hráč, ktorý ich zamkol
    unlockCells(currentTurn);
}

function unlockCells(player) {
    const cellsToUnlock = player === 'X' ? lockedCellsX : lockedCellsO;
    cellsToUnlock.forEach(cell => {
        cell.classList.remove('temporarilyRemoved');
        cell.style.visibility = 'visible';
    });
    
    // Vyprázdnime zoznam zamknutých políčok pre hráča
    if (player === 'X') {
        lockedCellsX = [];
    } else {
        lockedCellsO = [];
    }
}