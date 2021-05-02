import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'
import { Dropdown, Menu, Button } from 'antd'
import React from 'react'
import "./HeaderGlobal.css"
import { Badge } from 'antd';
import { BellOutlined } from '@ant-design/icons';

function HeaderGlobal() {
    const menu = (
        <Menu>
            <Menu.Item key="setting:1" icon={<UserOutlined />}>
                Thông tin tài khoản
            </Menu.Item>
            <Menu.Item key="setting:2" icon={<SettingOutlined />}>
                Cài đặt
            </Menu.Item>
            <Menu.Item key="setting:3" icon={<LogoutOutlined />}>
                Đăng xuất
            </Menu.Item>
        </Menu>
    )
    return (
        <div className="header-container">
            <div className="header-button-hover" type="text">
            <Badge count={10} dot >
                <BellOutlined />
            </Badge>
            </div>
            <Dropdown overlay={menu} placement="bottomRight">
            <div className="header-button-hover">
                <div > <SettingOutlined />Quốc Thuận</div>
                </div>
            </Dropdown>
            
        </div>
    )
}

export default HeaderGlobal
