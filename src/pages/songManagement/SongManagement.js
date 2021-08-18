import React, { useEffect } from 'react';
import { Table, Tag, Image } from 'antd';
import { Button, Tooltip } from 'antd';
import { FileSearchOutlined, PlusOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { getListSong, deleteSongById } from './actions';
import { Link } from 'react-router-dom';
import { Popconfirm, message, Pagination } from 'antd';

const SongManagement = (props) => {
	const confirm = (id) => {
		console.log(id + ' id xoa');
		props.deleteSongById(id);
		// message.success('Xóa thành công');
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
			render: (avatar) => <Image width={100} src={avatar} />,
		},
		{
			title: 'Tên bài hát',
			key: 'Tên bài hát',
			dataIndex: 'name',
			width: 180,
		},
		{
			title: 'Thể loại',
			key: 'Thể loại',
			dataIndex: 'category',
			width: 120,
		},
		{
			title: 'album',
			key: 'album',
			dataIndex: 'info_extra.category',
			width: 130,
		},
		{
			title: 'Ca sĩ',
			key: 'Ca sĩ',
			dataIndex: 'singer',
			width: 130,
		},
		{
			title: 'Download',
			key: 'Download',
			dataIndex: 'downloadPremit',
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
			dataIndex: '_id',
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
						onConfirm={() => confirm(id)}
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
		props.getListSong(payload);
	}, []);
	const onChangePagination = (page) => {
		console.log(page);
		const payload = { page: page, limit: 20, query: '' };
		props.getListSong(payload);
		// setCurrentPage(page);
	};

	const listSong = props.dataSongs;
	const currentPage = props.pageTable;
	const loading = props.loading;
	const countSongs = props.countSongs;

	return (
		<div>
			<div
				style={{
					fontWeight: 700,
					fontSize: 25,
					marginBottom: 25,
				}}
			>
				Quản lý danh sách bài hát
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
				dataSource={listSong}
				pagination={false}
				loading={loading}
				rowKey="_id"
			/>
			<Pagination
				current={currentPage}
				onChange={(e) => onChangePagination(e)}
				total={countSongs}
				defaultPageSize={20}
				showSizeChanger={false}
			/>
		</div>
	);
};
const mapStateToProps = (state) => ({
	dataSongs: state.reducerSong.data.songs,
	pageTable: state.reducerSong.data.page,
	countSongs: state.reducerSong.data.count,
	loading: state.reducerSong.loading,
	error: state.reducerSong.error,
});
const mapDispatchToProps = {
	getListSong,
	deleteSongById,
};
export default connect(mapStateToProps, mapDispatchToProps)(SongManagement);
