import HttpHelper from "../../utils/HttpHelper.jsx";
import UserAPIOperator from "./UserAPIOperator.jsx";
import URLHelper from "../../utils/URLHelper.jsx";

export default class APIOperator_Article {

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


    static getArticleInfo({articleId, headers, timeout, requestBefore, successCallback, errorCallback, timeOutCallback, finallyCallback}) {
        HttpHelper.httpGet({
            path: "article-service/main/article/" + articleId,
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