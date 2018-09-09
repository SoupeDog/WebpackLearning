import HttpHelper from "../utils/HttpHelper.jsx";
import PropertiesHelper from "../utils/PropertiesHelper.jsx";

export default class APIOperator_Board {

    static getAllBoard({headers, timeout, requestBefore, successCallback, errorCallback, timeOutCallback, finallyCallback}) {
        HttpHelper.httpGet({
            path: "main/board/all",
            headers,
            timeout,
            requestBefore,
            successCallback,
            errorCallback,
            timeOutCallback,
            finallyCallback
        });
    }

    static getSummaryOfBoard({boardList, headers, timeout, requestBefore, successCallback, errorCallback, timeOutCallback, finallyCallback}) {
        let boardIdListStringVal = PropertiesHelper.arrayToString({
            isStandard: false,
            array: boardList,
            targetVal: "boardId"
        });
        HttpHelper.httpGet({
            path: "main/board/summary/" + boardIdListStringVal,
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