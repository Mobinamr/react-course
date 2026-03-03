import './App.css'
import { ChatInput } from './components/ChatInput';
import { ChatMessage } from './components/ChatMessage';
import ChatMessages from './components/ChatMessages';
import { useState } from 'react';

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
