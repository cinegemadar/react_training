import React from 'react';
import './App.css';
import UserOutput from './components/UserOutput';
import 'bootstrap/dist/css/bootstrap.min.css';
import testData from './testdata';
import ValidationComponent from './components/ValidationComponent';
import Characters from './components/Charaters';

class App extends React.Component 
{
  constructor()
  {
    super()
    this.state = {
      users : testData,
      text: "",
      textLength : 0
    }
    this.inputField = null
  }
  changeHandler = (event) =>
  {
    this.setState({textLength : event.target.value.length})
    this.setState({text:event.target.value})
  }
  removeHandler = (charIndex) =>
  {
    let textArray = this.state.text.split('')
    textArray[charIndex] = ''
    let text=textArray.join('')
    this.inputField.value = text
    this.setState({text:text})
  }
  render() 
  {
    // const userOutputs = this.state.users.map( user =>
    //   <UserOutput 
    //     userName={user.username}
    //     key={user.id}
    //   />)

    return (
      <div className="App">
        {/* {userOutputs} */}
        <div class="card">
          <input 
            type="text"
            class="input-group-text"
            onChange={this.changeHandler}
            ref={input => this.inputField = input}
          />
          <ValidationComponent textLength={this.state.textLength}/>
        </div>
        <Characters 
            text={this.state.text}
            remove={this.removeHandler} 
        />
      </div>
    );
  }
}

export default App;
