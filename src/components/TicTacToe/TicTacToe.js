import * as React from "react"
import * as styles from "./tictactoe.module.scss"

const TicTacToe = () => {
    let [currentPlayer, setCurrentPlayer] = React.useState("X");
    let [gameActive, setGameActive] = React.useState(true);
    let [gameState, setGameState] = React.useState(["", "", "", "", "", "", "", "", ""]);
    let [statusText, setStatusText] = React.useState("It's X's turn")
    let [isPcTurn, setIsPcTurn] = React.useState(false)
    const winningMessage = () => `Player ${currentPlayer} has won!`;
    const drawMessage = () => `Game ended in a draw!`;
    const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

    const PcPlay = () => {
        setIsPcTurn(true);
        let index;
        do {
            index = Math.ceil(Math.random() * 8)
        } while (gameState[index].length > 0);

        setTimeout(() => {
            handleCellPlayed(index);
            setIsPcTurn(false);
        }, 350)

    }


    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const handleCellPlayed = (clickedCellIndex) => {
        let arr = [...gameState];
        arr[clickedCellIndex] = currentPlayer;
        setGameState(arr)
    }

    const handlePlayerChange = () => {
        currentPlayer === "X" ? setCurrentPlayer("O") : setCurrentPlayer("X");
    }

    const handleResultValidation = () => {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            let a = gameState[winCondition[0]];
            let b = gameState[winCondition[1]];
            let c = gameState[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break
            }
        }

        if (roundWon) {
            setStatusText(winningMessage());
            setGameActive(false);
            return;
        }

        let roundDraw = !gameState.includes("");
        if (roundDraw) {
            setStatusText(drawMessage());
            setGameActive(false);
            return;
        }

        handlePlayerChange();
    }

    const handleCellClick = (clickedCellEvent) => {
        const clickedCellIndex = clickedCellEvent.target.dataset.cellIndex;

        if (gameState[clickedCellIndex] !== "" || !gameActive) {
            setStatusText("Move not allowed! Try different cell!")
            return;
        }

        handleCellPlayed(clickedCellIndex);
    }

    const handleRestartGame = () => {
        setGameActive(true);
        setCurrentPlayer("X");
        setGameState(["", "", "", "", "", "", "", "", ""]);
    }

    React.useEffect(() => {
        setStatusText(currentPlayerTurn());
        if (currentPlayer === 'O') {
            PcPlay();
        }
    }, [currentPlayer])

    React.useEffect(() => {
        if (gameState.join('').length) {
            handleResultValidation();
        }
    }, [gameState])



    return (
        <section className={styles.sectionTTT}>
            <h1 className={styles.gameTitle}>Tic Tac Toe</h1>
            <div className={styles.gameContainer}
                style={isPcTurn ? {
                    cursor: 'not-allowed'
                } : { cursor: 'pointer' }}>
                <div data-cell-index="0" className={styles.cell} onClick={handleCellClick}>{gameState[0]}</div>
                <div data-cell-index="1" className={styles.cell} onClick={handleCellClick}>{gameState[1]}</div>
                <div data-cell-index="2" className={styles.cell} onClick={handleCellClick}>{gameState[2]}</div>
                <div data-cell-index="3" className={styles.cell} onClick={handleCellClick}>{gameState[3]}</div>
                <div data-cell-index="4" className={styles.cell} onClick={handleCellClick}>{gameState[4]}</div>
                <div data-cell-index="5" className={styles.cell} onClick={handleCellClick}>{gameState[5]}</div>
                <div data-cell-index="6" className={styles.cell} onClick={handleCellClick}>{gameState[6]}</div>
                <div data-cell-index="7" className={styles.cell} onClick={handleCellClick}>{gameState[7]}</div>
                <div data-cell-index="8" className={styles.cell} onClick={handleCellClick}>{gameState[8]}</div>
            </div>
            <h2 className={styles.gameStatus}>{statusText}</h2>
            <button className={styles.gameRestart} onClick={handleRestartGame}>Restart Game</button>
        </section>
    )
}

export default TicTacToe