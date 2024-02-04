import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { reduxApi } from './components/reduxToolkit/reduxApi.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={reduxApi} >
    <App/>
    </Provider>
   
   </BrowserRouter>
    
  </React.StrictMode>,

  
)
