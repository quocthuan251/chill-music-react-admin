import { QuestionCircleOutlined, ArrowDownOutlined } from '@ant-design/icons'
import { Card, Col, Row, Statistic } from 'antd'
import React from 'react'
import ListenChart from './ListenChart'
import TopSearch from './TopSearch'
import VisitChart from './UserChart'
function DashBoard() {
    return (
        <div className="dash-board-container">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={6}>
                    <Card size="small" title="lượt truy cập" extra={<QuestionCircleOutlined />}>
                        <VisitChart />
                    </Card>
                </Col>
                <Col className="gutter-row" span={6}>
                    <Card size="small" title="Người dùng" extra={<QuestionCircleOutlined />}>
                        <Statistic title="Active Users" value={112893} />
                    </Card>
                </Col>
                <Col className="gutter-row" span={6}>
                    <Card size="small" title="Lượt nghe" extra={<QuestionCircleOutlined />}>
                        <ListenChart />
                    </Card>
                </Col>
                <Col className="gutter-row" span={6}>
                    <Card size="small" title="Tải lên" extra={<QuestionCircleOutlined />}>
                        <Statistic
                            title="Giảm"
                            value={9.3}
                            precision={2}
                            valueStyle={{ color: '#cf1322' }}
                            prefix={<ArrowDownOutlined />}
                            suffix="%"
                        />
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Card title="Phân tích tìm kiếm">
                        <TopSearch />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default DashBoard
