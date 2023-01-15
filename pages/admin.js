import React, { Fragment, useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useRouter } from "next/router";

const Admin = () => {
  const [alert, setAlert] = useState(false);
  const route = useRouter();
  const onFinish = (values) => {
    setAlert(false);
    if (values.username === "ADMIN" && values.password === "admin") {
      route.push("/0329842");
    } else {
      setAlert(true);
    }
  };
  return (
    <div>
      <div className="flex justify-center w-full p-44">
        <div className="w-[400px] border-2 rounded-2xl p-6">
          <h1 className="mb-5">Login</h1>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            {/* <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </Form.Item> */}

            {alert ? (
              <div className="mb-5 text-orangeLight">
                Username atau Password salah!
              </div>
            ) : (
              <Fragment />
            )}

            <Form.Item>
              <Button htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
