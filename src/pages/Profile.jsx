import { PlusOutlined } from '@ant-design/icons';
import {
    Avatar,
    Button,
    DatePicker,
    Form,
    Input,
    Modal,
    Radio,
    Spin,
    Upload,
} from 'antd';
import React, { useState } from 'react';


export default function Profile({ inforUser }) {
    const [open, setOpen] = useState(false);
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('data:', values);
    };

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    return (

        <div className="container">
            <div className="proflie">
                My Profile <br />
                Manage and protect your account
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div className="proflie_detail">
                    <p>
                        Name : {inforUser?.name ? inforUser.name : (
                            <>
                                Update... <Spin />
                            </>
                        )}
                    </p>
                    <p>
                        Email : {inforUser?.email ? inforUser.email : (
                            <>
                                Update... <Spin />
                            </>
                        )}
                    </p>
                    <p>
                        Phone Number : {inforUser?.sdt ? inforUser.sdt : (
                            <>
                                Update... <Spin />
                            </>
                        )}
                    </p>
                    <p>
                        Gender : {inforUser?.gioiTinh ? inforUser.gioiTinh : (
                            <>
                                Update... <Spin />
                            </>
                        )}
                    </p>
                    <p>
                        Date of birth : {inforUser?.namSinh ? inforUser.namSinh : (
                            <>
                                Update... <Spin />
                            </>
                        )}
                    </p>
                </div>
                <div className="proflie_avatar">
                    <Avatar
                        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 120, xxl: 150 }}
                        src={inforUser.avatar}
                    />
                </div>
            </div>
            <Button onClick={() => setOpen(true)}>
                Edit Profile
            </Button>
            <Modal
                title=" Edit Profile"
                centered
                open={open}
                footer={null}
                onCancel={() => setOpen(false)}
                destroyOnClose
                width={1000}
            >
                <Form
                    form={form}
                    layout="horizontal"
                    onFinish={onFinish}
                >
                    <div className="" style={{ display: 'flex', gap: 20 }}>
                        <div className="">
                            <div className="" style={{ display: 'flex', gap: 20 }}>
                                <Form.Item label="FullName" name="name">
                                    <Input placeholder='Enter full name' />
                                </Form.Item>
                                <Form.Item label="Giới Tính" name="gioiTinh">
                                    <Radio.Group>
                                        <Radio value="Nam"> Nam </Radio>
                                        <Radio value="Nữ"> Nữ </Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </div>

                            <div className="" style={{ display: 'flex', gap: 20 }}>
                                <Form.Item label="Phone Number" name="sdt">
                                    <Input type='number' placeholder='Enter phone number' />
                                </Form.Item>
                                <Form.Item label="Address" name="diaChi">
                                    <Input type='text' placeholder='Enter address' />
                                </Form.Item>
                            </div>
                            <div className="" style={{ display: 'flex', gap: 20 }}>
                                <Form.Item label="Password" name="password">
                                    <Input type='text' placeholder='Enter password' />
                                </Form.Item>
                                <Form.Item label="Date of birth" name="namSinh">
                                    <DatePicker />
                                </Form.Item>
                            </div>
                        </div>
                        <Form.Item
                            label="Avatar"
                            name="avatar"
                            valuePropName="fileList"
                            getValueFromEvent={normFile}
                        >
                            <Upload action="" listType="picture-circle"  >
                                <button style={{ border: 0, background: 'none' }} type="button">
                                    <PlusOutlined />
                                    <div style={{ marginTop: 8 }}>Upload</div>
                                </button>
                            </Upload>
                        </Form.Item>
                    </div>
                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            Save
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}
