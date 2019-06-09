import HttpHelper from "../../utils/HttpHelper.jsx";
import PropertiesHelper from "../../utils/PropertiesHelper.jsx";
import URLHelper from "../../utils/URLHelper.jsx";
import UserAPIOperator from "./UserAPIOperator.jsx";

export default class BoardAPIOperator {

    static getHeaders() {
        if (UserAPIOperator.getLocalUserUId() == null) {
            return {
                scope: "web",
                secretKey: URLHelper.getQueryString("secretKey")
            }
        } else {
            return {
                uId: UserAPIOperator.getLocalUserUId(),
                token: UserAPIOperator.getLocalUserToken(),
                scope: "web",
                secretKey: URLHelper.getQueryString("secretKey")
            };
        }
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