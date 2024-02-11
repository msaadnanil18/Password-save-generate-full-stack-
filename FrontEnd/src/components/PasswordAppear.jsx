import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Spin, Button, Tag, message, Popconfirm } from "antd";
import {
  DeleteFilled,
  CopyOutlined,
  EditFilled,
  ReloadOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { userData, setUserData } from "./reduxToolkit/apiSlice";
import { useNavigate } from "react-router-dom";
const PasswordAppear = ({ loading, form, open, setOpen }) => {
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

  const fetchData = () => {
    setDataLoading(true);
    axios
      .get(`/api/auth/${params.id}`)
      .then((res) => {
        setAuthData(res.data);
      })
      .catch((error) => {
        console.log(error, "err");
      })
      .finally(() => {
        setDataLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [params, deleteLoading]);

  const deletePsssword = (id) => {
    setDeleteLoading(true);
    axios
      .delete(`/api/password-delete/${params.id}/${id}`)
      .then()
      .catch()
      .finally(() => {
        setDeleteLoading(false);
      });
  };

  const editpassword = (id) => {
    setOpen(true);
    axios
      .post(`/api/password-edit/${params.id}/${id}`)
      .then((response) => form.setFieldsValue(response.data?.passwordEdit));
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
            size="small"
            icon={<CopyOutlined />}
            onClick={() => copyPassword(rowData?.password)}
          />
        </div>
      ),
    },

    {
      title: "",
      key: "edit",
      render: (rowData) => (
        <Button
          type="dashed"
          icon={<EditFilled />}
          size="small"
          onClick={() => editpassword(rowData?._id)}
        >
          Edit
        </Button>
      ),
    },
    {
      title: "",
      key: "delete",
      render: (rowData) => (
        <Popconfirm
          title="Delete the task"
          description="Are you sure to delete this task?"
          onConfirm={() => deletePsssword(rowData?._id)}
          okText="Yes"
          cancelText="No"
          okButtonProps={{ style: { backgroundColor: "#87d068" } }}
        >
          <Button size="small" icon={<DeleteFilled />} />
        </Popconfirm>
      ),
    },
  ];

  const reloadButton = <Button icon={<ReloadOutlined />} onClick={fetchData} />;
  return (
    <div>
      {dataLoading ? (
        <div className=" grid place-content-center h-screen">
          <Spin />
        </div>
      ) : (
        <div className="p-2">
          <Table
            dataSource={authData?.passwordHistory}
            columns={columns}
            size="small"
            title={() => reloadButton}
          />
        </div>
      )}
    </div>
  );
};

export default PasswordAppear;
