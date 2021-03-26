import React, { Component } from 'react'

export default class DestructuringClass extends Component {
    render() {
        const {name,greet}=this.props
        //using same way we can use states
        //const {state1,state2} =this.state

        return (
            <div>
                <h1>{name}{greet}</h1>
            </div>
        )
    }
}
