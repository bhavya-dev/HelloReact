
import React from 'react'

export default function Greeting(props) {
    return (
        <div>
            <h1>{props.name} Welcome to React World</h1>
            {props.children}
        </div>
    )
}

