import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './components/Cart'
import Detail from './components/Detail'
import Home from './components/Home'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/:id'
          element={<Detail />}
        />
        <Route
          path='/cart'
          element={<Cart />}
        />
      </Routes>
    </div>
  )
}

export default App
