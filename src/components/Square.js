import React from 'react'

const Square = ({value, index, actionGame}) => {

  const handleClick = () => {
    actionGame (index)
  }

  return (
    <>
    <div className="square" onClick={handleClick}>{value}</div>
    </>
  )
}
export default Square
