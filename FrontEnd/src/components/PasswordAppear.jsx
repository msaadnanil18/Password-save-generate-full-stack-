import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Spin } from "antd";
import { useSelector } from "react-redux";

const PasswordAppear = (load) => {
  const [authData, setAuthData] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  const apiResponse = useSelector((state) => state.apiResponse);

  useEffect(() => {
    axios
      .get(`/api/auth/${apiResponse._id}`)
      .then((res) => {
        setAuthData(res.data?.passwordHistory);
        setDataLoading(true);
      })
      .catch((error) => {
        console.log(error, "err");
      })
      .finally(() => {
        setDataLoading(false);
      });
  }, [load]);
 
  const columns = [
    {
      title: "Field Password",
      dataIndex: "fieldPassword",
      key: "actions",
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
    },
  ];

  return (
    <div>
      {dataLoading && loading ? (
         <div className=" grid place-content-center h-screen">
         <Spin />
       </div>
      ) : (
        <Table dataSource={authData} columns={columns} />
      )}
    </div>
  );
};

export default PasswordAppear;
