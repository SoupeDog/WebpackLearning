import PropertiesHelper from "./PropertiesHelper.jsx"
import LogHelper from "../utils/LogHelper.jsx";

LogHelper.info({className: "PropertiesHelper", msg: "constructor----------"});
export default class MarkdownHelper {

    static formatToHtml({containerId, content, catalogId, useCatalog, useEmoji, useFlowChart, useSequenceDiagram, useTex}) {
        if (!PropertiesHelper.isStringNotNull(content)) {
            throw new Error("MarkdownHelper:[content] should be String,and it can't be null.");
        }
        if (useCatalog != null) {
            if (!PropertiesHelper.isBooleanNotNull(useCatalog)) {
                throw new Error("MarkdownHelper:[useCatalog] should be Boolean.");
            }
            if (!PropertiesHelper.isStringNotNull(containerId)) {
                throw new Error("MarkdownHelper:[containerId] should be String.");
            }
        }
        if (useEmoji != null && !PropertiesHelper.isBooleanNotNull(useEmoji)) {
            throw new Error("MarkdownHelper:[useEmoji] should be Boolean.");
        }
        if (useFlowChart != null && !PropertiesHelper.isBooleanNotNull(useFlowChart)) {
            throw new Error("MarkdownHelper:[useFlowChart] should be Boolean.");
        }
        if (useSequenceDiagram != null && !PropertiesHelper.isBooleanNotNull(useSequenceDiagram)) {
            throw new Error("MarkdownHelper:[useSequenceDiagram] should be Boolean.");
        }
        if (useTex != null && !PropertiesHelper.isBooleanNotNull(useTex)) {
            throw new Error("MarkdownHelper:[useTex] should be Boolean.");
        }
        $("#"+containerId).empty();
        $("#"+catalogId).empty();
        let testEditormdView = editormd.markdownToHTML(containerId, {
            markdown: content,// md 文字内容
            htmlDecode: "style,script,iframe",  // you can filter tags decode
            toc: useCatalog == null ? false : useCatalog,// 是否开启目录
            tocm: false,    // Using [TOCM]
            tocContainer: "#" + catalogId, // 目录容器
            emoji: useEmoji == null ? true : useEmoji,
            theme : "dark",
            previewTheme : "dark",
            editorTheme : "pastel-on-dark",
            taskList: true,
            tex: useTex == null ? true : useTex,  // 解析数学公式
            flowChart: useFlowChart == null ? true : useFlowChart,  // 解析流程图
            sequenceDiagram: useSequenceDiagram == null ? true : useSequenceDiagram,  // 解析顺序图
        });
        return testEditormdView;
    }
}