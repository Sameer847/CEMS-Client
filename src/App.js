import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/PreLoginHeader';
import About from './Screens/About/About';
import Login from './Screens/Auth/Login';
import Register from './Screens/Auth/Register';
import Contact from './Screens/Contact/Contact';
import Events from './Screens/Events/Events';
import Home from './Screens/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<About />} />
        </Route>

        <Route path='/auth/login' element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        
        <Route path='*' element={
          <div>
            <h1>404 Page not found</h1>
          </div>
        } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
