import React from 'react';
import UserInput from './UserInput';
class UserOutput extends React.Component
{
    constructor(props)
    {
        super()
        this.state = {
            username : props.userName
        }
    }
    inputChangeHandler = (event) =>
    {
        this.setState({username : event.target.value})
    }
    render()
    {
        return (
            <div className="card shadow-lg float-left">
                <h1 className="card-title">{this.state.username}</h1>
                <UserInput change={this.inputChangeHandler} userName={this.state.username}/>
            </div>
        )
    }
}
export default UserOutput