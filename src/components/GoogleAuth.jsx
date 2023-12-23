import React from "react";
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useNavigate} from "react-router-dom";
import { Button, Card, Input,Form, Row,Col } from "antd";

const GoogleAuth = () => {
    const navigate = useNavigate()
 const clientId = "315101804831-f8f3hmhq5ajf00ouc4jkvuniqoq689e5.apps.googleusercontent.com"
  
   return(
        <>
       <Row>
         <Col span={8}></Col>
        <Col sm={24} md={12} lg={8} >
         <Card
        hoverable
        className="md:mt-20"
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

            <Form.Item >
                <Button className="bg-sky-400" type="primary" >Submit</Button>
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
    </Col>
    <Col span={8}></Col>
    </Row>
    
 </>

    )}

export default GoogleAuth