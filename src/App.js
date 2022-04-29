import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import CheckUserExist from './components/CheckUserExist/CheckUserExist';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Overview from './components/Overview/Overview';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Shop from './components/Shop/Shop';
import useProducts from './hooks/useProducts';



function App() {
  const navigate = useNavigate();

  const [displayProducts, setdisplayProducts] = useState([]);
  const [products] = useProducts();
  console.log(products);




  const handleSearch = event => {
    const searchText = (event.target.value);
    const matchProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
    setdisplayProducts(matchProducts);
  }

  const search = () => {
    let input = document.getElementById('search');
    input.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        navigate("/products/" + input.value);
      }
    });
  }


  return (
    <div className="">
      <Header handleSearch={handleSearch} search={search} />

      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/home" element={<Banner />} />
        <Route path="/products" element={<Shop displayProducts={displayProducts} allProducts={products} />} />

        <Route path="/products/:product" element={<Shop displayProducts={displayProducts} allProducts={products} />} />
        <Route path="/join" element={
          <CheckUserExist>
            <Login />
          </CheckUserExist>
        } />

        <Route path="/overview" element={
          <RequireAuth>
            <Overview products={products} />
          </RequireAuth>} />
      </Routes>


    </div>
  );
}

export default App;

