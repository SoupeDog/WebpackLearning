export default class MarkdownHelper {

    static formatToHtml(properties) {
        if (properties.text == null) {
            throw new Error("[text] can't be null.");
        }
        if (properties.id == null || properties.id.trim() == "") {
            throw new Error("[if] can't be null.");
        }
        var testEditormdView = editormd.markdownToHTML(properties.id, {
            markdown: properties.text,//+ "\r\n" + $("#append-test").text(),
            htmlDecode: "style,script,iframe",  // you can filter tags decode
            toc: true,
            tocm: properties.catalogId == null ? false : true,    // Using [TOCM]
            tocContainer: "#" + properties.catalogId, // 自定义 ToC 容器层
            emoji: true,
            taskList: true,
            tex: true,  // 默认不解析
            flowChart: true,  // 默认不解析
            sequenceDiagram: true,  // 默认不解析
        });
        return testEditormdView;

    }
}