import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GoogleAuth from './components/GoogleAuth.jsx'
import PasswordGen from './components/PasswordGen.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <Router>
     <App/>
      <Routes>
      <Route path="/PasswordGen" element={<PasswordGen />} />
      </Routes>
    </Router>
    
  </React.StrictMode>,

  
)
