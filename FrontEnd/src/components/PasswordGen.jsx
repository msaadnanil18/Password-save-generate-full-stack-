import { useState, useCallback, useEffect, useRef } from "react";
import {
  Button,
  Input,
  Form,
  Checkbox,
  Row,
  Col,
  Slider,
  Drawer,
  Typography,
  Spin,
  notification
} from "antd";
import { PlusCircleOutlined, UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import PasswordAppear from "./PasswordAppear";
import { useParams } from "react-router-dom";

const IconSlider = (props) => {
  const { max, min, value, setValue } = props;
  const mid = Number(((max - min) / 2).toFixed(5));
  const preColorCls = value >= mid ? "" : "icon-wrapper-active";
  const nextColorCls = value >= mid ? "icon-wrapper-active" : "";
  return (
    <div className="icon-wrapper">
      <Slider {...props} onChange={setValue} value={value} />
    </div>
  );
};

function PasswordGen() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputPassword, setInputPassword] = useState();
  const [length, setLength] = useState();
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const [form] = Form.useForm();
  const params = useParams();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    form.resetFields();
  };

  form.setFieldsValue({
    password: inputPassword,
  });

  const handleCheckboxChange = (value, type) => {
    if (type === "number") {
      setNumberAllowed(value);
    } else if (type === "charr") {
      setCharAllowed(value);
    }
  };

  const sendPass = () => {
    setLoading(true);
  
    const formData = form.getFieldsValue();
    axios
      .post(`/api/password-gen/${params.id}`, formData)
      .then((response) => {
        notification.success({
          message: 'Success',
          description: 'Form data saved successfully!',
        });
      })
      .catch((error) => {
        console.log("Error", error);
        notification.error({
          message: 'Error',
          description: 'Failed to save form data!',
        });
      })
      .finally(() => {
        setLoading(false);
        onClose();
      });
  };

  const setPassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "@#&*$";
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setInputPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    setPassword();
  }, [form, numberAllowed, charAllowed, setPassword]);
  return (
    <>
      {loading ? (
        <div className=" grid place-content-center h-screen">
          <Spin />
        </div>
      ) : (
        <div>
          <div className=" p-2 flex justify-between">
            <Typography.Title
              level={3}
              style={{ color: "rgba(203, 213, 225)" }}
            >
              Generate Your Password
            </Typography.Title>
            <Button
              style={{ color: "#e9ebf0", fontWeight: "bold" }}
              className="bg-sky-400"
              icon={<PlusCircleOutlined />}
              type="primary"
              onClick={showDrawer}
            >
              Create Password
            </Button>
          </div>

          <PasswordAppear
            loading={loading}
            form={form}
            open={open}
            setOpen={setOpen}
          />
          <Drawer
            title={<Typography.Text>Create password</Typography.Text>}
            placement="right"
            onClose={onClose}
            open={open}
            footer={
              <Button type="dashed" icon={<UploadOutlined />} onClick={sendPass}>
                Save
              </Button>
            }
            // style={{backgroundColor:'#333'  }}
          >
            <Form layout="vertical" form={form} preserve={false}>
              <Form.Item
                name="fieldPassword"
                label={<Typography.Text strong>Enter field</Typography.Text>}
                rules={[{ required: true, message: "Please enter field " }]}
              >
                <Input
                  placeholder="Enter field of password" /*{style={{ backgroundColor: "#7b7d85" }} }*/
                />
              </Form.Item>
              <Form.Item
                name="password"
                label={<Typography.Text strong>Password</Typography.Text>}
                rules={[{ required: true }]}
              >
                <Input /*{style={{ backgroundColor: "#7b7d85" }} }*/ />
              </Form.Item>

              <Row>
                <Col sm={24} md={12}>
                  <Checkbox
                    // style={{ backgroundColor: "#7b7d85" }}
                    onChange={(e) =>
                      handleCheckboxChange(e.target.checked, "number")
                    }
                  >
                    Number Allowed
                  </Checkbox>
                </Col>
                <Col sm={24} md={12}>
                  <Checkbox
                    // style={{ backgroundColor: "#7b7d85" }}
                    onChange={(e) =>
                      handleCheckboxChange(e.target.checked, "charr")
                    }
                  >
                    Char Allowed
                  </Checkbox>
                </Col>
              </Row>

              <div className="icon-wrapper">
                <IconSlider
                  min={6}
                  max={20}
                  value={length}
                  setValue={setLength}
                />
              </div>
            </Form>
          </Drawer>
        </div>
      )}
    </>
  );
}

export default PasswordGen;
