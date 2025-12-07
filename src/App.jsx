
import { startTransition, useState } from 'react'
import './App.css'
import { deliveryMessage } from '../actions'
import { Thread } from '../Thread'

function App() {
const [messages, setMessages]=useState({message: 'Hello World!', sending: false, key:1})


async function handleSend(formData){
  const sentMessage = await deliveryMessage(formData.get('message'))
  startTransition(()=>{
    setMessages({messages: sentMessage, ...messages})
  }

  )
  console.log('sentMessage', sentMessage)
 
} 
  return <Thread 
  messages={messages} 
  handleSend={handleSend}
  />
}

export default App
