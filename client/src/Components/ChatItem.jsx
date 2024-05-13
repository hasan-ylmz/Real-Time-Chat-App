import React from 'react';
import "../index.css"

function ChatItem({ item, isSentByCurrentUser }) {
  const defaultBackgroundColor = isSentByCurrentUser ? 'bg-purple-200' : 'bg-purple-900';
  
  const messageLength = item.message.length;
  let widthClass = 'w-1/4'; 

  if (messageLength > 100 || messageLength * 10 > window.innerWidth / 4) {
    widthClass = 'w-100';
  }

  return (
    <div className={`rounded-lg m-4 p-3 ${defaultBackgroundColor} ${widthClass} ${item.fromMe ? "ml-auto " : ""} hover:bg-purple-700 transition duration-300 ease-in-out `}>
      {item.message}
    </div>
  );
}

export default ChatItem;
