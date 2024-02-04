import React from 'react';
import { banner, banner_ca, brand } from '../data'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner_ca from '../componnents/Banner/Banner_ca';
import '../css/Home.css'
import { Card, Avatar, Image } from 'antd';
import { EyeOutlined, ShoppingCartOutlined, } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const Home = ({ category }) => {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };
    return (
        <div>
            <div className="silder__banner">
                <Slider {...settings}>
                    {banner.map((banner, i) => {
                        return (
                            <div className="banner-img" key={banner.id}>
                                <img src={banner.img} alt="" />
                            </div>
                        )
                    })}
                </Slider>
            </div>
            <div className="container">
                <div className="banner_content">
                    <p>
                        Welcome to Our Pet Supply Shop
                    </p>
                    <div className="banenr_content_btn">
                        <Link to='/shop-all'>
                            Start Shopping
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="banner_ca">
                    <Banner_ca category={category} />
                </div>
            </div>
            <div className="container">
                <Card
                    style={{ width: 300, marginTop: 20 }}
                    hoverable
                    cover={
                        <Image
                            width={300}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                    }
                    actions={[
                        <ShoppingCartOutlined key="cart" style={{ fontSize: 25 }} />,
                        <EyeOutlined key="show" style={{ fontSize: 25 }} />,
                    ]}
                >
                    <Card.Meta
                        title="Ten thu cung"
                        description="mo ta "
                        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                    >
                        Card
                    </Card.Meta>
                </Card>
            </div>
            <div className="container">
                <div className="brand_container">
                    <p>
                        Best Brands at Lowest Prices
                    </p>
                    <div className="brand">
                        {brand.map((brand) => {
                            return (
                                <div className="brand_logo" key={brand.id}>
                                    <img src={brand.img} alt="" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
