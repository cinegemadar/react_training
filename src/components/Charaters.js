import React from 'react'
import CharComponent from './CharComponent'
const characters = (props) => props.text.split('').map(
    (char, index) => <CharComponent 
    key={index} 
    char={char}
    remove={() => props.remove(index)}
    />
)
export default characters