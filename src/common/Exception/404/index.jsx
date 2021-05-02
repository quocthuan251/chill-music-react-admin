import React from 'react'
import { Result, Button } from 'antd'
import {Link} from 'react-router-dom'
function NotFound() {
    return (
        <div className="404-container">
            <Result
                status="404"
                title="404"
                subTitle="Xin lỗi, trang bạn đã truy cập không tồn tại."
                extra={<Link to=""><Button type="primary">Quay lại</Button></Link>}
            />
        </div>
    )
}

export default NotFound
