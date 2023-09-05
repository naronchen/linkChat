import React, {useState} from 'react'
import '../styles/UserInput.css'
import sendImg from '../assets/send.png'
import loadingGif from '../assets/loading2.gif'


// @TODO responsive height on user input
function UserInput({sendToBoard, sendToServer, loading}) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
      };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter'){
            sendToBoard(inputValue, 'user')
            sendToServer(inputValue, 'user')
            setInputValue('')
        }
    }

    const handleClick = (e) => {
        sendToBoard(inputValue, 'user')
        sendToServer(inputValue, 'user')
        setInputValue('')
    }

  return (
    <div className="input-box">
        <div className="input-container">
            
            <input className="input-text" 
                    type="text" 
                    placeholder="Type something..."
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown ={handleKeyPress}

            />

            {loading ? 
                <img src={loadingGif} alt="Loading..." className="send-img" />            
                : <img  src={sendImg} 
                    alt="Send" 
                    className="send-img"
                    onClick={handleClick}
            /> }

        </div>  
    </div>
  )
}

export default UserInput