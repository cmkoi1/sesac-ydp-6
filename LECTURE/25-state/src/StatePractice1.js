// state 실습 1

import React, { Component } from 'react'

export default class StatePractice1 extends Component {
  state = {
    count : 0,
}
  render() {
    const {count} = this.state;
    const plus2 = ()=>{
      this.setState({count : count +2})
    }
    const minor1 = ()=>{
      this.setState({count : count -1})
    }
    return (
      <div>
        {count}
        <button onClick={plus2}>+2</button>
        <button onClick={minor1}>-1</button>
      </div>
    )
  }
}
