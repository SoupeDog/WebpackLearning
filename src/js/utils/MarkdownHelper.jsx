export default class MarkdownHelper {

    static formatToHtml({id, text, catalogId}) {
        if (text == null) {
            throw new Error("[text] can't be null.");
        }
        if (id == null || id.trim() == "") {
            throw new Error("[id] can't be null.");
        }
        let testEditormdView = editormd.markdownToHTML(id, {
            markdown: text,//+ "\r\n" + $("#append-test").text(),
            htmlDecode: "style,script,iframe",  // you can filter tags decode
            toc: true,
            tocm: catalogId == null ? false : true,    // Using [TOCM]
            tocContainer: "#" + catalogId, // 自定义 ToC 容器层
            emoji: true,
            taskList: true,
            tex: true,  // 默认不解析
            flowChart: true,  // 默认不解析
            sequenceDiagram: true,  // 默认不解析
        });
        return testEditormdView;
    }
}