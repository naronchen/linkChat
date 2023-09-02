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
        <UserInput />
        
    </div>
  )
}

export default App