import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Addproduct, Cart, Dashboard, ErrorPage, Home, Login, Order, Productinfo, Signup, UpdateProduct } from './Pages'
import MyState from './context/data/MyState'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {


  return (
    <MyState>
      <Router>
         <Routes>
           <Route path='/' element={<Home />} />
           <Route path='order' element={<Order />} />
           <Route path='dashboard' element={<Dashboard />}/>
           <Route path='/login' element={<Login />} />
           <Route path='/signup' element={<Signup />} />
           <Route path="/productinfo/:id" element={<Productinfo />} />
           <Route path="/cart" element={<Cart />} />
           <Route path='/addproduct' element={<Addproduct />} />
           <Route path='/updateproduct' element={<UpdateProduct />} />
           <Route path='/*' element={<ErrorPage />} />
         </Routes>
         <ToastContainer />
      </Router>
    </MyState>
  )
}

export default App
