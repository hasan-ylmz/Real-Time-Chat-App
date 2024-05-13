import React from 'react'
import { useChat } from '../context/chatContext'
import ChatItem from './ChatItem';
import ScrollableFeed from "react-scrollable-feed"

function ChatList() {
  const { messages } = useChat();

  return (

    <div className='chatList'>
      <ScrollableFeed forceScroll={true}>
      <h1 className='flex justify-center pt-3 '>Chat App</h1>
      {
        messages.map((item, key) => <ChatItem key={key} item={item} />)
      }

      </ScrollableFeed>
      </div >
  )
}

export default ChatList