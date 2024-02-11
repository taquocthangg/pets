import { Button, Flex, Modal, Radio } from 'antd'
import React, { useState } from 'react'
import { formatPrice } from '../Common/formatPrice';
export default function Checkout({ open, setOpen, selectedItems, totalPrice, inforUser }) {
    const [paymentMethod, setPaymentMethod] = useState('cash');
    const handlePlaceOrder = () => {
        if (paymentMethod === 'cash') {
            console.log('Tiền mặt')
        } else if (paymentMethod === 'vnpay') {
            console.log('chuyển khoản')
        }
    };

    return (
        <div>
            <Modal
                title="Checkout"
                centered
                open={open}
                footer={null}
                onCancel={() => setOpen(false)}
                destroyOnClose
                width={1000}
            >
                <div>
                    Delivery Address
                </div>
                <div>
                    <strong>{inforUser?.name + ' ' + inforUser?.sdt}</strong> {inforUser?.diaChi}
                </div>
                <div>
                    Products Ordered
                </div>
                {selectedItems?.map(item => (
                    <div style={{ display: 'flex', gap: 30 }} key={item.id}>
                        <p>Name: {item.Pet.name}</p>
                        <p>Price: {item.Pet.price} $</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Total: {item.Pet.price * item.quantity} $</p>
                    </div>
                ))}
                <div>
                    Payment Method
                </div>
                <Flex vertical gap="middle">
                    <Radio.Group value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} buttonStyle="solid">
                        <Radio.Button value="cash">Cash on Delivery</Radio.Button>
                        <Radio.Button value="vnpay">VNPAY</Radio.Button>
                    </Radio.Group>
                </Flex>
                <div>
                    Total All : {formatPrice(totalPrice)} $
                </div>
                <Button onClick={handlePlaceOrder}>Place Oder</Button>
            </Modal>
        </div>
    )
}
