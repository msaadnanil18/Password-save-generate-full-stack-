import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button, Card, Input, Form } from 'antd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <div className=' grid place-content-center h-screen ' >
      <div className='m-10' >
      <h1 className=' text-slate-200  ' >Password Generator</h1>
      </div>
   
    <Card
    className=' p-4 w-96'
    hoverable
    
    >
      <Form
      layout='vertical'
      >
        <Form.Item name='fieldPassword' label='Enter field' rules={[{required:true, message:"Please enter field "}]} >
          <Input placeholder='Enter field of password' />
         </Form.Item>
         <Form.Item name='password' label='Password' >
          <Input />
         </Form.Item>

      </Form>

    </Card>
    </div>
       
    </>
  )
}

export default App
