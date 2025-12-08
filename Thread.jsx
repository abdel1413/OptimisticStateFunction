 import React, { startTransition, useOptimistic } from 'react';


export function Thread({ messages, sendMessageAction }) {
  const formRef = React.useRef();


  function formAction(formData) {
    addOptimisticMessage(formData.get("message"));

    formRef.current.reset();

    startTransition(async () => {
      await sendMessageAction(formData);
    });
  }


  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      {
        text: newMessage,
        sending: true
      },
      ...state,
    ]
  );

  return (
    <>
      <form action={formAction} ref={formRef}>
        {/* <div className='float-container'> */}
        <input type="text" name="message" id='input-text' placeholder=' ' />
         <label htmlFor="input-text">Enter a message</label>
        {/* </div> */}
        <button type="submit">Send</button>
      </form>

      {optimisticMessages.map((message, index) => (
        <div key={index} style={{ opacity: message.sending ? 0.5 : 1 }}>
          {message.text}
          {!!message.sending && <small className="loading"> 
          {/* ( sending....  ) */}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
            </small>}
        </div>
       
      ))}
      
    </>
  );
}