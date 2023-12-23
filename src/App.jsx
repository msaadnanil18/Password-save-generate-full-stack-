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
    numberallowed:numberAllowed,
    charallowed:charAllowed
  });


  const setPassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "@#&*$"
    for (let i = 1; i <length; i++) {
     let char = Math.floor(Math.random() * str.length + 1)
     pass += str.charAt(char)
    }
  }, [])
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
         <Form.Item name='numberallowed' label='Number Allowd' >
         <Checkbox/>
         </Form.Item>
         </Col>
         <Col sm={24} md={12} >
         <Form.Item name='charallowed' label='Char Allowed' >
         <Checkbox/>
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



// import { useState, useEffect } from 'react';

// import { Button, Card, Input, Form } from 'antd';

// function App() {
//   const [form] = Form.useForm(); // Access the form instance

//   useEffect(() => {
//     // Set the initial value for the field inside the form
 
//   }, [form]);

//   return (
//     <>
//       <div className='grid place-content-center h-screen'>
//         <div className='my-5 grid place-content-center'>
//           <h1 className='text-slate-200 text-4xl'>Password Generator</h1>
//         </div>
//         <Card className='p-4 w-96' hoverable>
//           <Form
//             layout='vertical'
//             form={form} // Pass the form instance
//           >
//             <Form.Item
//               name='fieldPassword'
//               label='Enter field'
//               rules={[{ required: true, message: 'Please enter field' }]}
//             >
//               <Input placeholder='Enter field of password' />
//             </Form.Item>
//             <Form.Item name='password' label='Password'>
//               <Input />
//             </Form.Item>
//           </Form>
//         </Card>
//       </div>
//     </>
//   );
// }

// export default App;

