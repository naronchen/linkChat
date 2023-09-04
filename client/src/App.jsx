import React, {useEffect, useState} from 'react'
import axios from 'axios';

import Header from './components/Header'
import UserInput from './components/UserInput'
import ChatMessage from './components/ChatMessage';
import './styles/App.css';

function App() {

    const [messages, setMessages] = useState([]);

    // @TODO automatic scrolling to the bottom
    // @TODO there is a warning for same cotent in messages, Key should be unique
    const sendToBoard = (userInput, type) => {
      const newMessage = <ChatMessage key={userInput} textValue = {userInput} type={type} />;
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    useEffect(() => {
      const fetchHistory = async () => {
        try {
          setMessages([])
          
          //@TODO use env variable and change this server url
          const response = await axios.get('http://localhost:5000/history')
          response.data.output.forEach((message) => {
            sendToBoard(message.messageText, message.senderType)
          })
        } catch (error) {
          console.error("Error fetching history")
        }
      };

      fetchHistory();
    },[])

    const sendToServer = async (userInput) => {
      try {
        const response = await axios.post('http://localhost:5000/redirect', {
          text: userInput
        });
        console.log('Server Response:', response.data.output);
        sendToBoard(response.data.output, 'chatbot')

      //@TODO Handle error
      } catch (error) {
        console.log('Error:', error);
        sendToBoard('Internal Server Error', 'chatbot')
      }
    }

  
  return (
    <div>
        <Header />
        <div className="board-Container">
          {messages.map((message) => message)}
        </div>
        <UserInput sendToBoard={sendToBoard} 
                    sendToServer={sendToServer} />
    </div>
  )
}

export default App