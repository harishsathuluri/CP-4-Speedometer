// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({
      count:
        prevState.count < 200 ? prevState.count + 10 : prevState.count === 200,
    }))
  }

  onDecrement = () => {
    this.setState(prevState => ({
      count: prevState.count > 0 ? prevState.count - 10 : prevState.count === 0,
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading"> SPEEDOMETER </h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="Speedometer"
        />
        <p className="speedEle">
          Speed Is <span> {count} </span>mph
        </p>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph </p>
        <div className="button-container">
          <button onClick={this.onIncrement} className="button1">
            Accelerate{' '}
          </button>
          <button onClick={this.onDecrement} className="button2">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
