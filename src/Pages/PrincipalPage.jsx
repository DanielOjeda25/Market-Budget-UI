import Home from './Home'
import Register from './Register'
import Login from './Login'
import Cart from './Cart'
import ProductList from './ProductList'
import ProductPage from './ProductPage'
import {Routes, Route } from 'react-router-dom'

const PrincipalPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/productsItem' element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default PrincipalPage