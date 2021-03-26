import React from 'react'

export default function ChildPropComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('child')}>Click</button>
        </div>
    )
}
