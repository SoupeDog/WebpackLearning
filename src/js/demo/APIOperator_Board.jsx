import HttpHelper from "../utils/HttpHelper.jsx";

export default class APIOperator_Board {

    static getAllBoard({headers, timeout, requestBefore, successCallback, errorCallback, timeOutCallback, finallyCallback}) {
        HttpHelper.httpGet({
            path:"main/board/all",
            headers,
            timeout,
            requestBefore,
            successCallback,
            errorCallback,
            timeOutCallback,
            finallyCallback
        });
    }
}