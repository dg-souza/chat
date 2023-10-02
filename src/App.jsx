import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import io from 'socket.io-client'
import PrivateRoute from './pages/PrivateRoute'

import Login from './pages/Login'
import Chat from './pages/Chat'
import Loading from './components/Loading'

import {
  Container
} from './styles/GlobalStyle'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const socket = io('http://localhost:3001')
  const [isLoading, setIsLoading] = useState(false)

  socket.off('connect')

  socket.on('connect', () => {
    setIsLoading(false)
  })

  useEffect(() => {
    socket.connected === false ? setIsLoading(true) : setIsLoading(false)
    // eslint-disable-next-line
  }, [])

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login socket={socket} />} />
          <Route path='/chat/:id' element={
            <PrivateRoute>
              <Chat socket={socket} />
            </PrivateRoute>
          } />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </Container>
  )
}

export default App