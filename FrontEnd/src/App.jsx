import React, { useEffect } from 'react'
import PasswordGen from './components/PasswordGen'
import GoogleAuth  from './components/GoogleAuth'
import {  Routes, Route } from 'react-router-dom';
import axios from 'axios';


const App = () => {


  useEffect(() => {
   
      axios.get('/api/jokes')
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error, "err")
      }) 
    

    }, []); 




 return (
    <>
      
     <div className='my-5 grid place-content-center' >
      <h1 className=' text-slate-900 text-4xl font-extrabold ' >Password Generator</h1>
      </div>
  
      <Routes>
      <Route path="/" element={<GoogleAuth />} />
      <Route path="/password-gen" element={<PasswordGen />} />
      </Routes>
    </>
  )
}

export default App



