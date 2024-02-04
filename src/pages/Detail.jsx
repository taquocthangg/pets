import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getThuCung } from '../componnents/Api';
import { Image } from 'antd';

export default function Detail() {
    const { id } = useParams();
    const [itemDetails, setItemDetails] = useState([]);
    useEffect(() => {
        getThuCung(id)
            .then(res => res.pet)
            .then((res) => {
                setItemDetails(res);
            })
            .catch((error) => {
                console.error("Lỗi lấy dữ liệu sản phẩm:", error);
            });
    }, [id]);
    return (
        <div className="">
            <div className='mt-header'></div>

            Tên Khoái: {itemDetails.name}
            <Image
                src={itemDetails.avatar}
            />
        </div>
    )
}
