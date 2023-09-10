import React from 'react';
import {Button, Row, Space, Tabs} from "antd";
import InputElementHelper from "../../util/InputElementHelper";
import {EditorContext} from "../Editor";
import {
    md_template_acronym,
    md_template_code,
    md_template_scheduled_tasks,
    md_template_summary,
    md_template_table
} from "./properties/MarkDownStaticValue";
import EditorHyperlinkModal from "./EditorHyperlinkModal";
import {editor_text_area} from "./properties/ElementNameContainer";
import EditorImageModal from "./EditorImageModal";
import {contentChangeUndoStackHandler} from "./EditorView";

const onChange = (key: string) => {
    console.log(key);
};

function EditorMenu() {

    return (
        <EditorContext.Consumer>
            {({updateContent}) => (
                <Tabs defaultActiveKey="1" items={[
                    {
                        key: '1',
                        label: '　　常规　　',
                        children:
                            <Row gutter={[8, 8]}>
                                <Space size={"small"}>
                                    <Button type="link" onClick={(event) => {
                                        // @ts-ignore
                                        let element: HTMLTextAreaElement = document.getElementById(editor_text_area);
                                        InputElementHelper.appendTextToTextArea(element, "", ({
                                                                                                  leftPart,
                                                                                                  selectedPart,
                                                                                                  rightPart
                                                                                              }) => {
                                            let nextContent = leftPart + "**" + selectedPart + "**" + rightPart;
                                            updateContent(nextContent);

                                            contentChangeUndoStackHandler(nextContent);
                                        });
                                    }}>加粗</Button>
                                    <Button type="link" onClick={(event) => {
                                        // @ts-ignore
                                        let element: HTMLTextAreaElement = document.getElementById(editor_text_area);
                                        InputElementHelper.appendTextToTextArea(element, "", ({
                                                                                                  leftPart,
                                                                                                  selectedPart,
                                                                                                  rightPart
                                                                                              }) => {
                                            let nextContent = leftPart + "*" + selectedPart + "*" + rightPart;
                                            updateContent(nextContent);

                                            contentChangeUndoStackHandler(nextContent);
                                        });
                                    }}>斜体</Button>
                                    <Button type="link" onClick={(event) => {
                                        // @ts-ignore
                                        let element: HTMLTextAreaElement = document.getElementById(editor_text_area);
                                        InputElementHelper.appendTextToTextArea(element, "", ({
                                                                                                  leftPart,
                                                                                                  selectedPart,
                                                                                                  rightPart
                                                                                              }) => {
                                            let nextContent = leftPart + "~" + selectedPart + "~" + rightPart;
                                            updateContent(nextContent);

                                            contentChangeUndoStackHandler(nextContent);
                                        });
                                    }}>删除线</Button>
                                    <Button type="link" onClick={(event) => {
                                        // @ts-ignore
                                        let element: HTMLTextAreaElement = document.getElementById(editor_text_area);
                                        InputElementHelper.appendTextToTextArea(element, md_template_table, ({
                                                                                                                 appendTarget,
                                                                                                                 leftPart,
                                                                                                                 rightPart
                                                                                                             }) => {
                                            let nextContent = leftPart + appendTarget + rightPart;
                                            updateContent(nextContent);

                                            contentChangeUndoStackHandler(nextContent);
                                        });
                                    }}>表格</Button>
                                    <Button type="link" onClick={(event) => {
                                        // @ts-ignore
                                        let element: HTMLTextAreaElement = document.getElementById(editor_text_area);
                                        InputElementHelper.appendTextToTextArea(element, md_template_code, ({
                                                                                                                appendTarget,
                                                                                                                leftPart,
                                                                                                                rightPart
                                                                                                            }) => {
                                            let nextContent = leftPart + appendTarget + rightPart;
                                            updateContent(nextContent);

                                            contentChangeUndoStackHandler(nextContent);
                                        });
                                    }}>代码块</Button>
                                    <EditorHyperlinkModal/>
                                    <EditorImageModal/>
                                    <Button type="link" onClick={(event) => {
                                        // @ts-ignore
                                        let element: HTMLTextAreaElement = document.getElementById(editor_text_area);
                                        InputElementHelper.appendTextToTextArea(element, md_template_scheduled_tasks, ({
                                                                                                                           appendTarget,
                                                                                                                           leftPart,
                                                                                                                           rightPart
                                                                                                                       }) => {
                                            let nextContent = leftPart + appendTarget + rightPart;
                                            updateContent(nextContent);

                                            contentChangeUndoStackHandler(nextContent);
                                        });
                                    }}>计划任务</Button>
                                </Space>
                            </Row>
                    },
                    {
                        key: '2',
                        label: 'Html 标签',
                        children:
                            <Row gutter={[8, 8]}>
                                <Space size={"small"}>
                                    <Button type="link" onClick={(event) => {
                                        // @ts-ignore
                                        let element: HTMLTextAreaElement = document.getElementById(editor_text_area);
                                        InputElementHelper.appendTextToTextArea(element, "", ({
                                                                                                  leftPart,
                                                                                                  selectedPart,
                                                                                                  rightPart
                                                                                              }) => {
                                            let nextContent = leftPart + "<u>" + selectedPart + "</u>" + rightPart;
                                            updateContent(nextContent);

                                            contentChangeUndoStackHandler(nextContent);
                                        });
                                    }}>下划线</Button>
                                    <Button type="link" onClick={(event) => {
                                        // @ts-ignore
                                        let element: HTMLTextAreaElement = document.getElementById(editor_text_area);
                                        InputElementHelper.appendTextToTextArea(element, "", ({
                                                                                                  leftPart,
                                                                                                  selectedPart,
                                                                                                  rightPart
                                                                                              }) => {
                                            let nextContent = leftPart + "<sup>" + selectedPart + "</sup>" + rightPart;
                                            updateContent(nextContent);

                                            contentChangeUndoStackHandler(nextContent);
                                        });
                                    }}>上标</Button>
                                    <Button type="link" onClick={(event) => {
                                        // @ts-ignore
                                        let element: HTMLTextAreaElement = document.getElementById(editor_text_area);
                                        InputElementHelper.appendTextToTextArea(element, "", ({
                                                                                                  leftPart,
                                                                                                  selectedPart,
                                                                                                  rightPart
                                                                                              }) => {
                                            let nextContent = leftPart + "<sub>" + selectedPart + "</sub>" + rightPart;
                                            updateContent(nextContent);

                                            contentChangeUndoStackHandler(nextContent);
                                        });
                                    }}>下标</Button>
                                    <Button type="link" onClick={(event) => {
                                        // @ts-ignore
                                        let element: HTMLTextAreaElement = document.getElementById(editor_text_area);
                                        InputElementHelper.appendTextToTextArea(element, "", ({
                                                                                                  leftPart,
                                                                                                  selectedPart,
                                                                                                  rightPart
                                                                                              }) => {
                                            let nextContent = leftPart + md_template_summary + rightPart;
                                            updateContent(nextContent);

                                            contentChangeUndoStackHandler(nextContent);
                                        });
                                    }}>摘要</Button>
                                    <Button type="link" onClick={(event) => {
                                        // @ts-ignore
                                        let element: HTMLTextAreaElement = document.getElementById(editor_text_area);
                                        InputElementHelper.appendTextToTextArea(element, "", ({
                                                                                                  leftPart,
                                                                                                  selectedPart,
                                                                                                  rightPart
                                                                                              }) => {
                                            let nextContent = leftPart + md_template_acronym + rightPart;
                                            updateContent(nextContent);

                                            contentChangeUndoStackHandler(nextContent);
                                        });
                                    }}>缩略语</Button>
                                </Space>
                            </Row>
                    },
                    {
                        key: '3',
                        label: '等待施工菜单 3',
                        children:
                            <Row gutter={[8, 8]}>
                                <Space size={"small"}>
                                    <Button type="link">xx 功能</Button>
                                    <Button type="link">xx 功能</Button>
                                    <Button type="link">xx 功能</Button>
                                </Space>
                            </Row>
                    },
                ]} onChange={onChange}/>
            )}
        </EditorContext.Consumer>
    )
}

export default EditorMenu;