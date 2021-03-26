import React from 'react'

export default function DestructuringFunctional({name,topic}) {
    //below is second way of destructuring
    //const {name,topic}= props
    return (
        <div>
            <h1>{name}{topic}</h1>
        </div>
    )
}
