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

    static httpGet(path, headers) {
        $.ajax({
            url: this.getPrefix() + path,
            headers: {
                "uId": "U00000001",
                "token": "1",
                "scope": "web"
            },
            type: 'get',
            contentType: this.getContentType(),
            // cache: false,
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            },
            success: function (data) {
                console.log(data);
            },
            error: function (status) {
                console.log(status);
            }
        });
    }
}