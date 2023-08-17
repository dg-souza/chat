import { BrowserRouter, Routes, Route } from 'react-router-dom'
import io from 'socket.io-client'

import Login from './pages/Login'
import Chat from './pages/Chat'

import {
  Container
} from './styles/GlobalStyle'

const App = () => {
  const socket = io('http://localhost:3001')

  return(
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login socket={socket} />} />
          <Route path='/chat/:id' element={<Chat socket={socket} />} />
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App