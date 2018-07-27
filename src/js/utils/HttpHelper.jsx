import $ from 'jquery'

export default class HttpHelper {

    // url 默认前缀
    static getPrefix() {
        return "";
    }

    // ajax 请求缓存是否开启标识(false:不开启)
    static getDefaultCache() {
        return false;
    }

    // 默认 Content-Type
    static getDefaultContentType() {
        return "application/json";
    }

    // 默认请求超时时间(毫秒)
    static getDefaultTimeOut() {
        return 5000;
    }

    static httpGet(requestOBJ) {
        let finalUrl;
        if ((requestOBJ.path == null || requestOBJ.path.trim() == "") && requestOBJ.finalUrl == null) {
            if (requestOBJ.customFinally != null) {
                requestOBJ.customFinally();
            }
            throw new Error("HttpHelper:[path] can't be empty.");
        }
        if (requestOBJ.finalUrl != null && requestOBJ.finalUrl.trim() != "") {
            finalUrl = requestOBJ.finalUrl;
        } else {
            finalUrl = this.getPrefix() + requestOBJ.path;
        }
        $.ajax({
            url: finalUrl,
            headers: requestOBJ.headers,
            type: 'GET',
            contentType: this.getDefaultContentType(),
            cache: requestOBJ.cache != null ? requestOBJ.cache : this.getDefaultCache(),
            success: function (data) {
                if (requestOBJ.customFinally != null) {
                    requestOBJ.customFinally();
                }
                requestOBJ.success(data);
                alert("成功")
                console.log(data);
            },
            error: function (data) {
                if (requestOBJ.customFinally != null) {
                    requestOBJ.customFinally();
                }
                if (data.status == 0 && data.statusText == "timeout") {
                    alert("超时");
                } else {
                    console.log(data);
                }
            },
            timeout: requestOBJ.timeout != null ? requestOBJ.timeout : this.getDefaultTimeOut()
        });
    }

    static httpPost(requestOBJ) {
        let finalUrl;
        if ((requestOBJ.path == null || requestOBJ.path.trim() == "") && requestOBJ.finalUrl == null) {
            throw new Error("HttpHelper:[path] can't be empty.");
        }
        if (requestOBJ.finalUrl != null && requestOBJ.finalUrl.trim() != "") {
            finalUrl = requestOBJ.finalUrl;
        } else {
            finalUrl = this.getPrefix() + requestOBJ.path;
        }
        $.ajax({
            url: finalUrl,
            headers: requestOBJ.headers,
            type: 'POST',
            contentType: this.getDefaultContentType(),
            cache: requestOBJ.cache != null ? requestOBJ.cache : this.getDefaultCache(),
            data: requestOBJ.requestData,
            success: function (data) {
                // requestOBJ.success(data);
                console.log(data);
            },
            error: function (data) {
                // requestOBJ.error(status);
                if (data.status == 0 && data.statusText == "timeout") {
                    alert("超时");
                } else {
                    console.log(data);
                }
            },
            timeout: requestOBJ.timeout != null ? requestOBJ.timeout : this.getDefaultTimeOut()
        });
    }

    static httpPut(requestOBJ) {
        let finalUrl;
        if ((requestOBJ.path == null || requestOBJ.path.trim() == "") && requestOBJ.finalUrl == null) {
            throw new Error("HttpHelper:[path] can't be empty.");
        }
        if (requestOBJ.finalUrl != null && requestOBJ.finalUrl.trim() != "") {
            finalUrl = requestOBJ.finalUrl;
        } else {
            finalUrl = this.getPrefix() + requestOBJ.path;
        }
        $.ajax({
            url: finalUrl,
            headers: requestOBJ.headers,
            type: 'PUT',
            contentType: this.getDefaultContentType(),
            cache: requestOBJ.cache != null ? requestOBJ.cache : this.getDefaultCache(),
            data: requestOBJ.requestData,
            success: function (data) {
                // requestOBJ.success(data);
                console.log(data);
            },
            error: function (data) {
                // requestOBJ.error(status);
                if (data.status == 0 && data.statusText == "timeout") {
                    alert("超时");
                } else {
                    console.log(data);
                }
            },
            timeout: requestOBJ.timeout != null ? requestOBJ.timeout : this.getDefaultTimeOut()
        });
    }

    static httpDelete(requestOBJ) {
        let finalUrl;
        if ((requestOBJ.path == null || requestOBJ.path.trim() == "") && requestOBJ.finalUrl == null) {
            throw new Error("HttpHelper:[path] can't be empty.");
        }
        if (requestOBJ.finalUrl != null && requestOBJ.finalUrl.trim() != "") {
            finalUrl = requestOBJ.finalUrl;
        } else {
            finalUrl = this.getPrefix() + requestOBJ.path;
        }
        $.ajax({
            url: finalUrl,
            headers: requestOBJ.headers,
            type: 'DELETE',
            contentType: this.getDefaultContentType(),
            cache: requestOBJ.cache != null ? requestOBJ.cache : this.getDefaultCache(),
            success: function (data) {
                // requestOBJ.success(data);
                console.log(data);
            },
            error: function (data) {
                // requestOBJ.error(status);
                if (data.status == 0 && data.statusText == "timeout") {
                    alert("超时");
                } else {
                    console.log(data);
                }
            },
            timeout: requestOBJ.timeout != null ? requestOBJ.timeout : this.getDefaultTimeOut()
        });
    }

}