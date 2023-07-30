const RefreshButton = ({ onClick }) => {
  return (
    <button style={{ gridColumn: 2 }} className="btn" onClick={onClick}>
      Refresh
    </button>
  )
}
export default RefreshButton
