import '../../css/hyggeWriter_Markdown.less';
import React from "react";
import MarkdownHelper from "../utils/MarkdownHelper.jsx";

export default class Markdown_Reader extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    // 初始化子组件
    initCallBackView(CallBackView) {
    }

    componentWillMount() {
    }

    render() {
        return (
            <div className={this.props.isHideCatalog==true?"row col-md-12":"row col-md-8"} style={{margin: "0px"}}>
                <div id="markdown_Reader_TestView" className="hyggeWriter_Markdown_Reader col-md-10 offset-md-1" style={{margin: "0px"}}></div>
            </div>
        );
    }

    componentDidMount() {
        var text2="<abbr title=\"全国人民代表大会\">全国人大</abbr>在人民大会堂召开\r\n" +
            "> 毫无根据地沉溺于美妙幻想，被宠溺的那段日子，太过不可思议\r\n" +
            "> <footer>---磷叶石(宝石之国第一季12集)</footer>";
        var text ="---\n" +
            "title: 小书匠语法使用手册\n" +
            "tags: 小书匠,语法,MARKDOWN,帮助\n" +
            "# 常用语法\n" +
            "\n" +
            "___\n" +
            "\n" +
            "## 标题\n" +
            "\n" +
            "```markdown\n" +
            "这是 H1 一级标题\n" +
            "======\n" +
            "这是 H2 二级标题\n" +
            "------\n" +
            "# 这是 H1 一级标题\n" +
            "## 这是 H2 二级标题\n" +
            "### 这是 H3 三级标题\n" +
            "#### 这是 H4 四级标题\n" +
            "##### 这是 H5 五级标题\n" +
            "###### 这是 H6 六级标题\n" +
            "```\n" +
            "**快捷键**: [ctrl + h]\n" +
            "\n" +
            "\n" +
            "## 列表\n" +
            "### 无序列表\n" +
            "```markdown\n" +
            "* 项目1\n" +
            "  * 子项目1.1\n" +
            "  * 子项目1.2\n" +
            "    * 子项目1.2.1\n" +
            "* 项目2\n" +
            "* 项目3\n" +
            "\n" +
            "+ 项目1\n" +
            "  + 子项目1.1\n" +
            "  + 子项目1.2\n" +
            "    + 子项目1.2.1\n" +
            "+ 项目2\n" +
            "+ 项目3\n" +
            "\n" +
            "- 项目1\n" +
            "  - 子项目1.1\n" +
            "  - 子项目1.2\n" +
            "    - 子项目1.2.1\n" +
            "- 项目2\n" +
            "- 项目3\n" +
            "```\n" +
            "**快捷键**: [ctrl + u]\n" +
            "### 有序列表\n" +
            "```markdown\n" +
            "1. 项目1\n" +
            "2. 项目2\n" +
            "3. 项目3\n" +
            "    1. 项目3.1\n" +
            "    2. 项目3.2\n" +
            "\n" +
            "1. 项目1\n" +
            "1. 项目2\n" +
            "1. 项目3\n" +
            "    1. 项目3.1\n" +
            "    1. 项目3.2\n" +
            "```\n" +
            "### 有序列表起始编号\n" +
            "```markdown\n" +
            "58. 项目5\n" +
            "2. 项目6\n" +
            "```\n" +
            "**快捷键**: [ctrl + o]\n" +
            "\n" +
            "\n" +
            "## 链接\n" +
            "```markdown\n" +
            "[链接名称](链接地址)\n" +
            "[链接名称][1]\n" +
            "[1] : 链接地址\n" +
            "```\n" +
            "\n" +
            "\n" +
            "## 图片\n" +
            "```markdown\n" +
            "![名称](链接地址)\n" +
            "![名称][1]\n" +
            "[1] : 链接地址\n" +
            "```\n" +
            "\n" +
            "\n" +
            "## 文字格式\n" +
            "```markdown\n" +
            "**这是文字粗体格式**\n" +
            "\n" +
            "__这是文字粗体格式__\n" +
            "\n" +
            "*这是文字斜体格式*\n" +
            "\n" +
            "_这是文字斜体格式_\n" +
            "```\n" +
            "\n" +
            "\n" +
            "## 引用\n" +
            "```markdown\n" +
            "> 第一行引用文字\n" +
            "> 第二行引用文字\n" +
            "```\n" +
            "\n" +
            "\n" +
            "## 水平线\n" +
            "```markdown\n" +
            "***\n" +
            "```\n" +
            "\n" +
            "___\n" +
            "\n" +
            "# GFM扩展语法\n" +
            "\n" +
            "___\n" +
            "\n" +
            "## 表格\n" +
            "```markdown\n" +
            "First Header  | Second Header\n" +
            "------------- | -------------\n" +
            "Content Cell  | Content Cell\n" +
            "Content Cell  | Content Cell\n" +
            "```\n" +
            "\n" +
            "\n" +
            "## 增强型表格\n" +
            "```markdown\n" +
            "|First Header  | Second Header ||\n" +
            "|First Header  | Second Header | Third Header|\n" +
            "|------------- | -------------|-------------|\n" +
            "表身1Content Cell  | Merge Content Cell||\n" +
            "Content Cell  | Content Cell| Content Cell|\n" +
            "\n" +
            "表身2Content Cell  | Merge Content Cell||\n" +
            "Content Cell  | Content Cell| Content Cell|\n" +
            "[表格标题]\n" +
            "```\n" +
            "\n" +
            "\n" +
            "## 代码\n" +
            "### 行内代码\n" +
            "```markdown\n" +
            "`var x = \"hello world\"`\n" +
            "```\n" +
            "### 块代码\n" +
            "````markdown\n" +
            "```javascript\n" +
            "var a = \"hello world\";\n" +
            "var b = \"good luck\";\n" +
            "```\n" +
            "````\n" +
            "\n" +
            "\n" +
            "## 自动转换成超链接\n" +
            "系统将自动根据内容，将地址转换成超链接格式\n" +
            "```markdown\n" +
            "http://markdown.xiaoshujiang.com\n" +
            "```\n" +
            "\n" +
            "\n" +
            "## HTML\n" +
            "```markdown\n" +
            "<div class=\"hey\">Hello world</div>\n" +
            "```\n" +
            "[支持的html标签](https://github.com/github/markup/tree/master#html-sanitization)\n" +
            "\n" +
            "\n" +
            "## 删除线\n" +
            "```markdown\n" +
            "~~在文字上添加删除线~~\n" +
            "```\n" +
            "\n" +
            "___\n" +
            "\n" +
            "# 扩展语法\n" +
            "\n" +
            "___\n" +
            "\n" +
            "## 目录\n" +
            "```markdown\n" +
            "[toc]\n" +
            "```\n" +
            "\n" +
            "\n" +
            "## 扩展的文字格式\n" +
            "```markdown\n" +
            "++插入的文字++\n" +
            "\n" +
            "==被记号的文字==\n" +
            "\n" +
            "上角文字: 19^th^\n" +
            "\n" +
            "下角文字: H~2~O\n" +
            "```\n" +
            "\n" +
            "\n" +
            "## 印刷字替换\n" +
            "系统将自动替换下列文字，转换成排版系统使用的符号\n" +
            "```markdown\n" +
            "(c) (C) (r) (R) (tm) (TM) (p) (P) +-\n" +
            "```\n" +
            "\n" +
            "\n" +
            "## 缩写定义\n" +
            "```markdown\n" +
            "The HTML specification\n" +
            "is maintained by the W3C.\n" +
            "*[HTML]: Hyper Text Markup Language\n" +
            "*[W3C]:  World Wide Web Consortium\n" +
            "```\n" +
            "\n" +
            "\n" +
            "## 待办事项\n" +
            "```markdown\n" +
            "-[ ] 未完成事项\n" +
            "-[ ] 未完成事项\n" +
            "-[x] 完成事项\n" +
            "-[X] 完成事项\n" +
            "```\n" +
            "\n" +
            "\n" +
            "## 脚注\n" +
            "```markdown\n" +
            "脚注[^1x]\n" +
            "[^1x]: 脚注的用法\n" +
            "```\n" +
            "\n" +
            "\n" +
            "## 定义\n" +
            "```markdown\n" +
            "苹果\n" +
            ": 一种水果\n" +
            ": 一种品牌，计算机，手持设备\n" +
            "桔子\n" +
            ": 一种水果\n" +
            "```\n" +
            "\n" +
            "\n" +
            "## 公式\n" +
            "\n" +
            "### 行内公式\n" +
            "```markdown\n" +
            "这是行内公式`!$ \\Gamma(z) = \\int_0^\\infty t^{z-1}e^{-t}dt\\,. $`\n" +
            "```\n" +
            "### 块公式\n" +
            "````markdown\n" +
            "```mathjax!\n" +
            "$$\\Gamma(z) = \\int_0^\\infty t^{z-1}e^{-t}dt\\,.$$\n" +
            "```\n" +
            "````\n" +
            "\n" +
            "\n" +
            "### 流程图 ([语法](http://adrai.github.io/flowchart.js/))\n" +
            "````markdown\n" +
            "```flow\n" +
            "st=>start: 开始\n" +
            "e=>end: 结束\n" +
            "op=>operation: 操作步骤\n" +
            "cond=>condition: 是 或者 否?\n" +
            "\n" +
            "st->op->cond\n" +
            "cond(yes)->e\n" +
            "cond(no)->op\n" +
            "```\n" +
            "````\n" +
            "\n" +
            "\n" +
            "### 序列图 ([语法](https://github.com/bramp/js-sequence-diagrams/blob/master/src/grammar.jison))\n" +
            "````markdown\n" +
            "```sequence\n" +
            "小明->小李: 你好 小李, 最近怎么样?\n" +
            "Note right of 小李: 小李想了想\n" +
            "小李-->小明: 还是老样子\n" +
            "```\n" +
            "````\n" +
            "\n" +
            "___\n" +
            "\n" +
            "# 小书匠编辑器扩展语法\n" +
            "\n" +
            "___\n" +
            "\n" +
            "## 块代码内文字格式\n" +
            "### 块代码高亮标记\n" +
            "````markdown\n" +
            "```javascript\n" +
            "var >>==hello==<< = 'hello world'\n" +
            "```\n" +
            "````\n" +
            "### 块代码删除线\n" +
            "````markdown\n" +
            "```javascript\n" +
            "var >>~~hello~~<< = 'hello world'\n" +
            "```\n" +
            "````\n" +
            "### 块代码加粗\n" +
            "````markdown\n" +
            "```javascript\n" +
            "var >>**hello**<< = 'hello world'\n" +
            "```\n" +
            "````\n" +
            "### 块代码下横线\n" +
            "````markdown\n" +
            "```javascript\n" +
            "var >>++hello++<< = 'hello world'\n" +
            "```\n" +
            "````\n" +
            "\n" +
            "\n" +
            "小书匠编辑器提供了附件管理功能，用户可通过`./`对附件的引用，比如图片`./jiangzhu.jpg`。附件的上传需通过工具栏的插入图片`ctrl+g`，插入视频`ctrl+shift+v`，插入音频`ctrl+shift+a`，插入附件`ctrl+shift+t`功能键进行操作。\n" +
            "## 视频\n" +
            "```markdown\n" +
            "%[名称](链接地址)\n" +
            "%[名称][1]\n" +
            "[1] : 链接地址\n" +
            "\n" +
            "```\n" +
            "\n" +
            "## 音频\n" +
            "```markdown\n" +
            "~[名称](链接地址)\n" +
            "~[名称][1]\n" +
            "[1] : 链接地址\n" +
            "```\n" +
            "\n" +
            "## 附件\n" +
            "```markdown\n" +
            "=[名称](链接地址)\n" +
            "=[名称][1]\n" +
            "[1] : 链接地址\n" +
            "```\n" +
            "\n" +
            "## 元数据\n" +
            "元数据必须放置在每篇文章的开头才能生效。如果文章里有元数据时，系统将自动以元数据的标题为准，用户通过文章信息的维护界面修改的标题及tags将会被覆盖掉。\n" +
            "```markdown\n" +
            "---\n" +
            "title: 小书匠语法使用手册\n" +
            "tags: 小书匠,语法,MARKDOWN,帮助\n" +
            "--- \n" +
            "```\n" +
            "\n" +
            "\n" +
            "## mermaid流程图，序列图，甘特图（[mermaid语法](http://knsv.github.io/mermaid/index.html)）\n" +
            "\n" +
            "````markdown\n" +
            "```mermaid!\n" +
            "graph TD;\n" +
            "A-->B;\n" +
            "A-->C;\n" +
            "B-->D;\n" +
            "C-->D;\n" +
            "```\n" +
            "````\n" +
            "\n" +
            "\n" +
            "## 统计图 （[统计图语法](https://github.com/flot/flot/blob/master/API.md)）\n" +
            "数据格式为：`{\"data\": [], \"options\":{}}`\n" +
            "系统使用[jquery.parseJSON()](http://api.jquery.com/jquery.parsejson/)函数进行解析，因此代码必须符合该函数的要求才能正常解析。\n" +
            "````markdown\n" +
            "```plot!\n" +
            "{\n" +
            "\"data\": [ [[0, 0], [1, 1]] ],\n" +
            "\"options\": { \"yaxis\": { \"max\": 1 } }\n" +
            "}\n" +
            "```\n" +
            "````\n" +
            "\n" +
            "\n" +
            "## 自定义class\n" +
            "```` markdown\n" +
            "## 自定义class {class名称}\n" +
            "````\n" +
            "通过自定义的class名称后，你就可以在每篇文章的自定义css里添加自己想要的样式了．\n" +
            "\n" +
            "\n" +
            "## cjk强调\n" +
            "``` markdown\n" +
            "_这里将显示带有衬线字体效果的中文做为强调_\n" +
            "```\n" +
            "\n" +
            "\n" +
            "## cjk注音标示\n" +
            "``` markdown\n" +
            "{需要被注音标示的内容}(注音标示)\n" +
            "{需要被注音标示的内容}[编号]\n" +
            "[编号]: 注音标示\n" +
            "```\n" +
            "\n" +
            "\n" +
            "## 居中显示文字\n" +
            "```markdown\n" +
            "->居中显示的文字<-\n" +
            "```\n" +
            "\n" +
            "\n" +
            "## 对齐显示文字\n" +
            "\n" +
            "```markdown\n" +
            ":>居左显示的文字<-\n" +
            "->居右显示的文字<:\n" +
            ":>两端对齐显示的文字<:\n" +
            "->居中显示的文字<-\n" +
            "```\n" +
            "注： 该语法与center语法冲突，两种语法同时开启时，align语法将覆盖center语法。\n" +
            "\n" +
            "----------\n" +
            "\n" +
            "\n" +
            "___\n" +
            "\n" +
            "# 示例\n" +
            "\n" +
            "\n" +
            "___\n" +
            "\n" +
            "[toc]\n" +
            "\n" +
            "![箭竹](./jianzhu.jpg)\n" +
            "\n" +
            "http://www.github.com/suziwen/markdownxiaoshujiang\n" +
            "http://www.xiaoshujiang.com\n" +
            "\n" +
            "# 这是 H1 一s级标题\n" +
            "## 这是 H2 二级标题\n" +
            "### 这是 H3 三级标题\n" +
            "#### 这是 H4 四级标题\n" +
            "##### 这是 H5 五级标题\n" +
            "###### 这是 H6 六级标题\n" +
            "\n" +
            "### 视频\n" +
            "%[电影](http://markdown.xiaoshujiang.com/media/movie.ogg)\n" +
            "\n" +
            "### 音频\n" +
            "~[音乐](http://markdown.xiaoshujiang.com/media/horse.ogg)\n" +
            "\n" +
            "### 附件\n" +
            "=[附件](./jianzhu.jpg)\n" +
            "\n" +
            "### 待办事项\n" +
            "-[ ] 未完成事项\n" +
            "-[x] 完成事项\n" +
            "-[X] 完成事项\n" +
            "\n" +
            "### 缩写定义\n" +
            "\n" +
            "The HTML specification\n" +
            "is maintained by the W3C.\n" +
            "\n" +
            "*[HTML]: Hyper Text Markup Language\n" +
            "*[W3C]:  World Wide Web Consortium\n" +
            "\n" +
            "### 印刷字替换\n" +
            "\n" +
            "(c) (C) (r) (R) (tm) (TM) (p) (P) +-\n" +
            "\n" +
            "### html代码\n" +
            "\n" +
            "<div>html代码</div>\n" +
            "\n" +
            "### 流程图 ([语法](http://adrai.github.io/flowchart.js/))\n" +
            "\n" +
            "```flow\n" +
            "st=>start: 开始\n" +
            "e=>end: 结束\n" +
            "op=>operation: 操作步骤\n" +
            "cond=>condition: 是 或者 否?\n" +
            "\n" +
            "st->op->cond\n" +
            "cond(yes)->e\n" +
            "cond(no)->op\n" +
            "```\n" +
            "\n" +
            "### 序列图 ([语法](https://github.com/bramp/js-sequence-diagrams/blob/master/src/grammar.jison))\n" +
            "\n" +
            "```sequence\n" +
            "小明->小李: 你好 小李, 最近怎么样?\n" +
            "Note right of 小李: 小李想了想\n" +
            "小李-->小明: 还是老样子\n" +
            "```\n" +
            "\n" +
            "### 脚注[^1x]\n" +
            "\n" +
            "[^1x]: 脚注的用法\n" +
            "\n" +
            "### 表格Tables\n" +
            "\n" +
            "First Header  | Second Header\n" +
            "------------- | -------------\n" +
            "Content Cell  | Content Cell\n" +
            "Content Cell  | Content Cell\n" +
            "\n" +
            "### 定义\n" +
            "\n" +
            "苹果\n" +
            ": 一种水果\n" +
            ": 一种品牌，计算机，手持设备\n" +
            "\n" +
            "桔子\n" +
            ": 一种水果\n" +
            "\n" +
            "### 文字格式\n" +
            "\n" +
            "**这是文字粗体格式**\n" +
            "\n" +
            "__这是文字粗体格式__\n" +
            "\n" +
            "*这是文字斜体格式*\n" +
            "\n" +
            "_这是文字斜体格式_\n" +
            "\n" +
            "~~在文字上添加删除线~~\n" +
            "\n" +
            "++插入的文字++\n" +
            "\n" +
            "==被记号的文字==\n" +
            "\n" +
            "上角文字: 19^th^\n" +
            "\n" +
            "下角文字: H~2~O\n" +
            "\n" +
            "### 无序列表\n" +
            "\n" +
            "* 项目1\n" +
            "  * 子项目1.1\n" +
            "  * 子项目1.2\n" +
            "    * 子项目1.2.1\n" +
            "* 项目2\n" +
            "* 项目3\n" +
            "\n" +
            "### 有序列表\n" +
            "\n" +
            "1. 项目1\n" +
            "2. 项目2\n" +
            "3. 项目3\n" +
            "    1. 项目3.1\n" +
            "    2. 项目3.2\n" +
            "\n" +
            "### 有序列表起始编号\n" +
            "\n" +
            "58. 项目5\n" +
            "2. 项目6\n" +
            "\n" +
            "### 图片\n" +
            "\n" +
            "![图片名称](http://xiaoshujiang.com/favicon.ico)\n" +
            "链接\n" +
            "\n" +
            "[链接名称](http://xiaoshujiang.com)\n" +
            "### 引用\n" +
            "\n" +
            "> 第一行引用文字\n" +
            "> 第二行引用文字\n" +
            "### 水平线\n" +
            "\n" +
            "***\n" +
            "### 代码\n" +
            "\n" +
            "#### 行内代码\n" +
            "\n" +
            "`var x = \"hello world\"`\n" +
            "\n" +
            "#### 块代码\n" +
            "\n" +
            "```java\n" +
            "/**\n" +
            " * @author John Smith <john.smith@example.com>\n" +
            " * @version 1.0\n" +
            "*/\n" +
            "package l2f.gameserver.model;\n" +
            "\n" +
            "import >>++java.util.ArrayList++<<;\n" +
            "\n" +
            ">>~~public abstract class L2Character {~~<<\n" +
            ">>++public abstract class L2Character extends L2Object {++<<\n" +
            "  public static final Short ABNORMAL_EFFECT_BLEEDING = 0x0_0_0_1; // not sure\n" +
            "\n" +
            "  public void moveTo(int x, int y, int z) {\n" +
            "    _ai = null;\n" +
            "    _log.warning(\"Should not be called\");\n" +
            "    if (1 > 5) {\n" +
            "      return;\n" +
            "    }\n" +
            "  }\n" +
            "\n" +
            "  /** Task of AI notification */\n" +
            "  @SuppressWarnings( { \"nls\", \"unqualified-field-access\", \"boxing\" })\n" +
            "  >>==public class NotifyAITask implements Runnable {\n" +
            "    private final CtrlEvent _evt;\n" +
            "\n" +
            "    List<String> mList==<< = new ArrayList<String>()\n" +
            "\n" +
            "    public void run() {\n" +
            "      try {\n" +
            "        getAI().notifyEvent(_evt, _evt.class, null);\n" +
            "      } catch (Throwable t) {\n" +
            "        t.printStackTrace();\n" +
            "      }\n" +
            "    }\n" +
            "  }\n" +
            "}\n" +
            "```\n" +
            "## 块代码内文字格式\n" +
            "### 块代码高亮标记\n" +
            "```javascript\n" +
            "  var >>==hello==<< = 'hello world'\n" +
            "```\n" +
            "### 块代码删除线\n" +
            "```javascript\n" +
            "  var >>~~hello~~<< = 'hello world'\n" +
            "```\n" +
            "### 块代码加粗\n" +
            "```javascript\n" +
            "  var >>**hello**<< = 'hello world'\n" +
            "```\n" +
            "### 块代码下横线\n" +
            "```javascript\n" +
            "  var >>++hello++<< = 'hello world'\n" +
            "```\n" +
            "\n" +
            "### 显示行号\n" +
            "``` javascript?linenums\n" +
            "var x = 1;\n" +
            "var z = 'str';\n" +
            "```\n" +
            "\n" +
            "### 高亮指定行\n" +
            "``` javascript?linenums&fancy=1,3,5\n" +
            "var x = 1;\n" +
            "var y = 2;\n" +
            "var z = 3;\n" +
            "var u = 4;\n" +
            "var w = 5;\n" +
            "var a = 6;\n" +
            "```\n" +
            "\n" +
            "### 显示行号并从指定行数计数\n" +
            "``` javascript?linenums=10\n" +
            "var x = 1;\n" +
            "```\n" +
            "\n" +
            "### 禁用显示行号\n" +
            "``` javascript?linenums=false\n" +
            "var x = 1;\n" +
            "```\n" +
            "\n" +
            "### 公式\n" +
            "#### 行内公式\n" +
            "这是行内公式`!$ \\Gamma(z) = \\int_0^\\infty t^{z-1}e^{-t}dt\\,. $`\n" +
            "#### 块公式\n" +
            "```mathjax!\n" +
            "$$\\Gamma(z) = \\int_0^\\infty t^{z-1}e^{-t}dt\\,.$$\n" +
            "```\n" +
            "\n" +
            "#### 带编号的公式\n" +
            "`!$\\eqref{ref1}$`\n" +
            "\n" +
            "```mathjax!\n" +
            "\\begin{equation}\n" +
            "\\int_0^\\infty \\frac{x^22}{e^x-1}\\,dx = \\frac{\\pi^4}{15}\\label{ref1}\n" +
            "\\end{equation}\n" +
            "```\n" +
            "\n" +
            "`!$\\eqref{ref1}$`\n" +
            "### 统计图\n" +
            "```plot!\n" +
            "{\n" +
            "\"data\": [ [[0, 0], [1, 1]] ],\n" +
            "\"options\": { \"yaxis\": { \"max\": 1 } }\n" +
            "}\n" +
            "```\n" +
            "\n" +
            "### mermaid流程图，序列图，甘特图\n" +
            "\n" +
            "\n" +
            "#### 流程图\n" +
            "```mermaid!\n" +
            "graph TD;\n" +
            "    A-->B;\n" +
            "    A-->C;\n" +
            "    B-->D;\n" +
            "    C-->D;\n" +
            "```\n" +
            "\n" +
            "#### 序列图\n" +
            "\n" +
            "```mermaid!\n" +
            "sequenceDiagram\n" +
            "A->> B: Query\n" +
            "B->> C: Forward query\n" +
            "Note right of C: Thinking...\n" +
            "C->> B: Response\n" +
            "B->> A: Forward response\n" +
            "```\n" +
            "\n" +
            "#### 甘特图\n" +
            "```mermaid!\n" +
            "gantt\n" +
            "        dateFormat  YYYY-MM-DD\n" +
            "        title Adding GANTT diagram functionality to mermaid\n" +
            "        section A section\n" +
            "        Completed task            :done,    des1, 2014-01-06,2014-01-08\n" +
            "        Active task               :active,  des2, 2014-01-09, 3d\n" +
            "        Future task               :         des3, after des2, 5d\n" +
            "        Future task2               :         des4, after des3, 5d\n" +
            "        section Critical tasks\n" +
            "        Completed task in the critical line :crit, done, 2014-01-06,24h\n" +
            "        Implement parser and jison          :crit, done, after des1, 2d\n" +
            "        Create tests for parser             :crit, active, 3d\n" +
            "        Future task in critical line        :crit, 5d\n" +
            "        Create tests for renderer           :2d\n" +
            "        Add to mermaid                      :1d\n" +
            "```\n" +
            "\n" +
            "### PPT语法\n" +
            "\n" +
            "使用\n" +
            "```\n" +
            " \n" +
            " ----\n" +
            " \n" +
            "```\n" +
            "作为一个水平页分割线，注意在`----`前后都需要空一行\n" +
            "\n" +
            "使用\n" +
            "```\n" +
            " \n" +
            " --\n" +
            " \n" +
            "```\n" +
            "作为一个垂直页分割线, 注意在`--`前后都需要空一行\n" +
            "\n" +
            "通过如下形式\n" +
            "```\n" +
            "<!-- .element: class=\"fragment\" data-fragment-index=\"1\" -->\n" +
            "```\n" +
            "可以实现fragment显示效果\n" +
            "\n" +
            "注：　在演示文档模式下，`toc`和脚注语法将失效.\n" +
            "\n" +
            "\n" +
            "### emoji表情[语法](https://github.com/twitter/twemoji)\n" +
            "\n" +
            "> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:\n" +
            ">\n" +
            "> Shortcuts (emoticons): :-) :-( 8-) ;)\n" +
            "\n" +
            "### 自定义class\n" +
            "\n" +
            "#### 自定义class用例{green}\n" +
            "\n" +
            "你可以通过查看生成的html代码里，在h4里找到名为`green`的class名称．\n" +
            "\n" +
            "### cjk强调\n" +
            "\n" +
            "#### _这里将显示中文衬线字体做为强调样式_\n" +
            "\n" +
            "### cjk注音标示\n" +
            "\n" +
            "{小}(xiao){书}(shu){匠}(jiang)\n" +
            "\n" +
            "### 居中显示\n" +
            "\n" +
            "->居中显示的{文字}(wenzi)<-\n" +
            "\n" +
            "->![箭竹](./jianzhu.jpg)<-\n" +
            "\n" +
            "### 文字对齐\n" +
            "\n" +
            ":>居左显示的文字<-\n" +
            "\n" +
            "->居右显示的文字<:\n" +
            "\n" +
            ":>两端对齐显示的文字<:\n" +
            "\n" +
            "->居中显示的文字<-\n" +
            "\n" +
            "### 增强型表格\n" +
            "|First Header  | Second Header ||\n" +
            "|First Header  | Second Header | Third Header|\n" +
            "|------------- | -------------|-------------|\n" +
            "表身1Content Cell  | Merge Content Cell||\n" +
            "Content Cell  | Content Cell| Content Cell|\n" +
            "\n" +
            "表身2Content Cell  | Merge Content Cell||\n" +
            "Content Cell  | Content Cell| Content Cell|\n" +
            "[表格标题]\n";


        MarkdownHelper.formatToHtml({
            text:text,
            id:"markdown_Reader_TestView",
            catalogId:"custom-toc-container"
        });
    }
}