import React from 'react'
function userInput(props)
{
    return (
            <input className="form-control" placeholder="Username" type="text" onChange={props.change} value={props.userName}/>
        )
}
export default userInput