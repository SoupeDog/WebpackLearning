import URLHelper from "../utils/URLHelper.jsx";

export default class PageJumpingOperator {

    static goToHomePage() {
        window.location.href = "https://www.xavierwang.cn";
    }

    static openBrowse({queryString}) {
        URLHelper.openNewPage({finalUrl: "https://www.xavierwang.cn/browse.html?" + queryString});
    }
}