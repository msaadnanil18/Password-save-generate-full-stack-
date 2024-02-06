import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Spin, Button, Tag, message } from "antd";
import { DeleteFilled, CopyOutlined, EditFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { userData, setUserData } from "./reduxToolkit/apiSlice";
import { useNavigate } from "react-router-dom";
const PasswordAppear = (load) => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [authData, setAuthData] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // const logoutData = useSelector((state) => state.setUserData);
  dispatch(userData(authData));

  const logout = () => {
    setAuthData(undefined);
    navigate("/");
    location.reload();
  };
  dispatch(setUserData(logout));
  useEffect(() => {
    if (params) {
      axios
        .get(`/api/auth/${params.id}`)
        .then((res) => {
          setAuthData(res.data);
          setDataLoading(true);
        })
        .catch((error) => {
          console.log(error, "err");
        })
        .finally(() => {
          setDataLoading(false);
        });
    }
  }, [params, deleteLoading]);

  const deletePsssword = (id) => {
    setDeleteLoading(true);
    axios
      .delete(`/api/password-delete/${params.id}/${id}`)
      .then()
      .catch()
      .finally(() => {
        setDeleteLoading(false)
      });
  };
  const copyPassword = (password) => {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        message.success("Password copied to clipboard!");
      })
      .catch((error) => {
        message.info("Unable to copy password");
      });
  };
  const columns = [
    {
      title: "Field Password",
      dataIndex: "fieldPassword",
      key: "actions",
    },
    {
      title: "Password",
      key: "password",
      render: (rowData) => (
        <div>
          <Tag color="#87d068">{rowData?.password}</Tag>
          <Button
            icon={<CopyOutlined />}
            onClick={() => copyPassword(rowData?.password)}
          />
        </div>
      ),
    },

    {
      title: "",
      key: "edit",
      render: () => (
        <Button type="dashed" icon={<EditFilled />}>
          Edit
        </Button>
      ),
    },
    {
      title: "",
      key: "delete",
      render: (rowData) => (
        <Button
          
          onClick={() => deletePsssword(rowData?._id)}
          icon={<DeleteFilled />}
        />
      ),
    },
  ];

  return (
    <div>
      {dataLoading  ? (
        <div className=" grid place-content-center h-screen">
          <Spin />
        </div>
      ) : (
        <div className="p-2">
          <Table
            dataSource={authData?.passwordHistory}
            columns={columns}
            size="small"
          />
        </div>
      )}
    </div>
  );
};

export default PasswordAppear;
