import React, { useState } from "react";
import { Form, Input, Button, DatePicker } from "antd";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import './blog.css';

function UpdateBlog() {

	const [description, setDescription] = useState("");
	const onFinish = (values) => {
		console.log("Received values:", values);
	};

	return (
		<div className="update-blog-container">
			<h1>Update Blog</h1>
			<div style={{ marginTop: "40px" }}>
				<Form
					name="createBlogForm"
					onFinish={onFinish}
					layout="vertical"
					initialValues={{ remember: true }}
				>
					<Form.Item
						label="Title"
						name="title"
						rules={[
							{ required: true, message: "Please enter the title of your blog!" },
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						label="Content"
						name="description"
						rules={[
							{
								required: true,
								message: "Please enter the content of your blog!",
							},
						]}
					>
						{/* <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription}
        /> */}
						<Editor
							editorState={description}
							toolbarClassName="toolbarClassName"
							wrapperClassName="wrapperClassName"
							editorClassName="editorClassName"
							onEditorStateChange={setDescription}
						/>
					</Form.Item>

					<Form.Item
						label="Image"
						name="image"
						rules={[
							{
								required: true,
								message: "Please enter the content of your blog!",
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item>
						<Button type="primary" htmlType="submit">
							Create Blog
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
}

export default UpdateBlog;
