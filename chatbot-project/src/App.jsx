import { useState, useRef, useEffect } from 'react'
import './App.css'
import { Chatbot } from 'supersimpledev'
import RobotProfilePicture from './assets/robot.png';
import UserProfilePicture from './assets/user.png';

function ChatInput({ chatMessages, setChatMessages }) {

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

function ChatMessage( { message, sender } ) {
  //const message = props.message;
  //const sender = props.sender;
  /*
  if (sender === 'robot') {
    return (
      <div>
        <img class="user-image" src="images/robot.png" alt="" />
        {message}
      </div>
    );
  }
  */

  return ( //if the sender is user then classname is user else its robot
    <div className={
      sender === 'user'
      ? 'user'
      : 'robot'
    }> 
      {sender === 'robot' && (
        <img className="user-image" src= {RobotProfilePicture} alt="" />
        )} 
      <div className="chat-message-text">
        {message}
      </div>
      {sender === 'user' && (
        <img className="user-image" src= {UserProfilePicture} alt="" />
        )}
    </div>
  );
}

function ChatMessages({ chatMessages }) {
  const chatMessageRef = useRef(null); //uses of hooks to make the page autoscroll


  useEffect(() => {
    const containerElem = chatMessageRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight // if the container exist make the scroll, scroll all the way to the max height of the page (bottom)
    }
  }, [chatMessages]);

  return (
    <div className="chat-messages-container" ref={chatMessageRef}>
      {chatMessages.map((chatMessage) => {
            return (
              <ChatMessage 
                message={chatMessage.message}
                sender={chatMessage.sender}
                key={chatMessage.id}
              />
            );
          })}
        </div>
  );
}

function App() {
        const array = useState([]);
        const chatMessages = array[0]; //a copy of the arrayvalue
        const setChatMessages = array[1];
        
        return (
          <div className="app-container">
            
            <ChatMessages
              chatMessages = {chatMessages}
            />
            <ChatInput
              chatMessages = {chatMessages}
              setChatMessages = {setChatMessages} 
            />
          </div>
        );
      }

export default App
