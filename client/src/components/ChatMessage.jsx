import React from 'react'
import '../styles/ChatMessage.css'

function ChatMessage({textValue, type}) {
  //@TODO add robot img in front
  const bgColor = type === 'chatbot' ? { backgroundColor: 'rgba(241, 242, 242)' } : {};

  return (
        <div className = "text-main-Container" style={bgColor}>
            <div className="textContainer">
                {textValue}
            </div>
        </div>
  )
}

export default ChatMessage