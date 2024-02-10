import React, { useEffect, useState, useCallback } from 'react';
import { ShoppingCartOutlined, DeleteOutlined } from '@ant-design/icons';
import { Badge, Drawer, InputNumber, Space, Table, Checkbox, message } from 'antd';
import Column from 'antd/es/table/Column';
import { useData } from '../../DataContext';
import { deleteCart, getCart, updateCart } from '../Api';
import { formatPrice } from '../Common/formatPrice';

const AppCart = ({ inforUser }) => {
    const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const { cartItems, setCartItems } = useData();

    const fetchData = useCallback(async () => {
        try {
            if (inforUser) {
                const response = await getCart(inforUser.id);
                const cartItems = response.Cart.rows;
                setCartItems(cartItems);
            } else {
                console.log('Người dùng chưa đăng nhập => cart = null');
                setCartItems(0);
            }
        } catch (error) {
            console.log('Lỗi kết nối đến api' + error);
        }
    }, [inforUser, setCartItems]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const TotalPrice = useCallback(() => {
        let total = 0;
        for (const itemId of selectedItems) {
            const selectedItem = cartItems.find(item => item.id === itemId);
            if (selectedItem) {
                total += selectedItem.Pet.price * selectedItem.quantity;
            }
        }
        setTotalPrice(total);
    }, [selectedItems, cartItems]);

    useEffect(() => {
        TotalPrice();
    }, [TotalPrice]);

    const DeleteItem = (record) => {
        deleteCart(record.id).then(() => {
            setCartItems(res => res.filter(item => item.id !== record.id));
            setSelectedItems(res => res.filter(id => id !== record.id));
        });
    };

    const handleCheckboxChange = (record, checked) => {
        if (record === 'selectAll') {
            setSelectedItems(checked ? cartItems.map(item => item.id) : []);
        } else {
            setSelectedItems(res => {
                if (checked) {
                    return [...res, record.id];
                } else {
                    return res.filter(id => id !== record.id);
                }
            });
        }
    };

    const handleQuantityChange = (value, record) => {
        updateCart(record.id, value)
            .then(() => {
                setCartItems(res => res.map(item => (item.id === record.id ? { ...item, quantity: value } : item)));
            })
            .catch((error) => {
                console.error('Error updating cart:', error);
            });
    };

    return (
        <div>
            <Badge
                onClick={() => setCartDrawerOpen(true)}
                count={cartItems.length}
                style={{ fontSize: 14 }}
                className="shoppingCartIcon"
            >
                <ShoppingCartOutlined style={{ fontSize: 24 }} />
            </Badge>
            <Drawer
                width={700}
                open={cartDrawerOpen}
                onClose={() => setCartDrawerOpen(false)}
                title={inforUser?.name ? `${inforUser?.name} Shopping Cart` : 'Your Cart'}
                style={{ maxHeight: '100vh', overflowY: 'auto' }}
                key="id"
            >
                <Table pagination={false} dataSource={cartItems}>
                    <Column
                        title={
                            <Checkbox
                                checked={selectedItems.length === cartItems.length}
                                onChange={(e) => handleCheckboxChange('selectAll', e.target.checked)}
                            />
                        }
                        dataIndex="id"
                        render={(value, record) => (
                            <Checkbox
                                checked={selectedItems.includes(record.id)}
                                onChange={(e) => handleCheckboxChange(record, e.target.checked)}
                            />
                        )}
                    />
                    <Column title="Name" dataIndex={['Pet', 'name']} />
                    <Column
                        title="Price"
                        dataIndex={['Pet', 'price']}
                        render={(text, record) => <span>{formatPrice(record.Pet.price)} $</span>}
                    />
                    <Column
                        title="Quantity"
                        dataIndex="quantity"
                        render={(value, record) => (
                            <InputNumber
                                min={1}
                                value={value}
                                onChange={(newValue) => handleQuantityChange(newValue, record)}
                                onStep={(value, info) => handleQuantityChange(value, record)}
                            />
                        )}
                    />
                    <Column
                        title="Total"
                        dataIndex="quantity"
                        render={(value, record) => <span>{formatPrice(record.Pet.price * value)} $</span>}
                    />
                    <Column
                        title="Action"
                        render={(text, record) => (
                            <Space>
                                <a onClick={() => DeleteItem(record)}>
                                    <DeleteOutlined />
                                </a>
                            </Space>
                        )}
                    />
                </Table>
                <div style={{ marginTop: '16px' }}>
                    <p>Selected Item IDs: {selectedItems.join(', ')}</p>
                    <p>Total: {formatPrice(totalPrice)} $</p>
                </div>
            </Drawer>
        </div>
    );
};

export default AppCart;
