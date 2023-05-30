export const Square = ({ children, index, isSelected, handleClick }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const updateBoard = () => {
    handleClick(index)
  }

  return (
    <button className={className} onClick={updateBoard}>
      {children}
    </button>
  )
}
