// App.js
import React from 'react';
import './App.css'; // Import global styles if needed
import Header from './Header';
import Navbar from './Navbar';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;