import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";
import Products from "./components/Products";
import { Footer } from "./components/Footer";
import CartModal from "./components/CartModal";
import { initialProducts } from "./data/mockData";

function App() {
  const [productos, setProductos] = useState(initialProducts);
  const [categories, setCategories] = useState(["RELOJES", "AURICULARES", "CARGADORES", "CABLES"]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product, quantity) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prev => prev.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex bg-white text-gray-800 font-sans">
        <div className="flex-1 flex flex-col">
          <NavBar cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={
                <Products
                  addToCart={addToCart}
                  productos={productos}
                  setProductos={setProductos}
                  categories={categories}
                  setCategories={setCategories}
                  isAdmin={false}
                />
              } />
              <Route path="/admin" element={
                <Products
                  addToCart={addToCart}
                  productos={productos}
                  setProductos={setProductos}
                  categories={categories}
                  setCategories={setCategories}
                  isAdmin={true}
                />
              } />
            </Routes>
          </main>
          <Footer />
        </div>

        {isCartOpen && (
          <CartModal
            cartItems={cartItems}
            onClose={() => setIsCartOpen(false)}
            onRemove={removeFromCart}
            onUpdateQuantity={updateQuantity}
            onClearCart={() => setCartItems([])}
          />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
