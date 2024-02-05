import { useState } from "react";
import { addToCart, getCart } from "../Api";
import { Button, message } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useData } from '../../DataContext';

export default function AddToCartButton({ item }) {
    const { updateCartItems } = useData();
    const idUser = localStorage.getItem('idUser');
    const [loading, setLoading] = useState(false);
    const addProductToCart = () => {
        if (idUser) {
            setLoading(true);
            addToCart(idUser, item.id).then((res) => {
                message.success(`${item.name} đã thêm vào giỏ hàng`);
                setLoading(false);
                updateCartData(idUser);
            });
        }
        else {
            message.warning(`Vui lòng đăng nhập để tiếp tục`);
        }
    };
    const updateCartData = (idUser) => {
        if (idUser) {
            getCart(idUser).then((res) => res.Cart.rows).then((res) => {
                updateCartItems(res);
            });
        }
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