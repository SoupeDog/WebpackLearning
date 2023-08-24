import React from 'react';
import {Checkbox, Col, Row, Tabs, TabsProps} from "antd";

const onChange = (key: string) => {
    console.log(key);
};

const items: TabsProps['items'] = [
    {
        key: '1',
        label: '等待施工菜单 1',
        children:
            <Row gutter={[8, 8]}>
                <Col span={2}><Checkbox>xx 功能</Checkbox></Col>
            </Row>
    },
    {
        key: '2',
        label: '等待施工菜单 2',
        children:
            <Row gutter={[8, 8]}>
                <Col span={2}><Checkbox>xx 功能</Checkbox></Col>
                <Col span={2}><Checkbox>xx 功能</Checkbox></Col>
            </Row>
    },
    {
        key: '3',
        label: '等待施工菜单 3',
        children:
            <Row gutter={[8, 8]}>
                <Col span={2}><Checkbox>xx 功能</Checkbox></Col>
                <Col span={2}><Checkbox>xx 功能</Checkbox></Col>
                <Col span={2}><Checkbox>xx 功能</Checkbox></Col>
            </Row>
    },
];

function EditorMenu() {
    return <Tabs defaultActiveKey="1" items={items} onChange={onChange}/>;
}

export default EditorMenu;