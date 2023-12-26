import { useState, useCallback, useEffect,useRef } from 'react'
import { Button, Card, Input, Form, Checkbox , Row, Col,Slider, Drawer,Typography, } from 'antd'
import {PlusCircleOutlined} from '@ant-design/icons';
import axios from 'axios';
import PasswordAppear from './PasswordAppear';


const IconSlider = (props) => {
  const { max, min , value, setValue } = props;
  const mid = Number(((max - min) / 2).toFixed(5));
  const preColorCls = value >= mid ? '' : 'icon-wrapper-active';
  const nextColorCls = value >= mid ? 'icon-wrapper-active' : '';
  return (
    <div className="icon-wrapper">
      <Slider {...props} onChange={setValue} value={value} />
     </div>
  );
};

function PasswordGen() {
  const [open, setOpen] = useState(false);
  const [authData, setAuthData] = useState([]) 
  const[loading, setloading] = useState(false)
  const [form] = Form.useForm()
  
  

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const [inputPassword , setInputPassword ] = useState()
  const [length, setLength] = useState()
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
 
  
 
form.setFieldsValue({
    password: inputPassword,
    
  });

 const handleCheckboxChange = (value, type) => {

  if (type === 'number') {
    setNumberAllowed(value);
  } else if (type === 'charr') {
    setCharAllowed(value);
  }
};


const sendPass = () => {
    const formData = form.getFieldsValue();
    axios.post("/api/password-gen", formData)
    .then((response) =>{
     setloading(true)
      console.log('Server response:', response.data)
     
    })
    .catch((error) => {
      console.log("Error", error)
    })
  }

  useEffect(() => {
   
    axios.get('/api/auth')
    .then((res) => {
      console.log(res.data)
      setAuthData(res.data)
    })
    .catch((error) => {
      console.log(error, "err")
    }) 
  

  }, []); 

  const setPassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "@#&*$"
    for (let i = 1; i <length; i++) {
     let char = Math.floor(Math.random() * str.length + 1)
     pass += str.charAt(char)
    }
    setInputPassword(pass)
  }, [length, numberAllowed, charAllowed])

  useEffect(() => {
    setPassword()
    
  } ,[form, numberAllowed, charAllowed, setPassword,  ])
 return (
    <>
    <Typography.Title level={3} className='mx-5' >
     <div style={{display:"Flex"}} >welcome:{authData.map((e,i) => {
      return(
      <div key={i}>
    
    {" "} {e.name}
    
      </div>
      )
    } ) }</div>
   </Typography.Title>


   <Row >
  <Col sm={24} md={12} lg={12} >
   <PasswordAppear  loading={loading} />
   </Col>
  
   <Col  sm={24} md={12} lg={12} >
    <div className='hidden md:block float-right mx-5' >
   
   <Card
    className=' p-4 w-96'
    hoverable
   >
      <Form
     layout="vertical"
    //  onFinish={sendPass}
     form={form}
      >
        <Form.Item name='fieldPassword' label='Enter field' rules={[{required:true, message:"Please enter field "}]} >
          <Input placeholder='Enter field of password' />
         </Form.Item>
         <Form.Item name='password' label='Password'rules={[{required:true}]} >
         <Input />
         </Form.Item>
        
        <Row>
          <Col sm={24} md={12} >
       
         <Checkbox onChange={(e) => handleCheckboxChange(e.target.checked, 'number')} >
          char Allowed
         </Checkbox>
       
         </Col>
         <Col sm={24} md={12} >
       
         <Checkbox  onChange={(e) => handleCheckboxChange(e.target.checked, 'charr')} >
          Number Allowed
         </Checkbox>
        
         </Col>
         
         </Row>
         
         <div className="icon-wrapper">
         <IconSlider min={6} max={20} value={length} setValue={setLength} />
          </div>

          <Button
          onClick={sendPass}
          >
            Click here to copy & submit
          </Button>
      

      </Form>
     </Card>
    
   </div>
   </Col>
   </Row>


   {/* for mobile */}
 <div className=' md:hidden float-right mx-5 ' >
      <Button className='bg-sky-400' icon={<PlusCircleOutlined />} type="primary" onClick={showDrawer}>
       Create Password
      </Button>
  </div>    
  <Drawer title="Create password" placement="right" onClose={onClose} open={open}>
  
      <Form
      layout='vertical'
      form={form}
      >
        <Form.Item name='fieldPassword' label='Enter field' rules={[{required:true, message:"Please enter field "}]} >
          <Input placeholder='Enter field of password' />
         </Form.Item>
         <Form.Item name='password' label='Password' rules={[{required:true}]} >
         <Input />
         </Form.Item>
        
        <Row>
          <Col sm={24} md={12} >
        
         <Checkbox onChange={(e) => handleCheckboxChange(e.target.checked, 'number')} >
          Number Allowed
         </Checkbox>
        
         </Col>
         <Col sm={24} md={12} >
        
         <Checkbox  onChange={(e) => handleCheckboxChange(e.target.checked, 'charr')} >
          Char Allowed
         </Checkbox>
        
         </Col>
         
         </Row>
         
         <div className="icon-wrapper">
         <IconSlider min={6} max={20} value={length} setValue={setLength} />
          </div>

         <Form.Item>
          <Button 
          onClick={sendPass}
          >
            Click here to copy & submit
          </Button>
         </Form.Item>

      </Form>
    
    </Drawer>

    {/* For mobile */}
       
    </>
  )
}

export default PasswordGen



