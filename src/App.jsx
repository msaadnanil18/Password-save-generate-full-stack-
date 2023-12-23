import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button, Card, Input, Form } from 'antd'

function App() {
  const [inputValue , setInputValue ] = useState('2222')
   const [form] = Form.useForm()
form.setFieldsValue({
    password: inputValue ,
  });
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

