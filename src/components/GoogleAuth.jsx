import React from "react";
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useNavigate} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PasswordGen from "./PasswordGen";

const GoogleAuth = () => {
    const navigate = useNavigate()
 const clientId = "315101804831-f8f3hmhq5ajf00ouc4jkvuniqoq689e5.apps.googleusercontent.com"
  
   return(
        <>
        
        <div>
        <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
         onSuccess={credentialResponse => {
         const rest = jwtDecode(credentialResponse.credential)
         console.log(rest)
         
         navigate("/PasswordGen")
      }}
       onError={() => {
       console.log('Login Failed')
      }}
   />;

    </GoogleOAuthProvider>
    </div>
 </>
    )
}

export default GoogleAuth