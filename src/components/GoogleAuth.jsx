import React from "react";
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useNavigate} from "react-router-dom";
import { Button, Card, Input,Form } from "antd";

const GoogleAuth = () => {
    const navigate = useNavigate()
 const clientId = "315101804831-f8f3hmhq5ajf00ouc4jkvuniqoq689e5.apps.googleusercontent.com"
  
   return(
        <>
        
        
        <Card
        
        hoverable
        style={{width:600}}
        >
           <Form
           layout="vertical"
           >
            <Form.Item name='idName' label='Id' rules={[{required:true , message:"Please Enter Id"}]}  >
                <Input />
            </Form.Item>
            <Form.Item name='passName' label='Password' rules={[{required:true , message:'Please enter password'}]} >
                <Input  />
            </Form.Item>

            </Form> 
        <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
         onSuccess={credentialResponse => {
         const rest = jwtDecode(credentialResponse.credential)
         console.log(rest)
         
         navigate("/password-gen")
      }}
       onError={() => {
       console.log('Login Failed')
      }}
   />

    </GoogleOAuthProvider>

   
    </Card>
 </>
    )
}

export default GoogleAuth