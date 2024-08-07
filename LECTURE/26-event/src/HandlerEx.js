import React, { Component } from 'react'

export default class HandlerEx extends Component {
  state = {
    msg : "Hello World!",
  }

  render() {
    const {msg} = this.state;

    const handleMsg=()=>{
      this.setState({msg : "Goodbye World!"})
    }
    return (
      <div>
        <h2>
          {msg}
        </h2>
        <button onClick={handleMsg}>클릭</button>
      </div>
    )
  }
}

