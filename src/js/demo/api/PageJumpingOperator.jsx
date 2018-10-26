import URLHelper from "../../utils/URLHelper.jsx";
import LogHelper from "../../utils/LogHelper.jsx";

const rootURL = "https://www.xavierwang.cn";
const isPC = !(navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i));
LogHelper.info({className: "PageJumpingOperator", msg: "constructor----------[isPC]:" + isPC});
export default class PageJumpingOperator {

    static goToHomePage() {
        if (isPC) {
            URLHelper.openNewPage({finalUrl: rootURL, inNewTab: false});
        } else {
            URLHelper.openNewPage({finalUrl: rootURL, inNewTab: false});
        }
    }

    static openBrowse({queryString}) {
        if (isPC) {
            URLHelper.openNewPage({finalUrl: rootURL + "/browse?" + queryString});
        } else {
            URLHelper.openNewPage({finalUrl: rootURL + "/browse?" + queryString, inNewTab: false});
        }
    }

    static getOpenBrowseURL({queryString}) {
        return rootURL + "/browse?" + queryString;
    }
}