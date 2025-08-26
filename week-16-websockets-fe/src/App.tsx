import { ForwardRefRenderFunction, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [socket,setSocket] = useState()
  const inputRef = useRef();

  function sendMessage (){
    if(!socket){
      return ;
    }

    //ws has many event handlers for example ws.onerror, ws.onopen and ws.onclose where it used if 
    // ws server sends an error, it gives when the ws server is open and it is executed when the ws server is closed respectively
    // ws.onmessage event handler logs or holds the message send by the ws server
    const message = inputRef.current.value 
    //@ts-expect-error
    socket.send(message)
  }

  useEffect(()=>{
    const ws = new WebSocket('ws://localhost:8080');
    setSocket(ws);

    ws.onmessage = ((ev)=>{
      alert(ev.data)
    })
  },[])

  return (
    <>
      <div>
        <input ref={inputRef} type='text' placeholder='Message' ></input>
        <button onClick={sendMessage}>Send</button>
      </div>
    </>
  )
}

export default App
