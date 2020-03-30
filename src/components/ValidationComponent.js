import React from 'react'

const validationComponent = (props) =>
{
    const textclass = ["text-center"]
    const warningClass = [...textclass, "bg-warning","text-dark"]
    const successClass = [...textclass, "bg-success", "text-white"]
    let validationResult = <p className={warningClass.join(' ')}>Text too short.</p>
    if(props.textLength > props.limit)
    {
        validationResult = (<p className={successClass.join(' ')}>Okay! Long enough ;-)</p>)
    }
    let instruction = (
                <p className="bg-secondary text-white">
                    Enter text to the box above. Cards can be removed by tapping them. First tap removes the text, second tap remvoves the card.
                </p>)
    if(props.textLength > 0)
    {
        instruction = null
    }
    return (
        <div>
            {validationResult}
            {instruction}
        </div>
    )
}

export default validationComponent