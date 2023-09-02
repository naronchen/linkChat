import React, {useEffect, useState} from 'react'
import Header from './components/Header'
import UserInput from './components/UserInput'
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

  const [userInput, setUserInput] = useState('');

  const handleInputChange = (newValue) => {
    setUserInput(newValue);
  };
  
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
        <h3>{userInput}</h3>
        <UserInput value={userInput} onChange={handleInputChange} />
        
    </div>
  )
}

export default App