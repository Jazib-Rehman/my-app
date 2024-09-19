import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { signup } from "../services/api";
import { Link } from "react-router-dom";

function SignUp() {


  const handleSubmit = async (values) => {
    try {
      const { data } = await signup({ ...values, confirmPassword: values.password });
      console.log(data);
      localStorage.setItem("accessToken", data.token.accessToken);
      localStorage.setItem("refreshToken", data.token.refreshToken);
      localStorage.setItem("user", JSON.stringify(data.user));
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ width: "40%", backgroundColor: "#FFFFFF", padding: "40px", borderRadius: "9px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
        <h2 style={{ borderBottom: "1px solid gray", width: "100px", paddingBottom: "10px" }}>Signup</h2>
        <div style={{ marginTop: "30px" }}>
          <Form
            className="container"
            layout="vertical"
            onFinish={async (values) => {
              await handleSubmit(values);
            }}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please input your name!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <p>Already have an account? <Link to={"/login"}>Login here</Link></p>

            <Form.Item
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
    // <div className="signup-container">
    //   <h1>Sign Up</h1>
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       name="name"
    //       value={formData.name}
    //       onChange={handleChange}
    //       placeholder="Full Name"
    //       required
    //     />
    //     <input
    //       type="text"
    //       name="username"
    //       value={formData.username}
    //       onChange={handleChange}
    //       placeholder="Username"
    //       required
    //     />
    //     <input
    //       type="password"
    //       name="password"
    //       value={formData.password}
    //       onChange={handleChange}
    //       placeholder="Password"
    //       required
    //     />
    //     <input
    //       type="password"
    //       name="confirmPassword"
    //       value={formData.confirmPassword}
    //       onChange={handleChange}
    //       placeholder="Confirm Password"
    //       required
    //     />
    //     <input
    //       type="email"
    //       name="email"
    //       value={formData.email}
    //       onChange={handleChange}
    //       placeholder="Email"
    //       required
    //     />
    //     <button type="submit">Sign Up</button>
    //   </form>
    // </div>
  );
}

export default SignUp;
