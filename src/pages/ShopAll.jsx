import { Space } from 'antd'
import React from 'react'
import Sider_menu from '../componnents/Sider_menu'
import Page_Content_Products from '../componnents/Page_Content_Products'

export default function ShopAll({ render }) {
    return (
        <div>
            <div className="mt-header"></div>
            <Space className='page_content'>
                <Sider_menu />
                <Page_Content_Products />
            </Space>
        </div>
    )
}
