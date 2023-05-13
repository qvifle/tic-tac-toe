import { useEffect, useState } from 'react'
import Row from './components/Row'
import Square from './components/Square'
import { patterns } from './Patterns'

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState('O')
  const [result, setResult] = useState({ winner: "none", state: "none" });

  const [oWins, setOWins] = useState(0)
  const [xWins, setXWins] = useState(0)


  useEffect(() => {
    checkWin()
    checkTie();
    player == 'X' ? setPlayer('O') : setPlayer('X')
  }, [board])




  const chooseSqr = (square) => {
    setBoard(board.map((value, index) => {
      if (index == square && value == '') {
        return player
      }
      return value
    }))
  }

  const checkTie = () => {
    let count = 0
    board.forEach((value) => {
      if (value != '') {
        count += 1
      }
    })

    if (count == 9) restartGame()

  }

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("X");
  };

  const checkWin = () => {
    patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];
      if (firstPlayer == "") return;
      let foundWinningPattern = true;
      currPattern.forEach((idx) => {
        if (board[idx] != firstPlayer) {
          foundWinningPattern = false;
        }
      });

      if (foundWinningPattern) {
        player == 'X' ? setXWins(xWins + 1) : setOWins(oWins + 1)
        restartGame()

      }
    });
  };






  return (
    <>
      <div className='w-screen h-screen bg-main flex flex-col items-center '>
        <nav className='w-5/6 h-[10%] flex items-center max-iphone:justify-center'>
          <a href="https://www.instagram.com/qvifle.dev/" target='blank'><img src="/logo1.png" alt="" className='w-[50px] hover:w-[75px] duration-300 bg-black rounded-2xl float-left' /></a>
        </nav>
        <div className='flex flex-col items-center'>
          <h1 className='text-8xl mt-8 max-iphone:text-6xl'>Tic-Tac-Toe</h1>
          <h2 className='text-5xl max-iphone:text-4xl mt-[1%]'>{`${xWins} : ${oWins}`}</h2>
          <h2 className='text-5xl max-iphone:text-4xl mt-[1%]'>X : O</h2>
          <div className='w-[500px] h-[500px] max-iphone:h-[300px] max-iphone:w-[300px]  bg-primary flex flex-col mt-8'>
            <Row>
              <Square value={board[0]} chooseSqr={() => chooseSqr(0)} />
              <Square value={board[1]} chooseSqr={() => chooseSqr(1)} />
              <Square value={board[2]} chooseSqr={() => chooseSqr(2)} />
            </Row>
            <Row>
              <Square value={board[3]} chooseSqr={() => chooseSqr(3)} />
              <Square value={board[4]} chooseSqr={() => chooseSqr(4)} />
              <Square value={board[5]} chooseSqr={() => chooseSqr(5)} />
            </Row>
            <Row>
              <Square value={board[6]} chooseSqr={() => chooseSqr(6)} />
              <Square value={board[7]} chooseSqr={() => chooseSqr(7)} />
              <Square value={board[8]} chooseSqr={() => chooseSqr(8)} />
            </Row>

          </div>
        </div>
      </div>

    </>
  )
}

export default App
