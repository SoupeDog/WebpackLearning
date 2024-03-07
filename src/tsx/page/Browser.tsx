import 'md-editor-rt/lib/preview.css';

import React, {createContext, useMemo, useState} from 'react';
import zhCN from "antd/locale/zh_CN";
import {Affix, ConfigProvider, FloatButton, Layout, message, Tree} from "antd";
import {MdPreview} from 'md-editor-rt';
import {allowAll, editor_id_for_browser, key_draft} from "./component/properties/MarkDownStaticValue";
import Sider from "antd/es/layout/Sider";
import {Content} from "antd/es/layout/layout";
import {AntdTreeNodeInfo, CreateTocTreeInputParam, MdHelper, TreeNodeInfo} from "../util/MdHelper";
import {DownOutlined} from '@ant-design/icons';
import {TreeProps} from "antd/es/tree/Tree";

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
    // draft == undefined ? "" : draft
    const [content, updateContent] = useState(draft ?? "");
    const [tocEnable, updateTocEnable] = useState(false);
    const [tocTree, updateTocTree] = useState(new Array<TreeNodeInfo>());

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
                        <MdPreview editorId={editor_id_for_browser} modelValue={content} sanitize={allowAll}/>
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
                                            {/*原生目录 MdCatalog 即可，转而使用 antd Tree 组件是因为 MdCatalog 对于小标题过多而溢出屏幕的目录无能为力*/}
                                            {/*<MdCatalog editorId={editor_id_for_browser} scrollElement={scrollElement}/>*/}
                                            <Tree
                                                defaultExpandAll={true}
                                                showLine={true}
                                                treeData={tocTree as any}
                                                switcherIcon={<DownOutlined/>}
                                                onSelect={onSelect}
                                            >
                                            </Tree>
                                        </div>
                                    </div>
                                    : <div/>
                            )}
                        </Affix>
                    </Sider>
                    <FloatButton.Group shape="square" style={{right: 15, zIndex: 9999}}>
                        <FloatButton onClick={() => {
                            updateTocEnable(!tocEnable);

                            let antdTreeNodeInfos = new Array<TreeNodeInfo>();
                            let map = new Map<number, TreeNodeInfo>();

                            document.querySelectorAll('H1[data-line][id], H2[data-line][id], H3[data-line][id], H4[data-line][id], H5[data-line][id], H6[data-line][id]').forEach((item, index) => {
                                // @ts-ignore
                                let antdTreeNode: TreeNodeInfo = {
                                    title: item.textContent!,
                                    children: new Array<AntdTreeNodeInfo>(),
                                    index: index,
                                    id: item.id,
                                    dataLine: item.getAttribute('data-line')!,
                                    nodeName: item.tagName,
                                };

                                antdTreeNodeInfos.push(antdTreeNode);
                                map.set(index, antdTreeNode);
                            });

                            let currentTOC = MdHelper.initTitleTree({
                                currentTOCArray: antdTreeNodeInfos,
                                allTocNodeMap: map
                            } as CreateTocTreeInputParam);

                            updateTocTree(currentTOC);
                        }}/>
                        <FloatButton.BackTop visibilityHeight={0}/>
                    </FloatButton.Group>
                </Layout>
            </BrowserContext.Provider>
        </ConfigProvider>
    );
}

// 目录选中自动跳转函数
const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
    // @ts-ignore
    let item: TreeNodeInfo = info.node;

    // 用标签类型 + data-line 属性做筛选
    let element = document.querySelector(item.nodeName + '[data-line="' + item.dataLine + '"]');

    if (element != undefined) {
        // 滚动到锚点元素的顶部(offsetTop 是数字类型，你可以在此基础上追加偏移量)

        window.scrollTo({
            // @ts-ignore
            top: element.offsetTop,
            behavior: "smooth"
        });

        // 拿到 dom 元素可以直接使用此方法滚动到目标位置(无法追加偏移量)
        // element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    } else {
        message.warning("未找到对应跳转锚点");
    }
};

export const BrowserContext = createContext<BrowserState>({} as BrowserState);
export default Browser;