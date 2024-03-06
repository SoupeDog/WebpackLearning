import 'md-editor-rt/lib/preview.css';

import React, {createContext, useMemo, useState} from 'react';
import zhCN from "antd/locale/zh_CN";
import {Affix, ConfigProvider, FloatButton, Layout} from "antd";
import {MdCatalog, MdPreview} from 'md-editor-rt';
import {allowAll, editor_id_for_browser, key_draft} from "./component/properties/MarkDownStaticValue";
import Sider from "antd/es/layout/Sider";
import {Content} from "antd/es/layout/layout";

export interface BrowserState {
    content: string;
    updateContent: Function;
    tocEnable: boolean;
    updateTocEnable: Function;
}

// 滚动目标元素
const scrollElement = document.documentElement;
// 草稿
const draft = localStorage.getItem(key_draft);

function Browser() {
    const [content, updateContent] = useState(draft == undefined ? "" : draft);
    const [tocEnable, updateTocEnable] = useState(true);

    const state = useMemo(() => ({
        content: content,
        updateContent: updateContent,
        tocEnable: tocEnable,
        updateTocEnable: updateTocEnable,
    }), [content, tocEnable]);

    return (
        <ConfigProvider locale={zhCN}>
            <BrowserContext.Provider value={state}>
                <Layout>
                    <Content>
                        <MdPreview sanitize={allowAll} editorId={editor_id_for_browser} modelValue={content}/>
                    </Content>
                    <Sider trigger={null}
                           collapsed={!tocEnable}
                           width={"20%"} collapsedWidth={0}
                           style={{backgroundColor: "#F0F2F5"}}>
                        <Affix style={{
                            zIndex: 9999,
                            position: 'absolute',
                            top: 164,
                            right: 0,
                            width: "100%"
                        }} offsetTop={164}>
                            {(tocEnable ?
                                    <div style={{paddingLeft: "20px"}}>
                                        <div style={{
                                            textIndent: "0.5em",
                                            backgroundColor: "#fff",
                                            borderTopLeftRadius: "8px",
                                            borderBottomLeftRadius: "8px"
                                        }}>
                                            <div style={{textAlign: "center", fontWeight: "600", fontSize: "18px"}}>
                                                目录
                                            </div>
                                            <MdCatalog editorId={editor_id_for_browser} scrollElement={scrollElement}/>
                                        </div>
                                    </div>
                                    : <div/>
                            )}
                        </Affix>
                    </Sider>
                    <FloatButton.Group shape="square" style={{right: 15, zIndex: 9999}}>
                        <FloatButton onClick={() => {
                            updateTocEnable(!tocEnable)
                        }}/>
                        <FloatButton.BackTop visibilityHeight={0}/>
                    </FloatButton.Group>
                </Layout>
            </BrowserContext.Provider>
        </ConfigProvider>
    );
}

export const BrowserContext = createContext<BrowserState>({} as BrowserState);
export default Browser;