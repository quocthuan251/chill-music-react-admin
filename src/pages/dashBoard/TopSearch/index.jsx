import { Table } from 'antd'

const columns = [
    {
        title: 'STT',
        dataIndex: 'key',
    },
    {
        title: 'Từ khóa',
        dataIndex: 'name',
    },
    {
        title: 'Lượt tìm',
        dataIndex: 'chinese',
        sorter: {
            compare: (a, b) => a.chinese - b.chinese,
            multiple: 3,
        },
    },
    {
        title: 'Thứ hạng',
        dataIndex: 'math',
        sorter: {
            compare: (a, b) => a.math - b.math,
            multiple: 2,
        },
    },
    {
        title: 'Thứ hạng',
        dataIndex: 'english',
        sorter: {
            compare: (a, b) => a.english - b.english,
            multiple: 1,
        },
    },
]

const data = [
    {
        key: '1',
        name: 'John Brown',
        chinese: 98,
        math: 60,
        english: 70,
    },
    {
        key: '2',
        name: 'Jim Green',
        chinese: 98,
        math: 66,
        english: 89,
    },
    {
        key: '3',
        name: 'Joe Black',
        chinese: 98,
        math: 90,
        english: 70,
    },
    {
        key: '4',
        name: 'Jim Red',
        chinese: 88,
        math: 99,
        english: 89,
    },
]

function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra)
}
const TopSearch = () => {
    return <Table columns={columns} dataSource={data} onChange={onChange} />
}
export default TopSearch
