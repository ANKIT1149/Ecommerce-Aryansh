import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Cart, Dashboard, ErrorPage, Home, Order } from './Pages'
import MyState from './context/data/MyState'

function App() {


  return (
    <MyState>
      <Router>
         <Routes>
           <Route path='/' element={<Home />} />
           <Route path='order' element={<Order />} />
           <Route path='cart' element={<Cart />} />
           <Route path='dashboard' element={<Dashboard />}/>
           <Route path='/*' element={<ErrorPage />} />
         </Routes>
      </Router>
    </MyState>
  )
}

export default App
