import React, { Component } from 'react'

export default class UserLogging extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLogged:true
        }
    }
    
    render() {
        
        return this.state.isLogged && (<div>welcome</div>)
        return this.state.isLogged ? (<div>Welcome</div>) : (<div>invalid</div>)
    }
}
