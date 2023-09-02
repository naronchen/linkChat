import React from 'react'
import '../styles/UserInput.css'

// @TODO responsive height on user input
function UserInput({inputValue, onChange}) {
  return (
    <div className="input-box">
        <input className="input-text" 
                type="text" 
                placeholder="Type something..."
                value={inputValue}
                onChange={(e) => onChange(e.target.value)}
                />
    </div>
  )
}

export default UserInput