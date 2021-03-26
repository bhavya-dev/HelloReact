import React, { Component } from 'react'
import ChildPropComponent from './ChildPropComponent'

export default class ParentProp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName:"parent"
        }
        this.greetParent=this.greetParent.bind(this)
    }

    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    
    render() {
        return (
            <div>
                {/* <button onClick={this.greetParent}>Click</button> */}
                <ChildPropComponent greetHandler={this.greetParent}></ChildPropComponent>
            </div>
        )
    }
}
