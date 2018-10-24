import HttpHelper from "../../utils/HttpHelper.jsx";

export default class APIOperator_Article {

    static getArticleInfo({articleId, headers, timeout, requestBefore, successCallback, errorCallback, timeOutCallback, finallyCallback}) {
        HttpHelper.httpGet({
            path: "main/article/" + articleId,
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