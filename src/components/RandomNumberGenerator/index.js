// Write your code here

import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {num: 0}

  randomNumber = () => Math.ceil(Math.random() * 100)

  Generate = () => {
    const randNum = this.randomNumber()

    this.setState({num: randNum})
  }

  render() {
    const {num} = this.state
    return (
      <div className="main">
        <div className="card">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button className="btn" type="button" onClick={this.Generate}>
            Generate
          </button>
          <p>{num}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
