import { Button, Checkbox, Form, Input } from "antd";
import React, { useState } from "react";
import { login } from "../services/api";
import { Link } from "react-router-dom";

function Login() {
	const handleSubmit = async (values) => {
		try {
			const { data } = await login(values);
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
				<h2 style={{ borderBottom: "1px solid gray", width: "100px", paddingBottom: "10px" }}>Login</h2>
				<div style={{ marginTop: "30px" }}>
					<Form
						className="container"
						layout="vertical"
						onFinish={async (values) => {
							await handleSubmit(values);
						}}
					>
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

						{/* <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}
						<p>Doesn't have an account? <Link to={"/signup"}>Register now</Link></p>

						<Form.Item

						>
							<Button type="primary" htmlType="submit">
								Login
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		</div>
	);
}

export default Login;
