 import React from 'react';
export function Thread({messages, handleSend,}) {
  
    const formRef = React.useRef(null); 
  return (
    <div>
       <form action="formAction" ref={formRef}>
        <input type="text" name="message" placeholder='Enter a text' />
        <button type="submit">Send</button>
       </form>

    </div>
  );
}   