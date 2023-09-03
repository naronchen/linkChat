import React, {useEffect, useState} from 'react'
import Header from './components/Header'
import UserInput from './components/UserInput'
import ChatMessage from './components/ChatMessage';
import './styles/App.css';

function App() {
  
//   const [backendData, setBackendData] = useState([{}]) 

//   useEffect(() => {
//     fetch("/api")
//         .then( 
//             response => response.json()
//         )
//         .then(
//             data => {
//                 setBackendData(data)
//             }
//         )
//   }, [])

    const [messages, setMessages] = useState([]);

    const sendToBoard = (newValue, type) => {
      const newMessage = <ChatMessage key={newValue} textValue = {newValue} type={type} />;
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

  
  // @TODO there is a warning for same cotent in messages, Key should be unique
  return (
    <div>
        {/* {(typeof backendData.users === 'undefined') ? (
            <p> Loading</p>
        ):(
            backendData.users.map((user, i) => (
                 <p key={i}>{user}</p>
            ))
        )} */}

        <Header />
        <div className="board-Container">
          {messages.map((message) => message)}
        </div>
        <UserInput sendToBoard={sendToBoard} />
        
    </div>
  )
}

export default App