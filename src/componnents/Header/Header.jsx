import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { ReactComponent as Logo } from '../../img/logo.svg'
import { ReactComponent as Search } from '../../img/search_icon.svg'
import { ReactComponent as User } from '../../img/user_icon.svg'
import AppCart from '../AppCart';
import { formatVietnameseToString } from '../Common/formatVietnameseToString'
import { Avatar } from 'antd';
const Header = ({ category, inforUser }) => {
    return (
        <div className='header'>
            <div className="header_container">
                <div className="sale">
                    FREE SHIPPING - ORDER TODAY
                </div>
                <div className="header_main">
                    <div className="header_logo">
                        <div className="header_logo_img">
                            <Link to='/'><Logo /></Link>
                        </div>
                        <Link to='/'>
                            <div className="header_logo_title">

                                <p>petlover</p>
                                <p>
                                    A Pet's Favorite Place
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div className="header_info">
                        <div className="header_search">
                            <input type="text" name="" id="" placeholder='Search...' />
                            <div className="search_icon">
                                <Search />
                            </div>
                        </div>
                        <div className="header_call">
                            <p>Call Us</p>
                            <p>123-456-789</p>
                        </div>
                    </div>
                </div>
                <div className="header_menu">
                    <div className="header_car">
                        <div className="header_menu_item">
                            <Link to='/shop-all'>
                                Shop all
                            </Link>
                        </div>
                        {category?.map((item) => (
                            <div className="header_menu_item" key={item.id}>
                                <Link to={`category/${formatVietnameseToString(item.name)}/${item.id}`}>
                                    {item.name}
                                </Link>
                            </div>
                        ))}


                        <div className="header_menu_item">
                            <Link to='contacts'>
                                contact
                            </Link>
                        </div>
                    </div>
                    <div className="header_log">
                        <div className="header_log_item">
                            {inforUser ? (
                                <div>
                                    <Link to={`/profile/${inforUser.id}`}>
                                        {inforUser.avatar ? <Avatar src={inforUser.avatar} /> : <User />}  {inforUser.name}
                                    </Link>
                                </div>
                            ) : (
                                <div>
                                    <Link to='/login'>
                                        <User />  Login
                                    </Link>
                                </div>
                            )}
                        </div>
                        <div className="header_log_item">
                            <AppCart inforUser={inforUser} />
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default Header;
