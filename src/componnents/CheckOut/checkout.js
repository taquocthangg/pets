import { Modal } from 'antd'
import React from 'react'
import { formatPrice } from '../Common/formatPrice';

export default function Checkout({ open, setOpen, selectedItems, totalPrice }) {
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
                {selectedItems.map(item => (
                    <div style={{ display: 'flex', gap: 30 }} key={item.id}>
                        <p>Name: {item.Pet.name}</p>
                        <p>Price: {item.Pet.price} $</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Total: {item.Pet.price * item.quantity} $</p>
                    </div>
                ))}
                <div>
                    Total All : {formatPrice(totalPrice)}
                </div>
            </Modal>
        </div>
    )
}
