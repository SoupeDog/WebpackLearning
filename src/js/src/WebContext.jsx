import WebContextProperties from "./WebContextProperties.jsx";
import UserAPIOperator from "./api/UserAPIOperator.jsx";

// 初始化
let isPC = !(navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i));
WebContextProperties.setValue("isPC", isPC);

export default class WebContext {

    static isPC() {
        return WebContextProperties.getValue("isPC");
    }
}