import React from 'react'

const validationComponent = (props) =>
{
    let text = <p class="bg-warning text-dark text-center">Text too short.</p>
        if(props.textLength > props.limit)
        {
            text = (<p class="bg-success text-white text-center">Okay! Long enough ;-)</p>)
        }
        return text
}

export default validationComponent