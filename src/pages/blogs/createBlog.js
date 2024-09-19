import React, { useEffect, useState } from "react";
import { Form, Input, Button, DatePicker } from "antd";
import { addBlog } from "../../services/api";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import './blog.css';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';

function CreateBlog({ getContent }) {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
    const [description, setDescription] = useState("");

    const handleEditorChange = (e) => {
        console.log({ e })
        setDescription(e)
    }
    const onFinish = async (values) => {
        console.log({ getContent })
        try {
            const { data } = await addBlog({
                ...values,
                description,
                author: JSON.parse(localStorage.getItem("user"))._id,
            });
            console.log({ data });
        } catch (error) {
            console.log({ error });
        }
    };

    useEffect(() => {
        let html = convertToHTML(editorState.getCurrentContent());
        console.log({ html })
        setDescription(html);
    }, [editorState]);

    return (
        <div className="create-blog-container">
            <h1>Create Blog</h1>
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
                            editorState={editorState}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            onEditorStateChange={setEditorState}
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

export default CreateBlog;
