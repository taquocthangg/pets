import { useState } from "react";
import { addToCart, getCart } from "../Api";
import { Button, message } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useData } from '../../DataContext';

export default function AddToCartButton({ item }) {
    const { updateCartItems } = useData();

    const [loading, setLoading] = useState(false);
    const addProductToCart = () => {
        setLoading(true);
        addToCart(1, item.id).then((res) => {
            message.success(`${item.name} đã thêm vào giỏ hàng`);
            setLoading(false);
            updateCartData();
        });
    };
    const updateCartData = () => {
        getCart(1).then((res) => res.Cart.rows).then((res) => {
            updateCartItems(res);
        });
    };
    return (

        <Button
            type="link"
            onClick={() => {
                addProductToCart();
            }}
            loading={loading}
            style={{ fontSize: 24 }}
        >
            <ShoppingCartOutlined />
        </Button>
    );
}