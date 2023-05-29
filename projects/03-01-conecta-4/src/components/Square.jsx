export const Square = ({ children, col, row, handleClick }) => {
  const updateBoard = () => {
    handleClick(col, row)
  }
  return (
    <button className='square' onClick={updateBoard}>
      {children}
    </button>
  )
}
