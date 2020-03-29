import React from 'react'

function ValidationComponent(props)
{
    let text = <p class="bg-warning text-dark">Text too short.</p>
    if(props.textLength > 5)
    {
        text = (<p class="bg-success text-white">Text long enough</p>)
    }
    return (text)
}

export default ValidationComponent