// Aktivácia schopnosti Change
function activateChangeAbility(player) {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('click', function changeCell() {
            if (this.textContent === 'X' || this.textContent === 'O') {
                this.textContent = this.textContent === 'X' ? 'O' : 'X';
                manageEventListeners();
                checkGameState(); // Skontroluje stav hry pre aktuálneho hráča
                if (!gameOver) {
                    toggleTurn();
                    checkGameState(); // Skontroluje stav hry pre druhého hráča
                }
            }
        }, { once: true });
    });
}

function activateClearAbility(player) {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('click', function clearCell() {
            if (this.textContent === 'X' || this.textContent === 'O') {
                this.textContent = '';
                manageEventListeners();
                checkGameState(); // Skontroluje stav hry po vymazaní symbolu
                if (!gameOver) {
                    toggleTurn();
                }
            }
        }, { once: true });
    });
}

function activateLockAbility(player) {
    let lockActivated = false;

    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('click', function lockCell(event) {
            if (!cell.classList.contains('temporarilyRemoved') && !lockActivated && cell.textContent !== '') {
                cell.classList.add('temporarilyRemoved');
                cell.style.visibility = 'hidden';
                lockActivated = true;
                cells.forEach(c => c.removeEventListener('click', lockCell));
                
                // Uložíme zamknuté políčko pre aktuálneho hráča
                if (currentTurn === 'X') {
                    lockedCellsX.push(cell);
                } else {
                    lockedCellsO.push(cell);
                }
                
                manageEventListeners();
                toggleTurn();
                event.stopPropagation();
            }
        }, { once: true });
    });
}
