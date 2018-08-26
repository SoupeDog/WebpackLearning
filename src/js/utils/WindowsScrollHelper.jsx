export default class WindowsScrollHelper {

    constructor() {
        this.functionMap = new Map();
    }

    addCallback(name, callbackFunction) {
        this.functionMap.set(name, callbackFunction);
    }

    getFunctionMap() {
        return this.functionMap;
    }

    start() {
        let helper = this;
        window.onscroll = () => {
            let allFunctionMap = helper.functionMap;
            for (let [name, callbackFunction] of allFunctionMap) {
                if (typeof callbackFunction == "function") {
                    callbackFunction(window.scrollY);
                }
            }
        }
    }
}