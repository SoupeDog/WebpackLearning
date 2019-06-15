import WebContextProperties from "./WebContextProperties.jsx";
import CallBackViewHelper from "../utils/CallBackViewHelper.jsx";
// 初始化
let isPC = !(navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i));
WebContextProperties.setValue("isPC", isPC);

export default class WebContext {
    static isPC() {
        return WebContextProperties.getValue("isPC");
    }

    static checkPC(){
        if(!WebContextProperties.getValue("isPC")){
            CallBackViewHelper.call_Dialog_Conform({
                isOpen: true,
                title: "提示",
                scroll: "body",
                msg: "检测到您可能使用了移动端设备访问，因本站暂未针对移动端开发独立 UI ,为获得最佳体验，建议您切换为 PC 访问。若执意使用移动端访问，禁用放大，横屏为佳。",
                dialog_Ensure_Text: "不再提示",
                ensureCallback: function () {
                    CallBackViewHelper.call_Dialog_Conform({isOpen: false});
                    localStorage.setItem("isPC", true);
                },
                dialog_Cancel_Text: "了解",
                cancelCallback: function () {
                    CallBackViewHelper.call_Dialog_Conform({isOpen: false});
                    localStorage.removeItem("isPC");
                }
            });
        }
    }
}