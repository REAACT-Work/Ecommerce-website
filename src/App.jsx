import './App.css'
import Layout from './Components/layout'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './Pages/home'
import Shop from "./Pages/shop"
import Blog from './Pages/blog'
import About from './Pages/about'
import Contact from './Pages/contact'
import Cart from './Pages/cart'
import Account from'./Pages/account'
import Wishlist from './Pages/wishlist'



function App() {
  
  return <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path="shop" element={<Shop />}/>
        <Route path='blog' element={<Blog />}/>
        <Route path='about' element={<About />}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='account' element={<Account/>}/>
        <Route path='wishlist' element={<Wishlist />}/>
        

      </Route>
    </Routes>
    </BrowserRouter>
    
      
    </>
    }

export default App
