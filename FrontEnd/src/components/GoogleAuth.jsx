import React, { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { Button, Card, Form, Row, Col, Input } from "antd";
import axios from "axios";

const GoogleAuth = () => {
  const { form } = Form.useForm();
  const [loading, setLoading] = useState(false);

  const [googleAuth, setGoogleAuth] = useState([]);

  const postData = async (payload) => {
    const value = { ...payload };

    try {
      const response = await axios.post(
        "/api/login",
        (googleAuth || []).length === 1 ? googleAuth : value
      );
      navigate(`password-gen/${response?._id}`);

      navigate(`password-gen/${response?.data?._id}`);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const navigate = useNavigate();
  const clientId =
    "315101804831-f8f3hmhq5ajf00ouc4jkvuniqoq689e5.apps.googleusercontent.com";

  return (
    <>
      <div className=" p-2">
        <h1 className="text-3xl font-extrabold">Generate Password</h1>
      </div>
      <Row>
        <Col sm={6}></Col>
        <Col xs={24} sm={12}>
          <Card
            hoverable
            className="md:mt-10 p-4"
            style={{
              width: "100%",
              height: 435,
              // backgroundColor: "#333",
              // color: "#fff",
              // border: "2px solid #555",
              borderRadius: "24px",
              boxShadow: "0 2px 6px rgba(255, 255, 255, 0.1)",
            }}
          >
            <div className=" grid place-content-center p-5  ">
              <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    const response = jwtDecode(credentialResponse.credential);
                    setLoading(true);
                    setGoogleAuth(response);
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
              </GoogleOAuthProvider>
            </div>

            <div>
              <Form
                form={form}
                layout="vertical"
                className="w-full h-full"
                onFinish={postData}
              >
                <Form.Item
                  name="email"
                  label="email"
                  rules={[{ required: true, message: "Please Enter Email Id" }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="name"
                  label="name"
                  rules={[{ required: true, message: "Please enter password" }]}
                >
                  <Input />
                </Form.Item>

                <Button
                  icon={<PlusCircleOutlined />}
                  style={{ color: "#e9ebf0", fontWeight: "bold" }}
                  className="bg-sky-400"
                  type="primary"
                  htmlType="submit"
                >
                  Submit
                </Button>
              </Form>
            </div>

            <div className="grid place-content-center my-8">
              {loading && (
                <Button
                  style={{ color: "#e9ebf0", fontWeight: "bold" }}
                  className="bg-sky-400"
                  type="primary"
                  onClick={postData}
                >
                  Submit
                </Button>
              )}
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default GoogleAuth;
