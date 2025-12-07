 import React, { startTransition, useOptimistic } from 'react';
export function Thread({messages, handleSend,}) {

   
    const formRef = React.useRef(null); 

    function formAction(formData){
        const message = formData.get('message')
    
        addOptimisticMessage(message)
        formRef.current.reset();
        startTransition(async()=>{

       await handleSend(formData)
        })
    }

     const [optimisticMessages, addOptimisticMessage] =useOptimistic(messages,
        (state, newMessage) => 
        [{text: newMessage, sending: true}, ...state] 
    );


  
  return (
    <div>
       <form action={formAction}ref={formRef}>
        <input type="text" name="message" placeholder='Enter a text' />
        <button type="submit">Send</button>
       </form>
         <ol>
        {optimisticMessages.map((msg, index) => (
              
            <li key={index} style={{opacity: msg.sending ? 0.5 : 1}}>
                {msg.text}
                {!!msg.sending && ' (sending...)'}
            </li>
        ))}
        
       </ol>
    </div>
  );
}   