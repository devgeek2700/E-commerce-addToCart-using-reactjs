import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Check if the user is already logged in
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://dummyjson.com/auth', {
        // provide login credentials
        username: 'your_username',
        password: 'your_password',
      });

      const { token } = response.data;
      setToken(token);
      setIsLoggedIn(true);

      // Save token to localStorage
      localStorage.setItem('token', token);

    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const handleLogout = () => {
    // Clear token from state and localStorage
    setToken('');
    setIsLoggedIn(false);
    localStorage.removeItem('token');
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products', error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchProducts();
    }
  }, [isLoggedIn]);

  const handleSearch = (searchTerm) => {
    // Implement search logic
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  const handleFilter = (minPrice, maxPrice) => {
    // Implement filter logic
    const filteredProducts = products.filter(product =>
      product.price >= minPrice && product.price <= maxPrice
    );
    setProducts(filteredProducts);
  };

  const addToCart = (productId) => {
    // Implement adding to cart logic
    const productToAdd = products.find(product => product.id === productId);
    setCart(prevCart => [...prevCart, productToAdd]);
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <button onClick={handleLogout}>Logout</button>
          <h1>Welcome to the Home page</h1>
          <input type="text" placeholder="Search Products" onChange={(e) => handleSearch(e.target.value)} />
          <label>Filter by Price:</label>
          <input type="number" placeholder="Min Price" onChange={(e) => setMinPrice(e.target.value)} />
          <input type="number" placeholder="Max Price" onChange={(e) => setMaxPrice(e.target.value)} />
          <button onClick={() => handleFilter(minPrice, maxPrice)}>Filter</button>
          <div>
            {products.map(product => (
              <div key={product.id}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <button onClick={() => addToCart(product.id)}>Add to Cart</button>
              </div>
            ))}
          </div>
          <div>
            Cart Count: {cart.length} | Total Amount: ${cart.reduce((total, product) => total + product.price, 0)}
          </div>
        </>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default App;
