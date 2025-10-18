import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './Components/AuthContext.jsx'
import { useMediaQuery } from 'react-responsive';
import Navbar from './Components/Navbar';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import Dashboard from './Components/Dashboard.jsx';
import ProtectedRoute from './Components/ProtectedRoute';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  const { user } = useAuth();

  return (
    <Router>
      {user && <Navbar />}

      <div style={{ marginLeft: user ? 220 : 0, padding: 20 }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
          <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
          <Route path="/Dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;