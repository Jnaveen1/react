import './index.css'

const TransactionItem = props => {
  const {eachHistoryList, key, changeTransaction} = props
  const {id, title, amount, type} = eachHistoryList
  const changeTransactionAmount = () => {
    changeTransaction(id, parseInt(amount), type)
  }
  return (
    <li className="list-containerh">
      <h1 className="headingh">{title}</h1>
      <h1 className="headingh">Rs {amount}</h1>
      <h1 className="headingh">{type}</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        className="imageh"
        onClick={changeTransactionAmount}
        alt="delete"
        testid="delete"
      />
    </li>
  )
}

export default TransactionItem
