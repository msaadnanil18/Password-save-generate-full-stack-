import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table,} from 'antd';

const PasswordAppear = (loading) => {
  const [authData, setAuthData] = useState([]);
 

  useEffect(() => {
    axios.get('/api/password-get')
      .then((res) => {
        console.log(res.data);
        setAuthData(res.data);
      })
      .catch((error) => {
        console.log(error, "err");
      });
  }, [loading]);

  const columns = [
    {
      title: 'Password',
      dataIndex: 'password',
      key: 'password',
    },
    {
      title: 'Field Password',
      dataIndex: 'fieldPassword',
      key: 'actions',
     
    },
  ];

  

  return (
    <div>
      <Table dataSource={authData} columns={columns} />

      </div>
  );
};

export default PasswordAppear;

