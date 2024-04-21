import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props
  return (
    <div className="list-containers">
      <li className="balance-list-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />
        <div>
          <p className="heading">Your Balance</p>
          <p className="rupees" testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </li>
      <li className="income-list-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image"
        />
        <div>
          <p className="heading">Your Income</p>
          <p testid="incomeAmount" className="rupees">
            Rs {income}
          </p>
        </div>
      </li>
      <li className="expenses-list-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image"
        />
        <div>
          <p className="heading">Your Expenses</p>
          <p className="rupees" testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </li>
    </div>
  )
}

export default MoneyDetails
