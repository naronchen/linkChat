import React from 'react'
import '../styles/UserInput.css'
import sendImg from '../assets/send.png'

// @TODO responsive height on user input
function UserInput({inputValue, onChange}) {
  return (
    <div className="input-box">
        <div className="input-container">
        <input className="input-text" 
                type="text" 
                placeholder="Type something..."
                value={inputValue}
                onChange={(e) => onChange(e.target.value)}
                />
        <img  src={sendImg} 
            alt="Send" 
            className="send-img"/>

</div>  
    </div>
  )
}

export default UserInput