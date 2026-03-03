import { useState } from 'react';
import { Chatbot } from 'supersimpledev'
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages }) {

  const [inputText, setInputText] = useState('');

  function saveInputText(event) {
    setInputText(event.target.value);
  }


  function sendMessage() {
    const newChatMessages = [
      ...chatMessages, //gives a copy the array chatMessages
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID() //creates a random key
      }
    ];

    setChatMessages(newChatMessages);
    
    const response = Chatbot.getResponse(inputText); //from external library
    setChatMessages([
      ...newChatMessages, 
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID() 
      }
    ]);
    setInputText(''); //sets the input to empty string after pressed send
  }

  function keyPress(event) {
    if (event.key === 'Enter') {
      sendMessage();
    }
  }

  return (
    <div className="chat-input-container">
      <input 
        className="input" 
        placeholder="Send a message to Chatbot"
        onChange={saveInputText}
        value={inputText}
        onKeyDown={keyPress} //when pressed on the key run the function
      />
      <button
        onClick={sendMessage}
        className="send-button"
      >Send</button>
    </div>
  );
}