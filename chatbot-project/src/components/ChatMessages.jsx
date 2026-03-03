import { useRef, useEffect } from 'react';
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css';

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

export default ChatMessages;