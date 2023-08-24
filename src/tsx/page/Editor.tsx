import "highlight.js/styles/atom-one-dark-reasonable.css"
import "../../style/markdownCustomStyle.less"

import React, {createContext, useState} from 'react';
import zhCN from "antd/locale/zh_CN";
import {ConfigProvider} from "antd";
import EditorMenu from "./component/EditorMenu";
import EditorView from "./component/EditorView";

export interface EditorState {
    content: string;
    updateContent: Function;
}

export const EditorContext = createContext<EditorState>(
    {
        content: "",
        updateContent: () => {
        }
    }
);

function Editor() {
    const [content, updateContent] = useState("");

    return (
        <ConfigProvider locale={zhCN}>
            <EditorContext.Provider value={
                {
                    content: content,
                    updateContent: updateContent
                }
            }>
                <EditorMenu/>
                <EditorView/>
            </EditorContext.Provider>
        </ConfigProvider>
    );
}

export default Editor;