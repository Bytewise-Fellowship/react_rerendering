import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bool, setBool] = useState(false);
  const [message,setMessage]=useState("");
  const [array,setArray] =useState([]);
  

 
  return (
   <> 
        <h1>hey</h1>
        {bool && <h1>"Hey is exist"</h1>}
        <button onClick={()=>{setBool(!bool)}}>
          Toggle
        </button>

        

        {!!array.length && array.map(
          (item)=>{
            return(
                    <ul>
                      <li>{item}</li>
                    </ul>)
                })
        }
        <div></div>
        <input type="text" value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
        <button onClick={()=>{
          setArray([...array,message]); 
          setMessage("");
          }}>
          Click to add message
        </button>


   </>
  )
}

export default App
