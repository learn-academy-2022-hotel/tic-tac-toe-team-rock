import React from 'react'

const Square = ({value, index, turnCounter}) => {

  const handleClick = () => {
    turnCounter (index)
  }

  return (
    <>
    <div 
    className="square" 
    onClick={handleClick}>
    {value}
    </div>
    </>
  )
}
export default Square
