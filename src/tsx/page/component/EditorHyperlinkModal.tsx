import React, {useState} from 'react';
import {Button, Input, Modal} from "antd";

function EditorHyperlinkModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button type="link" onClick={showModal}>
                超链接
            </Button>
            <Modal title="超链接信息" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>
                    <Input placeholder="显示文本"/>
                </p>
                <p>
                    <Input placeholder="超链接"/>
                </p>
            </Modal>
        </>
    );
}

export default EditorHyperlinkModal;