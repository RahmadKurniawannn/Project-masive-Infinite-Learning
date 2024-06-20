import React, { useState, useEffect, useRef } from 'react';
import Group16 from '../assets/Group 16.png';
import axios from 'axios';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const chatEndRef = useRef(null);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    if (message.trim()) {
      // Add user message to chat history
      setChatHistory([...chatHistory, { sender: 'user', message }]);

      try {
        const res = await axios.post('http://localhost:5000/predict', {
          input_data: message,
        });

        const botMessage = res.data.predictions[0].values[0][0]; // Adjust this based on the response format
        // Add bot response to chat history
        setChatHistory([...chatHistory, { sender: 'user', message }, { sender: 'bot', message: botMessage }]);
        console.log('Response from Flask:', res.data);
      } catch (error) {
        console.error('Error sending message:', error);
      }

      setMessage('');
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);

  return (
    <div className="flex flex-col items-center p-4 rounded-lg fixed bottom-0 right-0 left-0 mr-20 mb-4 w-full max-w-3xl h-full max-h-screen">
      <div className="relative flex-grow w-full h-full">
        <div className="chat-history p-4 border border-gray-300 rounded-lg overflow-y-scroll h-full mb-4">
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className={`p-2 my-2 rounded-lg max-w-xs ${chat.sender === 'user' ? 'bg-blue-500 text-white self-end ml-auto' : 'bg-gray-200 text-black self-start mr-auto'}`}
            >
              {chat.message}
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
        <div className="flex items-center">
          <input
            type="text"
            value={message}
            onChange={handleInputChange}
            placeholder="Ketik sebuah pesan..."
            className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
          />
          <button
            onClick={handleSendMessage}
            className="p-2 bg-blue-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <img src={Group16} alt="Send" className='w-8 h-8 object-contain' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageInput;
