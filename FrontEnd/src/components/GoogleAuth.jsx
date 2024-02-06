import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { Button, Card,  Form, Row, Col } from "antd";
import axios from "axios";

const GoogleAuth = () => {
  const { form } = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [navigat, setNavigat] = useState(false);
  const [response, setResponse] = useState();
  const [googleAuth, setGoogleAuth] = useState([]);

  const postData = () => {
    axios
      .post("/api/login", googleAuth)
      .then((response) => {
        setNavigat(true);
        setResponse(response?.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const navigate = useNavigate();
  const clientId =
    "315101804831-f8f3hmhq5ajf00ouc4jkvuniqoq689e5.apps.googleusercontent.com";

  return (
    <>
      <div className=" p-2">
        <h1 style={{ color: "#8a8686" }} className="text-3xl font-extrabold">
          Generate Password
        </h1>
      </div>
      <Row>
        <Col span={8}></Col>
        <Col sm={24} md={12} lg={8}>
          <Card hoverable className="md:mt-10 w-96 p-4 ">
            <div className="mx-8">
              <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    const rest = jwtDecode(credentialResponse.credential);
                    setLoading(true);
                    setGoogleAuth(rest);
                  }}
                  onError={() => {
                    //  console.log('Login Failed')
                  }}
                />
              </GoogleOAuthProvider>
            </div>
            {navigat && navigate(`/password-gen/${response?._id}`)}

            <div className="grid place-content-center my-8">
              {loading && (
                <Button
                  className="bg-sky-400 "
                  type="primary"
                  onClick={postData}
                >
                  Submit
                </Button>
              )}
            </div>
          </Card>
        </Col>
        <Col span={8}></Col>
      </Row>
    </>
  );
};

export default GoogleAuth;

// import React, { useEffect, useState } from "react";
// import { GoogleLogin } from '@react-oauth/google';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import { jwtDecode } from "jwt-decode";
// import { useNavigate } from "react-router-dom";
// import { Button, Card, Input, Form, Row, Col } from "antd";
// import axios from 'axios';

// const GoogleAuth = () => {
//   const [form] = Form.useForm();  // Use form instead of { form }
//   const [googleAuth, setGoogleAuth] = useState([]);
//   const navigate = useNavigate();
//   const clientId = "315101804831-f8f3hmhq5ajf00ouc4jkvuniqoq689e5.apps.googleusercontent.com";

//   const postData = () => {
//     const formData = form.getFieldsValue();
//     axios.post('/api/login', formData)
//       .then(response => {
//         console.log('Server response:', response.data);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }

//   return (
//     <>
//       <Row>
//         <Col span={8}></Col>
//         <Col sm={24} md={12} lg={8} >
//           <Card
//             hoverable
//             className="md:mt-10 w-96 p-4 "
//             cover={<div className=" gap-x-5" >
//               <GoogleOAuthProvider clientId={clientId}>
//               <GoogleLogin
//                 onSuccess={credentialResponse => {
//                   const rest = jwtDecode(credentialResponse.credential);
//                   console.log(rest);
//                   setGoogleAuth(rest);
//                   postData();
//                   navigate("/password-gen");
//                 }}
//                 onError={() => {
//                   console.log('Login Failed');
//                 }}
//               />
//             </GoogleOAuthProvider>
//             </div>}
//           >
//             <Form
//               form={form}  // Use form here
//               layout="vertical"
//               className="w-full h-full"
//               onFinish={postData}
//             >
//               <Form.Item name='emailID' label='Email Id' rules={[{ required: true, message: "Please Enter Email Id" }]} >
//                 <Input />
//               </Form.Item>
//               <Form.Item name='passName' label='Password' rules={[{ required: true, message: 'Please enter password' }]} >
//                 <Input />
//               </Form.Item>

//               <Button className="bg-sky-400" type="primary" htmlType="submit">Submit</Button>

//             </Form>

//           </Card>
//         </Col>
//         <Col span={8}></Col>
//       </Row>
//     </>
//   );
// }

// export default GoogleAuth;

// form +++++++
