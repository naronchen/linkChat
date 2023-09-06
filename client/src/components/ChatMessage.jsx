import React from 'react'
import '../styles/ChatMessage.css'
import robotImg from '../assets/robot.png'


function ChatMessage({textValue, type}) {
  //@TODO add robot img in front
  const bgColor = type === 'chatbot' ? { backgroundColor: 'rgba(241, 242, 242)' } : {};

  return (
        <div className = "text-main-Container" style={bgColor}>
            {type === 'chatbot' && (
              <div className="robot-container">
                <img src={robotImg} alt="Robot" className="robot-img-message" />
              </div>
            )}
            <div className="textContainer">
            {textValue.split('\n').map((str, index, array) => 
              index === array.length - 1 ? str : <>
                {str}
                <br />
              </>
            )}
            </div>
        </div>
  )
}

export default ChatMessage