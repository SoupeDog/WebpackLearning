import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm' // 渲染表格、checkBox 等组件
import rehypeRaw from 'rehype-raw' // 允许原生 html 渲染
import rehypeSlug from 'rehype-slug' // 标题标签标记描点
import rehypeHighlight from 'rehype-highlight' // 代码高亮标记
import remarkMath from 'remark-math' // 数学公式支持
import rehypeKatex from 'rehype-katex' // 数学公式支持
import bash from 'highlight.js/lib/languages/bash';
import shell from 'highlight.js/lib/languages/shell'
import dockerfile from 'highlight.js/lib/languages/dockerfile';
import nginx from 'highlight.js/lib/languages/nginx';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import java from 'highlight.js/lib/languages/java';
import python from 'highlight.js/lib/languages/python';
import sql from 'highlight.js/lib/languages/sql';
import properties from 'highlight.js/lib/languages/properties';
import json from 'highlight.js/lib/languages/json';
import xml from 'highlight.js/lib/languages/xml';
import yaml from 'highlight.js/lib/languages/yaml';
import {Col, Row} from "antd";
import React from "react";
import TextArea from "antd/es/input/TextArea";
import {EditorContext} from "../Editor";
import {class_md_preview, editor_text_area} from "./properties/ElementNameContainer";

function EditorView() {
    return (
        <EditorContext.Consumer>
            {({content, updateContent}) => (
                <Row gutter={[8, 8]} style={{
                    marginTop: "8px",
                    borderBottom: "solid",
                    borderBottomWidth: "2px",
                    borderBottomColor: "#adadad",
                    paddingBottom: "8px"
                }}>
                    <Col span={12} style={{maxHeight: "600px"}}>
                        <TextArea id={editor_text_area} rows={27}
                                  placeholder="这里是 markdown 编辑器写作区，请开始您的创作吧！"
                                  value={content}
                                  onChange={event => {
                                      updateContent(event.target.value);
                                  }}
                            // 不允许文本域调整大小
                                  style={{resize: "none"}}
                        />
                    </Col>
                    <Col span={12} style={{maxHeight: "600px", overflowY: "scroll"}}>
                        <ReactMarkdown className={class_md_preview}
                                       children={content}
                                       remarkPlugins={[remarkGfm, remarkMath]}
                                       rehypePlugins={[rehypeKatex, rehypeSlug, rehypeRaw, [rehypeHighlight, {
                                           detect: true,// 没有 language 属性的代码尝试自动解析语言类型
                                           ignoreMissing: true, // 出现故障不抛出异常打断页面渲染
                                           languages: {// 默认会装载部分语言，但手动更完整和准确
                                               bash,
                                               shell,
                                               dockerfile,
                                               nginx,
                                               javascript,
                                               typescript,
                                               java,
                                               python,
                                               sql,
                                               properties,
                                               json,
                                               xml,
                                               yaml
                                           }
                                       }]]}
                        />
                    </Col>
                </Row>
            )}
        </EditorContext.Consumer>
    );
}

export default EditorView;