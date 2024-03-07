import 'md-editor-rt/lib/style.css';

import React, {createContext, useMemo, useState} from 'react';
import zhCN from "antd/locale/zh_CN";
import {ConfigProvider, message} from "antd";
import {MdEditor} from 'md-editor-rt';
import {allowAll, key_draft} from "./component/properties/MarkDownStaticValue";

export interface EditorState {
    content: string;
    updateContent: Function;
}

// 草稿
const draft = localStorage.getItem(key_draft);

function Editor() {
    // draft == undefined ? "" : draft
    const [content, updateContent] = useState(draft ?? "");

    const state = useMemo(() => ({
        content: content,
        updateContent: updateContent,
    }), [content]);

    return (
        <ConfigProvider locale={zhCN}>
            <EditorContext.Provider value={state}>
                <MdEditor modelValue={content} onChange={updateContent} onSave={() => {
                    localStorage.setItem(key_draft, content);
                    message.success("保存成功", 3);
                }} sanitize={allowAll}/>
            </EditorContext.Provider>
        </ConfigProvider>
    );
}

export const EditorContext = createContext<EditorState>({} as EditorState);
export default Editor;