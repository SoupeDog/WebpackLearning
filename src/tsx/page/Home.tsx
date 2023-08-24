import '../../style/index.css'
import '../../style/index.less'
import '../../style/index.scss'

import React from 'react';
import {Col, ConfigProvider, Row} from "antd";
import zhCN from 'antd/locale/zh_CN';

function Home() {
    return (
        <ConfigProvider locale={zhCN}>
            <Row gutter={[8, 8]}>
                <Col span={8}>
                    <div className="text1">
                        Hello World! —————— css
                    </div>
                </Col>
                <Col span={8}>
                    <div className="text2">
                        Hello World! —————— less
                    </div>
                </Col>
                <Col span={8}>
                    <div className="text3">
                        Hello World! —————— scss
                    </div>
                </Col>
            </Row>
            <Row gutter={[8, 8]}>
                <Col span={8}>
                    <div className="text1">
                        Hello World! —————— css
                    </div>
                </Col>
                <Col span={8}>
                    <div className="text2">
                        Hello World! —————— less
                    </div>
                </Col>
                <Col span={8}>
                    <div className="text3">
                        Hello World! —————— scss
                    </div>
                </Col>
            </Row>
            <Row gutter={[8, 8]}>
                <Col span={8}>
                    <div className="text1">
                        Hello World! —————— css
                    </div>
                </Col>
                <Col span={8}>
                    <div className="text2">
                        Hello World! —————— less
                    </div>
                </Col>
                <Col span={8}>
                    <div className="text3">
                        Hello World! —————— scss
                    </div>
                </Col>
            </Row>
        </ConfigProvider>
    );
}

export default Home;