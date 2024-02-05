import { ShoppingCartOutlined, DeleteOutlined } from '@ant-design/icons';
import { Badge, Drawer, InputNumber, Space, Table, Checkbox, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { deleteCart, getCart } from '../Api';
import Column from 'antd/es/table/Column';
import { useData } from '../../DataContext';

export default function AppCart({ inforUser }) {
    const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
    // const [cartItems, setCartItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const { cartItems, setCartItems } = useData();
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (inforUser) {
                    const response = await getCart(inforUser ? inforUser.id : '');
                    const cartItems = await response.Cart.rows;
                    setCartItems(cartItems);
                }
                else {
                    console.log('Người dùng chưa đăng nhập => cart = null')
                    setCartItems(0);
                }
            } catch (error) {
                message.error("Lỗi kết nối đến server")
            }
        };

        fetchData();
    }, [inforUser]);


    const handleDeleteItem = (record) => {
        deleteCart(record.id).then(() => {
            setCartItems((prevItems) => prevItems.filter((item) => item.id !== record.id));
            setSelectedItems((prevSelected) => prevSelected.filter((id) => id !== record.id));
        });
    };
    const handleCheckboxChange = (record, checked) => {
        if (record === 'selectAll') {
            setSelectAll(checked);
            setSelectedItems(checked ? cartItems.map((item) => item.id) : []);
        } else {
            setSelectedItems((prevSelected) => {
                if (checked) {
                    return [...prevSelected, record.id];
                } else {
                    return prevSelected.filter((id) => id !== record.id);
                }
            });
            setSelectAll(cartItems.length === selectedItems.length + 1);
        }
    };

    return (
        <div>
            <Badge
                onClick={() => {
                    setCartDrawerOpen(true);
                }}
                count={cartItems.length}
                style={{ fontSize: 14 }}
                className="shoppingCartIcon"
            >
                <ShoppingCartOutlined style={{ fontSize: 24 }} />
            </Badge>
            <Drawer
                width={500}
                open={cartDrawerOpen}
                onClose={() => {
                    setCartDrawerOpen(false);
                }}
                title="Your Cart"
            >
                <Table pagination={false} dataSource={cartItems}>
                    <Column
                        key="selectAll"
                        title={
                            <Checkbox
                                checked={selectAll}
                                onChange={(e) => handleCheckboxChange('selectAll', e.target.checked)}
                            />
                        }
                        dataIndex="id"
                        render={(value, record) => (
                            <Checkbox
                                key="selectAll"
                                checked={selectedItems.includes(record.id)}
                                onChange={(e) => handleCheckboxChange(record, e.target.checked)}
                            />
                        )}
                    />
                    <Column title="Title" dataIndex="idPet" />
                    <Column
                        title="Price"
                        dataIndex="idUser"
                        render={(value) => <span>${value}</span>}
                    />
                    <Column
                        title="Quantity"
                        dataIndex="quantity"
                        render={(value, record) => (
                            <InputNumber
                                min={1}
                                defaultValue={value}
                                onChange={(newValue) => {
                                    setCartItems((prevItems) =>
                                        prevItems.map((cart) => {
                                            if (record.id === cart.id) {
                                                cart.total = cart.price * newValue;
                                            }
                                            return cart;
                                        })
                                    );
                                }}
                            />
                        )}
                    />
                    <Column title="Total" dataIndex="total" render={(value) => <span>${value}</span>} />
                    <Column
                        title="Action"
                        render={(text, record) => (
                            <Space>
                                <a onClick={() => handleDeleteItem(record)}>
                                    <DeleteOutlined />
                                </a>
                            </Space>
                        )}
                    />
                </Table>
                <div style={{ marginTop: '16px' }}>
                    <p>Selected Item IDs: {selectedItems.join(', ')}</p>
                </div>
            </Drawer>
        </div>
    );
}
