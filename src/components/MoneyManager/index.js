import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const initialHistoryList = []

class MoneyManager extends Component {
  state = {
    historyList: initialHistoryList,
    balance: 0,
    income: 0,
    expenses: 0,
    title: '',
    amount: 0,
    type: '',
  }

  addHistory = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newHistory = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    if (newHistory.type.toLowerCase() === 'income') {
      this.setState(prevVal => ({
        balance: parseInt(prevVal.balance) + parseInt(amount),
        income: parseInt(prevVal.income) + parseInt(amount),
      }))
    } else {
      this.setState(prevVal => ({
        balance: parseInt(prevVal.balance) - parseInt(amount),
        expenses: parseInt(prevVal.expenses) + parseInt(amount),
      }))
    }
    this.setState(eachHistory => ({
      historyList: [...eachHistory.historyList, newHistory],
      title: '',
      amount: '',
    }))
  }

  changeTitle = event => {
    this.setState({
      title: event.target.value,
    })
  }

  changeAmount = event => {
    this.setState({
      amount: event.target.value,
    })
  }

  changeType = event => {
    this.setState({
      type: event.target.value,
    })
  }

  changeTransaction = (id, amount, type) => {
    const {historyList} = this.state
    const filteredList = historyList.filter(
      eachTransaction => eachTransaction.id !== id,
    )
    console.log(filteredList)
    if (type.toLowerCase() === 'income') {
      this.setState(prevVal => ({
        income: prevVal.income - amount,
        balance: prevVal.balance - amount,
        historyList: filteredList,
      }))
    } else {
      this.setState(prevVal => ({
        balance: prevVal.balance + amount,
        expenses: parseInt(prevVal.expenses) - amount,
        historyList: filteredList,
      }))
    }
  }

  render() {
    const {historyList, title, amount, balance, income, expenses} = this.state

    return (
      <div className="main-container">
        <div className="sub-container1">
          <h1 className="name-heading">Hi, Richard</h1>
          <p className="para">
            Welcome back to your
            <span className="span"> Money Manager</span>
          </p>
        </div>
        <ul>
          <MoneyDetails balance={balance} income={income} expenses={expenses} />
        </ul>
        <div className="input-history-containers">
          <form className="inputs-container" onSubmit={this.addHistory}>
            <h1>Add Transaction</h1>
            <div className="input-container">
              <label htmlFor="title">TITLE</label>
              <br />
              <input
                id="title"
                type="text"
                className="input"
                placeholder="TITLE"
                onChange={this.changeTitle}
                value={title}
              />
            </div>
            <div className="input-container">
              <label htmlFor="amount">AMOUNT</label>
              <br />
              <input
                id="amount"
                type="text"
                className="input"
                placeholder="AMOUNT"
                onChange={this.changeAmount}
                value={amount}
              />
            </div>
            <div className="input-container">
              <label htmlFor="type">TYPE</label>
              <br />
              <select id="type" className="input" onChange={this.changeType}>
                {transactionTypeOptions.map(each => (
                  <option value={each.optionId}>{each.displayText}</option>
                ))}
                <option>Income</option>
                <option selected>Expenses</option>
              </select>
            </div>
            <button className="button" type="submit">
              Add
            </button>
          </form>
          <div className="history-container">
            <h1 className="history-heading">History</h1>
            <div className="table">
              <div className="table-headings">
                <p className="t-heading">Title</p>
                <p className="t-heading">Amount</p>
                <p className="t-heading">Type</p>
              </div>
              <ul>
                {historyList.map(eachHistory => (
                  <TransactionItem
                    eachHistoryList={eachHistory}
                    key={eachHistory.key}
                    changeTransaction={this.changeTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
