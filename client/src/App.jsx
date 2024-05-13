import Container from './Components/Container'
import { ChatProvider } from './context/chatContext'

function App() {
  
  return (
    <ChatProvider>
      <Container/>
    
    </ChatProvider>
  )
}

export default App
