import { useState, useCallback, useEffect,useRef } from 'react'
import { Button, Card, Input, Form, Checkbox , Row, Col } from 'antd'
import { Slider } from 'antd';
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

function App() {
  const [inputPassword , setInputPassword ] = useState('2222')
  const [length, setLength] = useState()
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
 const [form] = Form.useForm()
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
  } ,[form, numberAllowed, charAllowed, setPassword])
 return (
    <>
 <div className=' grid place-content-center h-screen ' >
    <div className='my-5 grid place-content-center' >
      <h1 className=' text-slate-200 text-4xl ' >Password Generator</h1>
      </div>
     <Card
    className=' p-4 w-96'
    hoverable
   >
      <Form
      layout='vertical'
      form={form}
      >
        <Form.Item name='fieldPassword' label='Enter field' rules={[{required:true, message:"Please enter field "}]} >
          <Input placeholder='Enter field of password' />
         </Form.Item>
         <Form.Item name='password' label='Password' >
         <Input />
         </Form.Item>
        
        <Row>
          <Col sm={24} md={12} >
         <Form.Item name='number' label='Number Allowd' >
         <Checkbox onChange={(e) => handleCheckboxChange(e.target.checked, 'number')} />
         </Form.Item>
         </Col>
         <Col sm={24} md={12} >
         <Form.Item name='charr' label='Char Allowed' >
         <Checkbox  onChange={(e) => handleCheckboxChange(e.target.checked, 'charr')} />
         </Form.Item>
         </Col>
         
         </Row>
         
         <div className="icon-wrapper">
         <IconSlider min={6} max={20} value={length} setValue={setLength} />
          </div>

         <Form.Item>
          <Button>
            Click here to copy & submit
          </Button>
         </Form.Item>

      </Form>
     

    </Card>
    
    </div>
       
    </>
  )
}

export default App



