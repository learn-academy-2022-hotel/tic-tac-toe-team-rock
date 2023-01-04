import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
// [null, null, null, null, null, null, null, null, null]

const [counter, setCounter] = useState(0)


const turnCounter = (eachIndex) => {
  if (squares[eachIndex] !== null) {
    return(eachIndex)
  }
  let updateBoard = [...squares]
  if (counter % 2 === 0) {
    updateBoard[eachIndex] = "❌"
    setSquares(updateBoard)
  } else {
    updateBoard[eachIndex] = "⭕️"
    setSquares(updateBoard)
  }
  let newCounter = counter + 1
  setCounter(newCounter)
}


return (
  <>
      <h1>Tic Tac Toe</h1>
        <div className="board">
        {squares.map((value, index) => {
          return(
            <Square 
            value={value}
            index={index}
            turnCounter={turnCounter}
            />
            )
          })}
        </div>
    </>
  )
}

export default App

// const actionGame = (clickSquare) => {
//   alert(clickSquare)
// }