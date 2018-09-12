import '../css/default.css';
import '../css/browse.less';
import '../css/hyggeWriter_Markdown.less';

import React from 'react';
import ReactDOM from 'react-dom';
import BrowseContainer from "./demo/BrowseContainer.jsx";

const article = {
    articleId: "0704177b0c5244cba92f3498d4ad2bd5",
    title: "测试文章改",
    boardId: "18719760fa384a98b43d248499403692",
    articleCategoryId: "929e2ad794c141f8b446c4900ddaa6f6",
    uId: "U00000001",
    statementId: "c8b7eeccc15349b2bbcf57f302915be5",
    summary: "摘要",
    content:
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
    "[表格标题]\n",
    wordCount: 5,
    articleRetainType: "DEFAULT",
    articlePath: null,
    pageViews: 0,
    legal_Flag: true,
    lastUpdateTs: 1535205553040,
    ts: 1532621329861
}

const article2 = {
    articleId: "0704177b0c5244cba92f3498d4ad2bd5",
    title: "测试文章改",
    boardId: "18719760fa384a98b43d248499403692",
    articleCategoryId: "929e2ad794c141f8b446c4900ddaa6f6",
    uId: "U00000001",
    statementId: "c8b7eeccc15349b2bbcf57f302915be5",
    summary: "摘要",
    content: "\n" +
    "# 段落一\n" +
    "<abbr title=\"全国人民代表大会\">全国人大</abbr>在人民大会堂召开 \n" +
    "\n" +
    "## 段落一引用\n" +
    "\n" +
    "> 毫无根据地沉溺于美妙幻想，被宠溺的那段日子，太过不可思议<footer>--- 磷叶石(宝石之国第一季12集)</footer>\n" +
    "\n" +
    " - 搞事情\n" +
    " - 搞搞事情\n" +
    "\n" +
    "\n" +
    "# 段落二\n" +
    "\n" +
    "```\n" +
    "    componentDidUpdate(prevProps, prevState, snapshot) {\n" +
    "        console.log(\"componentDidUpdate----------\");\n" +
    "        console.log(\"prevProps:\" + JSON.stringify(prevProps));\n" +
    "        console.log(\"prevState:\" + JSON.stringify(prevState));\n" +
    "        console.log(\"snapshot:\" + JSON.stringify(snapshot));\n" +
    "        console.log(\"\");\n" +
    "    }\n" +
    "```\n" +
    "\n" +
    "\n",
    wordCount: 5,
    articleRetainType: "DEFAULT",
    articlePath: null,
    pageViews: 0,
    legal_Flag: true,
    lastUpdateTs: 1535205553040,
    ts: 1532621329861
}
const article3 = {
    articleId: "0704177b0c5244cba92f3498d4ad2bd5",
    title: "测试文章改",
    boardId: "18719760fa384a98b43d248499403692",
    articleCategoryId: "929e2ad794c141f8b446c4900ddaa6f6",
    uId: "U00000001",
    statementId: "c8b7eeccc15349b2bbcf57f302915be5",
    summary: "摘要",
    content: "### 主要特性\n" +
    "\n" +
    "- 支持“标准”Markdown / CommonMark和Github风格的语法，也可变身为代码编辑器；\n" +
    "- 支持实时预览、图片（跨域）上传、预格式文本/代码/表格插入、代码折叠、搜索替换、只读模式、自定义样式主题和多语言语法高亮等功能；\n" +
    "- 支持ToC（Table of Contents）、Emoji表情、Task lists、@链接等Markdown扩展语法；\n" +
    "- 支持TeX科学公式（基于KaTeX）、流程图 Flowchart 和 时序图 Sequence Diagram;\n" +
    "- 支持识别和解析HTML标签，并且支持自定义过滤标签解析，具有可靠的安全性和几乎无限的扩展性；\n" +
    "- 支持 AMD / CMD 模块化加载（支持 Require.js & Sea.js），并且支持自定义扩展插件；\n" +
    "- 兼容主流的浏览器（IE8+）和Zepto.js，且支持iPad等平板设备；\n" +
    "- 支持自定义主题样式；\n" +
    "\n" +
    "# Editor.md\n" +
    "\n" +
    "![](https://pandao.github.io/editor.md/images/logos/editormd-logo-180x180.png)\n" +
    "\n" +
    "![](https://img.shields.io/github/stars/pandao/editor.md.svg) ![](https://img.shields.io/github/forks/pandao/editor.md.svg) ![](https://img.shields.io/github/tag/pandao/editor.md.svg) ![](https://img.shields.io/github/release/pandao/editor.md.svg) ![](https://img.shields.io/github/issues/pandao/editor.md.svg) ![](https://img.shields.io/bower/v/editor.md.svg)\n" +
    "\n" +
    "**目录 (Table of Contents)**\n" +
    "\n" +
    "[TOCM]\n" +
    "\n" +
    "[TOC]\n" +
    "\n" +
    "# Heading 1\n" +
    "## Heading 2\n" +
    "### Heading 3\n" +
    "#### Heading 4\n" +
    "##### Heading 5\n" +
    "###### Heading 6\n" +
    "# Heading 1 link [Heading link](https://github.com/pandao/editor.md \"Heading link\")\n" +
    "## Heading 2 link [Heading link](https://github.com/pandao/editor.md \"Heading link\")\n" +
    "### Heading 3 link [Heading link](https://github.com/pandao/editor.md \"Heading link\")\n" +
    "#### Heading 4 link [Heading link](https://github.com/pandao/editor.md \"Heading link\") Heading link [Heading link](https://github.com/pandao/editor.md \"Heading link\")\n" +
    "##### Heading 5 link [Heading link](https://github.com/pandao/editor.md \"Heading link\")\n" +
    "###### Heading 6 link [Heading link](https://github.com/pandao/editor.md \"Heading link\")\n" +
    "\n" +
    "#### 标题（用底线的形式）Heading (underline)\n" +
    "\n" +
    "This is an H1\n" +
    "=============\n" +
    "\n" +
    "This is an H2\n" +
    "-------------\n" +
    "\n" +
    "### 字符效果和横线等\n" +
    "                \n" +
    "----\n" +
    "\n" +
    "~~删除线~~ <s>删除线（开启识别HTML标签时）</s>\n" +
    "*斜体字*      _斜体字_\n" +
    "**粗体**  __粗体__\n" +
    "***粗斜体*** ___粗斜体___\n" +
    "\n" +
    "上标：X<sub>2</sub>，下标：O<sup>2</sup>\n" +
    "\n" +
    "**缩写(同HTML的abbr标签)**\n" +
    "\n" +
    "> 即更长的单词或短语的缩写形式，前提是开启识别HTML标签时，已默认开启\n" +
    "\n" +
    "The <abbr title=\"Hyper Text Markup Language\">HTML</abbr> specification is maintained by the <abbr title=\"World Wide Web Consortium\">W3C</abbr>.\n" +
    "\n" +
    "### 引用 Blockquotes\n" +
    "\n" +
    "> 引用文本 Blockquotes\n" +
    "\n" +
    "引用的行内混合 Blockquotes\n" +
    "                    \n" +
    "> 引用：如果想要插入空白换行`即<br />标签`，在插入处先键入两个以上的空格然后回车即可，[普通链接](http://localhost/)。\n" +
    "\n" +
    "### 锚点与链接 Links\n" +
    "\n" +
    "[普通链接](http://localhost/)\n" +
    "\n" +
    "[普通链接带标题](http://localhost/ \"普通链接带标题\")\n" +
    "\n" +
    "直接链接：<https://github.com>\n" +
    "\n" +
    "[锚点链接][anchor-id] \n" +
    "\n" +
    "[anchor-id]: http://www.this-anchor-link.com/\n" +
    "\n" +
    "GFM a-tail link @pandao\n" +
    "\n" +
    "> @pandao\n" +
    "\n" +
    "### 多语言代码高亮 Codes\n" +
    "\n" +
    "#### 行内代码 Inline code\n" +
    "\n" +
    "执行命令：`npm install marked`\n" +
    "\n" +
    "#### 缩进风格\n" +
    "\n" +
    "即缩进四个空格，也做为实现类似`<pre>`预格式化文本(Preformatted Text)的功能。\n" +
    "\n" +
    "    <?php\n" +
    "        echo \"Hello world!\";\n" +
    "    ?>\n" +
    "    \n" +
    "预格式化文本：\n" +
    "\n" +
    "    | First Header  | Second Header |\n" +
    "    | ------------- | ------------- |\n" +
    "    | Content Cell  | Content Cell  |\n" +
    "    | Content Cell  | Content Cell  |\n" +
    "\n" +
    "#### JS代码　\n" +
    "\n" +
    "```javascript\n" +
    "function test(){\n" +
    "\tconsole.log(\"Hello world!\");\n" +
    "}\n" +
    " \n" +
    "(function(){\n" +
    "    var box = function(){\n" +
    "        return box.fn.init();\n" +
    "    };\n" +
    "\n" +
    "    box.prototype = box.fn = {\n" +
    "        init : function(){\n" +
    "            console.log('box.init()');\n" +
    "\n" +
    "\t\t\treturn this;\n" +
    "        },\n" +
    "\n" +
    "\t\tadd : function(str){\n" +
    "\t\t\talert(\"add\", str);\n" +
    "\n" +
    "\t\t\treturn this;\n" +
    "\t\t},\n" +
    "\n" +
    "\t\tremove : function(str){\n" +
    "\t\t\talert(\"remove\", str);\n" +
    "\n" +
    "\t\t\treturn this;\n" +
    "\t\t}\n" +
    "    };\n" +
    "    \n" +
    "    box.fn.init.prototype = box.fn;\n" +
    "    \n" +
    "    window.box =box;\n" +
    "})();\n" +
    "\n" +
    "var testBox = box();\n" +
    "testBox.add(\"jQuery\").remove(\"jQuery\");\n" +
    "```\n" +
    "\n" +
    "#### HTML代码 HTML codes\n" +
    "\n" +
    "```html\n" +
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "    <head>\n" +
    "        <mate charest=\"utf-8\" />\n" +
    "        <title>Hello world!</title>\n" +
    "    </head>\n" +
    "    <body>\n" +
    "        <h1>Hello world!</h1>\n" +
    "    </body>\n" +
    "</html>\n" +
    "```\n" +
    "\n" +
    "### 图片 Images\n" +
    "\n" +
    "Image:\n" +
    "\n" +
    "![](https://pandao.github.io/editor.md/examples/images/4.jpg)\n" +
    "\n" +
    "> Follow your heart.\n" +
    "\n" +
    "![](https://pandao.github.io/editor.md/examples/images/8.jpg)\n" +
    "\n" +
    "> 图为：厦门白城沙滩\n" +
    "\n" +
    "图片加链接 (Image + Link)：\n" +
    "\n" +
    "[![](https://pandao.github.io/editor.md/examples/images/7.jpg)](https://pandao.github.io/editor.md/examples/images/7.jpg \"李健首张专辑《似水流年》封面\")\n" +
    "\n" +
    "> 图为：李健首张专辑《似水流年》封面\n" +
    "                \n" +
    "----\n" +
    "\n" +
    "### 列表 Lists\n" +
    "\n" +
    "#### 无序列表（减号）Unordered Lists (-)\n" +
    "                \n" +
    "- 列表一\n" +
    "- 列表二\n" +
    "- 列表三\n" +
    "     \n" +
    "#### 无序列表（星号）Unordered Lists (*)\n" +
    "\n" +
    "* 列表一\n" +
    "* 列表二\n" +
    "* 列表三\n" +
    "\n" +
    "#### 无序列表（加号和嵌套）Unordered Lists (+)\n" +
    "                \n" +
    "+ 列表一\n" +
    "+ 列表二\n" +
    "    + 列表二-1\n" +
    "    + 列表二-2\n" +
    "    + 列表二-3\n" +
    "+ 列表三\n" +
    "    * 列表一\n" +
    "    * 列表二\n" +
    "    * 列表三\n" +
    "\n" +
    "#### 有序列表 Ordered Lists (-)\n" +
    "                \n" +
    "1. 第一行\n" +
    "2. 第二行\n" +
    "3. 第三行\n" +
    "\n" +
    "#### GFM task list\n" +
    "\n" +
    "- [x] GFM task list 1\n" +
    "- [x] GFM task list 2\n" +
    "- [ ] GFM task list 3\n" +
    "    - [ ] GFM task list 3-1\n" +
    "    - [ ] GFM task list 3-2\n" +
    "    - [ ] GFM task list 3-3\n" +
    "- [ ] GFM task list 4\n" +
    "    - [ ] GFM task list 4-1\n" +
    "    - [ ] GFM task list 4-2\n" +
    "                \n" +
    "----\n" +
    "                    \n" +
    "### 绘制表格 Tables\n" +
    "\n" +
    "| 项目        | 价格   |  数量  |\n" +
    "| --------   | -----:  | :----:  |\n" +
    "| 计算机      | $1600   |   5     |\n" +
    "| 手机        |   $12   |   12   |\n" +
    "| 管线        |    $1    |  234  |\n" +
    "                    \n" +
    "First Header  | Second Header\n" +
    "------------- | -------------\n" +
    "Content Cell  | Content Cell\n" +
    "Content Cell  | Content Cell \n" +
    "\n" +
    "| First Header  | Second Header |\n" +
    "| ------------- | ------------- |\n" +
    "| Content Cell  | Content Cell  |\n" +
    "| Content Cell  | Content Cell  |\n" +
    "\n" +
    "| Function name | Description                    |\n" +
    "| ------------- | ------------------------------ |\n" +
    "| `help()`      | Display the help window.       |\n" +
    "| `destroy()`   | **Destroy your computer!**     |\n" +
    "\n" +
    "| Left-Aligned  | Center Aligned  | Right Aligned |\n" +
    "| :------------ |:---------------:| -----:|\n" +
    "| col 3 is      | some wordy text | $1600 |\n" +
    "| col 2 is      | centered        |   $12 |\n" +
    "| zebra stripes | are neat        |    $1 |\n" +
    "\n" +
    "| Item      | Value |\n" +
    "| --------- | -----:|\n" +
    "| Computer  | $1600 |\n" +
    "| Phone     |   $12 |\n" +
    "| Pipe      |    $1 |\n" +
    "                \n" +
    "----\n" +
    "\n" +
    "#### 特殊符号 HTML Entities Codes\n" +
    "\n" +
    "&copy; &  &uml; &trade; &iexcl; &pound;\n" +
    "&amp; &lt; &gt; &yen; &euro; &reg; &plusmn; &para; &sect; &brvbar; &macr; &laquo; &middot; \n" +
    "\n" +
    "X&sup2; Y&sup3; &frac34; &frac14;  &times;  &divide;   &raquo;\n" +
    "\n" +
    "18&ordm;C  &quot;  &apos;\n" +
    "\n" +
    "### Emoji表情 :smiley:\n" +
    "\n" +
    "> Blockquotes :star:\n" +
    "\n" +
    "#### GFM task lists & Emoji & fontAwesome icon emoji & editormd logo emoji :editormd-logo-5x:\n" +
    "\n" +
    "- [x] :smiley: @mentions, :smiley: #refs, [links](), **formatting**, and <del>tags</del> supported :editormd-logo:;\n" +
    "- [x] list syntax required (any unordered or ordered list supported) :editormd-logo-3x:;\n" +
    "- [x] [ ] :smiley: this is a complete item :smiley:;\n" +
    "- [ ] []this is an incomplete item [test link](#) :fa-star: @pandao; \n" +
    "- [ ] [ ]this is an incomplete item :fa-star: :fa-gear:;\n" +
    "    - [ ] :smiley: this is an incomplete item [test link](#) :fa-star: :fa-gear:;\n" +
    "    - [ ] :smiley: this is  :fa-star: :fa-gear: an incomplete item [test link](#);\n" +
    " \n" +
    "#### 反斜杠 Escape\n" +
    "\n" +
    "\\*literal asterisks\\*\n" +
    "            \n" +
    "### 科学公式 TeX(KaTeX)\n" +
    "                    \n" +
    "$$E=mc^2$$\n" +
    "\n" +
    "行内的公式$$E=mc^2$$行内的公式，行内的$$E=mc^2$$公式。\n" +
    "\n" +
    "$$\\(\\sqrt{3x-1}+(1+x)^2\\)$$\n" +
    "                    \n" +
    "$$\\sin(\\alpha)^{\\theta}=\\sum_{i=0}^{n}(x^i + \\cos(f))$$\n" +
    "\n" +
    "多行公式：\n" +
    "\n" +
    "```math\n" +
    "\\displaystyle\n" +
    "\\left( \\sum\\_{k=1}^n a\\_k b\\_k \\right)^2\n" +
    "\\leq\n" +
    "\\left( \\sum\\_{k=1}^n a\\_k^2 \\right)\n" +
    "\\left( \\sum\\_{k=1}^n b\\_k^2 \\right)\n" +
    "```\n" +
    "\n" +
    "```katex\n" +
    "\\displaystyle \n" +
    "    \\frac{1}{\n" +
    "        \\Bigl(\\sqrt{\\phi \\sqrt{5}}-\\phi\\Bigr) e^{\n" +
    "        \\frac25 \\pi}} = 1+\\frac{e^{-2\\pi}} {1+\\frac{e^{-4\\pi}} {\n" +
    "        1+\\frac{e^{-6\\pi}}\n" +
    "        {1+\\frac{e^{-8\\pi}}\n" +
    "         {1+\\cdots} }\n" +
    "        } \n" +
    "    }\n" +
    "```\n" +
    "\n" +
    "```latex\n" +
    "f(x) = \\int_{-\\infty}^\\infty\n" +
    "    \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}\n" +
    "    \\,d\\xi\n" +
    "```\n" +
    "                \n" +
    "### 绘制流程图 Flowchart\n" +
    "\n" +
    "```flow\n" +
    "st=>start: 用户登陆\n" +
    "op=>operation: 登陆操作\n" +
    "cond=>condition: 登陆成功 Yes or No?\n" +
    "e=>end: 进入后台\n" +
    "\n" +
    "st->op->cond\n" +
    "cond(yes)->e\n" +
    "cond(no)->op\n" +
    "```\n" +
    "                    \n" +
    "### 绘制序列图 Sequence Diagram\n" +
    "                    \n" +
    "```seq\n" +
    "Andrew->China: Says Hello \n" +
    "Note right of China: China thinks\\nabout it \n" +
    "China-->Andrew: How are you? \n" +
    "Andrew->>China: I am good thanks!\n" +
    "```\n" +
    "\n" +
    "### End",
    wordCount: 5,
    articleRetainType: "DEFAULT",
    articlePath: null,
    pageViews: 0,
    legal_Flag: true,
    lastUpdateTs: 1535205553040,
    ts: 1532621329861
}

ReactDOM.render(<BrowseContainer/>, document.getElementById('root'));