
import { startTransition, useState } from 'react'
import './App.css';
import { Thread } from '../Thread'
import { deliveryMessage } from '../actions';

function App() {
  
  const [messages, setMessages] = useState([
    { text: "Hello there!", sending: false, key: 1 }
  ]);
  async function sendMessageAction(formData) {
    const sentMessage = await deliveryMessage(formData.get("message"));
    
    startTransition(() => {
      setMessages((messages) => [{ text: sentMessage }, ...messages]);
    })
  }
  return <Thread messages={messages} sendMessageAction={sendMessageAction} />;
}

export default App
