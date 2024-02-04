import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { formatVietnameseToString } from '../Common/formatVietnameseToString';
const Footer = ({ category }) => {
    return (
        <div className='footer'>
            <Row style={{ backgroundColor: 'red', padding: '20px 0' }}>
                <Col span={6}>
                    <div className="footer_name">
                        Our Flagship Store
                    </div>
                    <div className="footer_title">
                        <p>
                            500 Terry Francine Street
                        </p>
                        <p>
                            San Francisco, CA 94158
                        </p>
                        <p>
                            Tel: 123-456-7890
                        </p>
                    </div>
                    <Link to='shop-all'>
                        View Stores List
                    </Link>
                </Col>
                <Col span={6}>
                    <div className="footer_name">
                        Shop
                    </div>
                    <div className="footer_title">
                        {category?.map((item) => (
                            <Link to={`/category/${formatVietnameseToString(item.name ? item.name : "s")}/${item.id}`}>
                                <p>
                                    {item.name ? item.name : ''}
                                </p>
                            </Link>
                        ))}
                    </div>
                </Col>
                <Col span={6}>
                    <div className="footer_name">
                        Info
                    </div>
                    <div className="footer_title">
                        <p>
                            Our Story
                        </p>
                        <p>
                            Contact
                        </p>
                        <p>
                            Shipping & Returns
                        </p>
                        <p>
                            Store Policy
                        </p>
                        <p>
                            Forum
                        </p>
                        <p>
                            FAQ
                        </p>
                    </div>
                </Col>
                <Col span={6}>
                    <div className="footer_name">
                        Get Special Deals & Offers
                    </div>

                </Col>
            </Row>
        </div>
    );
}

export default Footer;
