import { useState, useCallback, useEffect,useRef } from 'react'
import PasswordGen from './components/PasswordGen'

const App = () => {
 return (
    <>
     <div className='my-5 grid place-content-center' >
      <h1 className=' text-slate-900 text-4xl ' >Password Generator</h1>
      </div>
   <PasswordGen/>
       
    </>
  )
}

export default App



