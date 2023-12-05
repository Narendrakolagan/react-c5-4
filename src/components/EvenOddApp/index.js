import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  onIncrement = () => {
    this.setState(prevState => ({
      count: Math.floor(Math.random() * 100) + 1,
    }))
  }

  authText = () => {
    const {count} = this.state
    if (count % 2 === 0) {
      return 'Count is Even'
    }
    return 'Count is Odd'
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1>
          Count <span>{count}</span>
        </h1>
        <p>{this.authText()}</p>
        <button className="button" type="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p>*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
