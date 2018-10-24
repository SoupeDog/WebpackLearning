import LogHelper from "./LogHelper.jsx";

var CallBackView = null;
LogHelper.info({className: "CallBackViewHelper", msg: "constructor----------"});
export default class CallBackViewHelper {
    static setCallBackView(tartget) {
        CallBackView = tartget;
        LogHelper.info({className: "CallBackViewHelper", msg: "init target----------"});
    }

    static getCallBackView() {
        return CallBackView;
    }

    static call_Loading_Circle_Interrupt(isOpen) {
        if (CallBackView != null) {
            CallBackView.call_Loading_Circle_Interrupt(isOpen);
        } else {
            LogHelper.warn({className: "CallBackViewHelper", msg: "target was null----------"});
        }
    }

    static call_Loading_Linear_Unknown(isOpen) {
        if (CallBackView != null) {
            CallBackView.call_Loading_Linear_Unknown(isOpen);
        } else {
            LogHelper.warn({className: "CallBackViewHelper", msg: "target was null----------"});
        }
    }

    static call_Dialog_Conform({isOpen, scroll, transition, title, msg, ensureCallback, cancelCallback}) {
        if (CallBackView != null) {
            CallBackView.call_Dialog_Conform({isOpen, scroll, transition, title, msg, ensureCallback, cancelCallback});
        } else {
            LogHelper.warn({className: "CallBackViewHelper", msg: "target was null----------"});
        }
    }

    static call_LightTip({isOpen, type, msg, vertical, horizontal}) {
        if (CallBackView != null) {
            CallBackView.call_LightTip({isOpen, type, msg, vertical, horizontal});
        } else {
            LogHelper.warn({className: "CallBackViewHelper", msg: "target was null----------"});
        }
    }
}