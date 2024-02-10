import { Tabs } from 'antd'
import React from 'react'
import Status_Oder from './Status_Order'
import Profile from './Profile'

export default function User({ setInforUser }) {
    return (
        <div>
            <div className="mt-header"></div>
            <div className="container-m">
                <Tabs defaultActiveKey="login" centered>
                    <Tabs.Items tab="Status_Order" key="login" >
                        <Status_Oder />
                    </Tabs.Items>
                    <Tabs.Items tab="Profile" key="register" >
                        <Profile setInforUser={setInforUser} />
                    </Tabs.Items >
                </Tabs>
            </div>
        </div>
    )
}
