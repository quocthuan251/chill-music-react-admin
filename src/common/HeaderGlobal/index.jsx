import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'
import { Dropdown, Menu, Button } from 'antd'
import React from 'react'
import "./HeaderGlobal.css"
import { Badge, Avatar } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'
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
                <Link to="/admin/signin">Đăng xuất</Link>
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
                <Avatar className="header-avatar" style={{marginRight: 5}} src="https://www.flaticon.com/svg/vstatic/svg/3135/3135715.svg?token=exp=1619952136~hmac=c96ef3e32d54e9cdc94e776e4746f855" />
                <div>Quốc Thuận</div>
                </div>
            </Dropdown>
            
        </div>
    )
}

export default HeaderGlobal
