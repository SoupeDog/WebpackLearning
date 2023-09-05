import React, {createContext, useMemo, useState} from 'react';
import zhCN from "antd/locale/zh_CN";
import {ConfigProvider} from "antd";
import EditorMenu from "./component/EditorMenu";
import EditorView from "./component/EditorView";

export interface EditorState {
    content: string;
    updateContent: Function;
}

function Editor() {
    const [content, updateContent] = useState("");
    const [editorExtendInfo, updateEditorExtendInfo] = useState({
        hyperlinkModalEnable: false,
        hyperlinkText: "",
        hyperlinkValue: ""
    });
    const state = useMemo(() => ({
        content: content,
        updateContent: updateContent,
        editorExtendInfo: editorExtendInfo,
        updateEditorExtendInfo: updateEditorExtendInfo
    }), [content, editorExtendInfo])

    return (
        <ConfigProvider locale={zhCN}>
            <EditorContext.Provider value={state}>
                <EditorMenu/>
                <EditorView/>
            </EditorContext.Provider>
        </ConfigProvider>
    );
}

export const EditorContext = createContext<EditorState>({} as EditorState);
export default Editor;