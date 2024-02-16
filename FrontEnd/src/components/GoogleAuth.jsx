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
        <h1
          style={{ color: "rgba(203, 213, 225)" }}
          className="text-3xl font-extrabold"
        >
          Generate Password
        </h1>
      </div>
      <Row>
        <Col span={8}></Col>
        <Col sm={24} md={12} lg={8}>
          <Card
            hoverable
            className="md:mt-10 p-4"
            style={{
              width: "100%",
              height: 435,
              backgroundColor: "#333",
              color: "#fff",
              border: "2px solid #555",
              borderRadius: "24px",
              boxShadow: "0 2px 6px rgba(255, 255, 255, 0.1)",
            }}
          >
            <div className="mx-14 p-5  ">
              <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    const rest = jwtDecode(credentialResponse.credential);
                    setLoading(true);
                    setGoogleAuth(rest);
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
              </GoogleOAuthProvider>
            </div>
            {navigat && navigate(`password-gen/${response?._id}`)}

            <div>
              <Form
                form={form}
                layout="vertical"
                className="w-full h-full"
                onFinish={postData}
              >
                <Form.Item
                  name="emailID"
                  label="Email Id"
                  rules={[{ required: true, message: "Please Enter Email Id" }]}
                >
                  <Input style={{ backgroundColor: "#7b7d85" }} />
                </Form.Item>
                <Form.Item
                  name="passName"
                  label="Password"
                  rules={[{ required: true, message: "Please enter password" }]}
                >
                  <Input style={{ backgroundColor: "#7b7d85" }} />
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
        <Col span={8}></Col>
      </Row>
    </>
  );
};

export default GoogleAuth;
