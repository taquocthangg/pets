import React from 'react'
import { Form, Input, Button } from 'antd';
export default function Forgot_Pass({ onBackToLogin }) {
    const onFinishForgotPassword = (values) => {
        console.log('Forgot Password form values:', values);
        // Add logic for handling forgot password here
    };
    return (
        <div>
            <p>Forgot Password Form</p>
            <Form name="forgotPassword" onFinish={onFinishForgotPassword}>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Reset Password
                    </Button>
                </Form.Item>
            </Form>

            <Button type="link" onClick={onBackToLogin}>
                Back to Login
            </Button>
        </div>
    )
}
