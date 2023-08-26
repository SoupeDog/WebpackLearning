import React, {createContext, useMemo, useState} from 'react';
import zhCN from "antd/locale/zh_CN";
import {ConfigProvider} from "antd";
import EditorMenu from "./component/EditorMenu";
import EditorView from "./component/EditorView";

export interface EditorState {
    content: string;
    updateContent: Function;
}

export const EditorContext = createContext<EditorState>({} as EditorState);

function Editor() {
    const [content, updateContent] = useState("");

    const state = useMemo(() => ({
        content: content,
        updateContent: updateContent
    }), [content])

    return (
        <ConfigProvider locale={zhCN}>
            <EditorContext.Provider value={state}>
                <EditorMenu/>
                <EditorView/>
            </EditorContext.Provider>
        </ConfigProvider>
    );
}

export default Editor;