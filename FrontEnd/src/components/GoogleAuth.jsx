import React, { useEffect, useState } from "react";
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useNavigate} from "react-router-dom";
import { Button, Card, Input,Form, Row,Col } from "antd";
import axios from 'axios';


const GoogleAuth = () => {
const[googleAuth, setGoogleAuth] = useState("hloo")
  
const postData = () => {
        axios.post("/api/login", googleAuth)
       
    }
    
    const navigate = useNavigate()
 const clientId = "315101804831-f8f3hmhq5ajf00ouc4jkvuniqoq689e5.apps.googleusercontent.com"
  
   return(
        <>
    <Row>
    <Col span={8}></Col>
    <Col sm={24} md={12} lg={8} >
     <Card
        hoverable
        className="md:mt-10 w-96 p-4 "
       >
           <Form
           layout="vertical"
           className="w-full h-full"
           >
            <Form.Item name='emailID' label='Email Id' rules={[{required:true , message:"Please Enter Email Id"}]}  >
                <Input />
            </Form.Item>
            <Form.Item name='passName' label='Password' rules={[{required:true , message:'Please enter password'}]} >
                <Input  />
            </Form.Item>

            <Form.Item >
                <Button onClick={postData} className="bg-sky-400" type="primary" >Submit</Button>
            </Form.Item>

            </Form> 
        <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
         onSuccess={credentialResponse => {
         const rest = jwtDecode(credentialResponse.credential)
         console.log(rest)
         setGoogleAuth(rest)
         
         navigate("/password-gen")
      }}
       onError={() => {
       console.log('Login Failed')
      }}
   />

    </GoogleOAuthProvider>

   
    </Card>
    </Col>
    <Col span={8}></Col>
    </Row>
    
 </>

    )}

export default GoogleAuth