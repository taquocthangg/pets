import React, { useEffect, useState } from 'react';
import { useData } from '../../DataContext';
import { Avatar, Card, Image, Row, Col, message, Button, Spin } from 'antd';
import { getAllProDucts, getCategoryThuCung } from '../Api';
import AddToCartButton from '../AddToCard';
import Show_Detail from '../Show_Detail';

export default function Page_Content_Products({ id_category }) {
    const { isIdCategory, setIsIdCategory } = useData();
    const [data, setData] = useState([]);
    const [CountRows, setCountRows] = useState();
    const [loading, setLoading] = useState(false);
    const [cartLoaded, setCartLoaded] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                if (id_category) {
                    const response = await getCategoryThuCung(id_category);
                    const responseData = response?.response?.rows || [];
                    setData(responseData);
                    setCountRows(response?.response?.count)
                }
                else
                    if (isIdCategory !== 'shop-all') {
                        const response = await getCategoryThuCung(isIdCategory);
                        const responseData = response?.response?.rows || [];
                        setData(responseData);
                        setCountRows(response?.response?.count)
                    } else {
                        const response = await getAllProDucts();
                        const responseData = response?.pets?.rows || [];
                        setData(responseData);
                        setCountRows(response?.pets?.count)
                    }
            } catch (error) {
                console.error("Lỗi lấy dữ liệu:", error);
            } finally {
                setLoading(false);
                setCartLoaded(true);
            }
        };
        fetchData();
    }, [isIdCategory, id_category, CountRows]);
    return (
        <div style={{ width: '100%', textAlign: 'center' }}>
            {CountRows ? CountRows : ""} pets
            {cartLoaded ? (
                <div className='container' style={{ margin: 'auto' }}>
                    {data.length > 0 ? (
                        <Row>
                            {data?.map((pet) => (
                                <Col key={pet.id}>
                                    <Card
                                        loading={loading}
                                        style={{ width: 360, margin: 20 }}
                                        hoverable
                                        cover={
                                            <Image
                                                src={pet.avatar}
                                            />
                                        }
                                        actions={[
                                            <AddToCartButton item={pet} />,
                                            <Show_Detail item={pet} />
                                        ]}
                                    >
                                        <Card.Meta
                                            title={pet.name}
                                            description={pet.describe}
                                            avatar={<Avatar src={pet.avatar} />}
                                        />
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    ) : (
                        <Button>
                            Hú
                        </Button>
                    )}
                </div>
            ) : (
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <Spin size="large" />
                </div>
            )}
        </div>
    );
}
