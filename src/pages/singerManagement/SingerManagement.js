import React, { useEffect } from 'react';
import { Table, Tag, Image } from 'antd';
import { Button, Tooltip } from 'antd';
import { FileSearchOutlined, PlusOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { getListSingerManager } from './action';
import { Link } from 'react-router-dom';
import { Popconfirm, message, Pagination } from 'antd';

const SingerManagement = (props) => {
	const confirm = (id) => {
		console.log(id + ' id xoa');
		message.success('Xóa thành công');
	};

	const cancel = (e) => {
		console.log(e);
		message.error('Hủy xóa');
	};

	const columns = [
		{
			title: 'Stt',
			key: 'Stt',
			dataIndex: 'id',
			width: 50,
			render: (text, row, index) => {
				// if (index >= 0) return <p>{index + 1}</p>;
				const stt = (currentPage - 1) * 20 + index + 1;
				return <p>{stt}</p>;
			},
		},
		{
			title: 'Image',
			key: 'Image',
			dataIndex: 'image',
			width: 100,
			render: (image) => <Image width={100} src={image} />,
		},
		{
			title: 'Banner',
			key: 'banner',
			dataIndex: 'banner',
			width: 200,
			render: (banner) => <Image height={100} src={banner} />,
		},
		{
			title: 'Tên ca sĩ',
			key: 'Tên ca sĩ',
			dataIndex: 'name',
			width: 180,
		},
		{
			title: 'Mô tả',
			key: 'Thể loại',
			dataIndex: 'category',
			width: 300,
		},
		{
			title: 'Trạng thái',
			key: 'isActive',
			dataIndex: 'isActive',
			width: 100,
			render: (tags) => (
				<span>
					{tags ? (
						<Tag color={'green'}>{'true'}</Tag>
					) : (
						<Tag color={'volcano'}>{'false'}</Tag>
					)}
				</span>
			),
		},
		{
			title: 'Actions',
			key: 'Actions',
			dataIndex: 'id',
			width: 130,
			render: (id) => (
				<div>
					<Button
						type="primary"
						size="small"
						// onClick={() => {
						// 	this.redirectEditPage(id);
						// }}
					>
						<Link to={`/admin/song-management/editSong/${id}`}>
							Sửa
						</Link>
					</Button>
					<Popconfirm
						title="Xác nhận xóa?"
						// onConfirm={() => confirm(id)}
						// onCancel={cancel()}
						okText="Yes"
						cancelText="No"
					>
						<Button type="primary" danger size="small">
							Xóa
						</Button>
					</Popconfirm>
					<Tooltip title="xem thêm">
						<Button
							sharp="cicrle"
							icon={<FileSearchOutlined />}
							size="small"
						/>
					</Tooltip>
				</div>
			),
		},
	];

	useEffect(() => {
		const payload = { page: 1, limit: 20, query: '' };
		props.getListSingerManager(payload);
	}, []);
	const onChangePagination = (page) => {
		console.log(page);
		const payload = { page: page, limit: 20, query: '' };
		props.getListSingerManager(payload);
	};

	const listArtist = props.dataArtist;
	const currentPage = props.pageTable;
	const loading = props.loading;
	const countArtist = props.countArtist;

	return (
		<div>
			<div
				style={{
					fontWeight: 700,
					fontSize: 25,
					marginBottom: 25,
				}}
			>
				Quản lý danh sách ca sĩ
			</div>
			<div>
				<Button
					type="primary"
					style={{ float: 'right', margin: '0rem 5rem 1rem' }}
				>
					<Link to={`/admin/song-management/addSong`}>
						<PlusOutlined />
						Thêm bài hát
					</Link>
				</Button>
			</div>
			<Table
				columns={columns}
				dataSource={listArtist}
				pagination={false}
				loading={loading}
				rowKey="id"
			/>
			<Pagination
				current={currentPage}
				onChange={(e) => onChangePagination(e)}
				total={countArtist}
				defaultPageSize={20}
				showSizeChanger={false}
			/>
		</div>
	);
};
const mapStateToProps = (state) => ({
	dataArtist: state.reducerSinger.data.artists,
	pageTable: state.reducerSinger.data.page,
	countArtist: state.reducerSinger.data.count,
	loading: state.reducerSinger.loading,
	error: state.reducerSinger.error,
});
const mapDispatchToProps = {
	getListSingerManager,
};
export default connect(mapStateToProps, mapDispatchToProps)(SingerManagement);
