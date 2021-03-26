import React, { Component } from 'react'

export default class WelcomeTopic extends Component {

    constructor(){
        super()
      this.state={
          message:"welcome to state"
      }
    }

    changeMessage(){
        this.setState({
            message:"these are states"
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
                
            </div>
        )
    }
}
