import React from 'react';
import { Layout, Menu } from 'antd';
import './LayoutStyle.css';
import {
	AppstoreOutlined,
	BarChartOutlined,
	CloudOutlined,
	ShopOutlined,
	TeamOutlined,
	UserOutlined,
	UploadOutlined,
	VideoCameraOutlined,
} from '@ant-design/icons';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import HeaderGlobal from '../HeaderGlobal';
// import logo1 from '../../assets/logo1.png';

const { Header, Content, Footer, Sider } = Layout;

class MainLayout extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			// collapsed: false,
		};
	}

	render() {
		console.log("test reload");
		const children = this.props.children;

		return (
			<Layout>
				<div
					className="layout-slider"
					style={{
						overflow: 'auto',
						height: '100vh',
						position: 'fixed',
						left: 0,
						backgroundColor: 'white',
					}}
				>
					<div className="logo">
						<Link to="">
							<img src={logo} alt="" className="logo-img" />
						</Link>
					</div>
					<NavLink
						className="layout-item-sidebar"
						activeClassName="layout-item-sidebar-selected"
						exact
						to="/"
					>
						<BarChartOutlined className="layout-sidebar-item-icon" />
						Dash board
					</NavLink>

					<NavLink
						className="layout-item-sidebar"
						activeClassName="layout-item-sidebar-selected"
						exact
						to="/admin/song-management"
					>
						<VideoCameraOutlined className="layout-sidebar-item-icon" />
						Quản lý bài hát
					</NavLink>
					<NavLink
						className="layout-item-sidebar"
						activeClassName="layout-item-sidebar-selected"
						exact
						to="/admin/singer-management"
					>
						<TeamOutlined className="layout-sidebar-item-icon" />
						Quản lý ca sỹ
					</NavLink>

					<NavLink
						className="layout-item-sidebar"
						activeClassName="layout-item-sidebar-selected"
						exact
						to="/admin/album-management"
					>
						<CloudOutlined className="layout-sidebar-item-icon" />
						Quản lý album
					</NavLink>
					<NavLink
						className="layout-item-sidebar"
						activeClassName="layout-item-sidebar-selected"
						exact
						to="/admin/user-management"
					>
						<UserOutlined className="layout-sidebar-item-icon" />
						Quản lý user
					</NavLink>
					<NavLink
						className="layout-item-sidebar"
						activeClassName="layout-item-sidebar-selected"
						exact
						to="/admin/"
					>
						<AppstoreOutlined className="layout-sidebar-item-icon" />
						Quản lý bài viết
					</NavLink>
					<NavLink
						className="layout-item-sidebar"
						activeClassName="layout-item-sidebar-selected"
						exact
						to="/admin/"
					>
						<UploadOutlined className="layout-sidebar-item-icon" />
						Quản lý tài nguyên
					</NavLink>
					<NavLink
						className="layout-item-sidebar"
						activeClassName="layout-item-sidebar-selected"
						exact
						to="/admin/log-action"
					>
						<ShopOutlined className="layout-sidebar-item-icon" />
						Log action
					</NavLink>
				</div>

				<Layout className="site-layout" style={{ marginLeft: 200 }}>
					<Header
						className="site-layout-header"
						style={{ padding: 0, height: 48 }}
					>
						<HeaderGlobal />
					</Header>
					<Content
						style={{ margin: '24px 16px 0', overflow: 'initial' }}
					>
						<div
							className="site-layout-background"
							style={{ padding: 24, textAlign: 'center' }}
						>
							<div>{children}</div>
						</div>
					</Content>
					<Footer style={{ textAlign: 'center' }}>
						Trang quản trị web MusicCloud - Design by SharkDev
					</Footer>
				</Layout>
			</Layout>
		);
	}
}
const LoginLayout = ({ children }) => <div>{children}</div>;

export { MainLayout, LoginLayout };
