import $ from 'jquery'

export default class HttpHelper {

    // url 默认前缀
    static getPrefix() {
        return "";
    }

    // 默认 Content-Type
    static getContentType() {
        return "application/json";
    }

    // 默认请求超时时间
    static getDefaultTimeOut() {
        return 5000;
    }

    static httpGet(requestOBJ) {
        let finalUrl;
        if (requestOBJ.path == null || requestOBJ.path.trim() == "") {
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
            type: 'get',
            contentType: this.getContentType(),
            cache: false,
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
            timeout: this.getDefaultTimeOut()
        });
    }

    static httpPost(requestOBJ) {
        let finalUrl;
        if (requestOBJ.path == null || requestOBJ.path.trim() == "") {
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
            type: 'post',
            contentType: this.getContentType(),
            cache: false,
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
            timeout: this.getDefaultTimeOut()
        });
    }

    static httpPut(requestOBJ) {
        let finalUrl;
        if (requestOBJ.path == null || requestOBJ.path.trim() == "") {
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
            type: 'put',
            contentType: this.getContentType(),
            cache: false,
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
            timeout: this.getDefaultTimeOut()
        });
    }

    static httpDelete(requestOBJ) {
        let finalUrl;
        if (requestOBJ.path == null || requestOBJ.path.trim() == "") {
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
            type: 'delete',
            contentType: this.getContentType(),
            cache: false,
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
            timeout: this.getDefaultTimeOut()
        });
    }

}