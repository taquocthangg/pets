import { Button, message } from 'antd'
import React from 'react'
import { logout } from '../componnents/isCheckAuth'
import { useNavigate } from 'react-router-dom'

export default function Profile({ setInforUser }) {
    const navigate = useNavigate()
    const handLogout = () => {
        logout();
        message.success('Đã đăng xuất!!')
        setInforUser('')
        navigate('/')
    }
    return (
        <div className='mt-header'>
            <Button
                onClick={handLogout}
            >
                Logout
            </Button>
        </div>
    )
}
