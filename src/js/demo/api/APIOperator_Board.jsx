import HttpHelper from "../../utils/HttpHelper.jsx";
import PropertiesHelper from "../../utils/PropertiesHelper.jsx";
import URLHelper from "../../utils/URLHelper.jsx";

export default class APIOperator_Board {

    static getHeaders() {
        return {
            scope: "web",
            secretKey: URLHelper.getQueryString("secretKey")
        };
    }

    static getAllBoard({headers, timeout, requestBefore, successCallback, errorCallback, timeOutCallback, finallyCallback}) {
        HttpHelper.httpGet({
            path: "main/board/all",
            headers: headers == null ? this.getHeaders() : headers,
            timeout,
            requestBefore,
            successCallback,
            errorCallback,
            timeOutCallback,
            finallyCallback
        });
    }

    static getSummaryOfBoard({boardId, pageSize, currentPage, headers, timeout, requestBefore, successCallback, errorCallback, timeOutCallback, finallyCallback}) {
        HttpHelper.httpGet({
            path: "article-service/main/article/summary/" + boardId + "?pageSize=" + pageSize + "&&currentPage=" + currentPage + "&&isDESC=true",
            headers: headers == null ? this.getHeaders() : headers,
            timeout,
            requestBefore,
            successCallback,
            errorCallback,
            timeOutCallback,
            finallyCallback
        });
    }
}