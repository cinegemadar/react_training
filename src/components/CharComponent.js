import React from 'react'
function charComponent(props)
{
    const style = {
        width:'2rem',
        height:'2rem'
    }
    return (<div 
        class="float-left card bg-dark text-white text-center"
        style={style}
        onClick={props.remove}>{props.char}</div>)
}
export default charComponent