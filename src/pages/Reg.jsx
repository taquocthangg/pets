import React from 'react'
import { Form, Input, Button } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { register } from '../componnents/Api';
export default function Reg() {
    const onFinishRegister = (values) => {
        console.log('Register form values:', values);
        register(values)
            .then(res => res)
            .then((res) => {
                console.log(res)
            });
    };

    return (
        <Form name="register" onFinish={onFinishRegister}>
            <Form.Item
                className='form_item'
                label="Full-name"
                name="name"
                rules={[{ required: true, message: 'Please input your email!' }]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
            >
                <Input prefix={<UserOutlined />} className='input_form' />
            </Form.Item>


            <Form.Item
                className='form_item'
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
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
            <Form.Item
                className='form_item'
                label="Number Phone"
                name="sdt"
                rules={[{ required: true, message: 'Please input your email!' }]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
            >
                <Input prefix={<UserOutlined />} className='input_form' />
            </Form.Item>
            <Form.Item
                className='form_item'
                label="Address"
                name="diaChi"
                rules={[{ required: true, message: 'Please input your email!' }]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
            >
                <Input prefix={<UserOutlined />} className='input_form' />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
            </Form.Item>
        </Form>
    );
}
