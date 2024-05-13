import React, { useState } from 'react';
import { sendMessage } from '../socketApi';
import { useChat } from '../context/chatContext';

function ChatForm() {
  const [message, setMessage] = useState("");

  const {setMessages} =useChat();

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    
    setMessages((prevState) => [...prevState, {message,fromMe:true}])
    sendMessage(message); 
    setMessage("")
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        placeholder="Mesaj Gönder"
        className="flex-grow px-4 py-4 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500"
        value={message}
        onChange={handleChange}
      />

      <button
        type="submit"
        className=" px-8 py-4 bg-purple-700 text-white rounded-lg border border-transparent focus:outline-none focus:border-purple-500 transition duration-300 ease-in-out hover:bg-purple-800 "
      >
        Click
      </button></form>
  );
}

export default ChatForm;
