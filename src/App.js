// src/App.js
import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import ProductShowcase from './components/productshow';
import Testimonials from './components/testimonials';
import Footer from './components/footer';
import About from './components/about';
import Contact from './components/contact';
import Testimonials2 from './components/testa2';
import Newsletter from './components/newslettter';
import ScrollToTop from './components/Scroll';
import ProductCard from './pages/card';
import Checkout from './pages/chechout';
import OrderConfirmation from './pages/order';
import AccountSettings from './pages/profile';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero/>
        <About />
        <ProductShowcase />
        <ProductCard image="https://images.unsplash.com/photo-1579722820308-d74e571900a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Product 1" description="Description of product 1" price="$10"/>
        <Checkout/>
        <OrderConfirmation/>
        <Testimonials />
        <Testimonials2 />
        <Contact/>
        <Newsletter/>
        <ScrollToTop/>
      </main>
      <Footer />
      <AccountSettings />
    </div>
  );
}

export default App;
