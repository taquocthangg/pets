import { Form, Input, Button, Tabs } from 'antd';

import React from 'react'
import Reg from './Reg'
import { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import Forgot_Pass from './Forgot_Pass';
import { login } from '../componnents/Api';

export default function Login() {

    return (
        <div>
            <div className="mt-header"></div>
            <div className="container-m">
                <Tabs defaultActiveKey="login" centered>
                    <Tabs.Items tab="Login" key="login" >
                        <LoginForm />
                    </Tabs.Items>
                    <Tabs.Items tab="Register" key="register" >
                        <Reg />
                    </Tabs.Items >
                </Tabs>
            </div>
        </div>
    )
}

const LoginForm = () => {
    const [showLoginForm, setShowLoginForm] = useState(true);

    const onFinishLogin = (values) => {
        console.log('Login form values:', values);
        login(values)
            .then(res => res)
            .then((res) => {
                console.log(res)
            });
    };

    const handleForgotPassword = () => {
        setShowLoginForm(false);
    };

    const handleBackToLogin = () => {
        setShowLoginForm(true);
    };

    return (
        <div>
            {showLoginForm ? (
                <Form name="login" onFinish={onFinishLogin} >
                    <Form.Item
                        className='form_item'
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                        labelCol={{ span: 24 }} // Chiếm hết 24 cột (1 hàng) cho label
                        wrapperCol={{ span: 24 }} // Chiếm hết 24 cột (1 hàng) cho input
                    >
                        <Input prefix={<UserOutlined />} className='input_form' />
                    </Form.Item>


                    <Form.Item
                        className='form_item'
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                    >
                        <Input.Password prefix={<LockOutlined />} className='input_form' />
                    </Form.Item>
                    <Form.Item>
                        <Button type="link" onClick={handleForgotPassword}>
                            Forgot password?
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Form.Item>


                </Form>
            ) : (
                <Forgot_Pass onBackToLogin={handleBackToLogin} />
            )}
        </div>
    );
};