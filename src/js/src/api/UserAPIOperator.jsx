import React from 'react';
import HttpHelper from "../../utils/HttpHelper.jsx";
import CallBackViewHelper from "../../utils/CallBackViewHelper.jsx";
import WebContextProperties from "../WebContextProperties.jsx";

export default class UserAPIOperator {
    // 尝试登录(记住用户身份方式)
    static preLogin() {
        if (UserAPIOperator.getLocalUserUId() == null || UserAPIOperator.getLocalUserToken() == null) {
            UserAPIOperator.logOut();
            return;
        }
        HttpHelper.httpPost({
            path: "user-service/extra/token/validate", requestData: {
                uId: UserAPIOperator.getLocalUserUId(),
                token: UserAPIOperator.getLocalUserToken(),
                scope: "web"
            },
            requestBefore: function () {
                CallBackViewHelper.call_Loading_Linear_Unknown(true);
            },
            successCallback: function (response) {
                let isEffected = response.data;
                if (isEffected) {
                    UserAPIOperator.initUserInfo();
                } else {
                    UserAPIOperator.freshToken({
                        uId: UserAPIOperator.getLocalUserUId(),
                        refreshKey: UserAPIOperator.getLocalUserRefreshKey()
                    });
                }
            },
            errorCallback: function (response) {
                UserAPIOperator.freshToken({
                    uId: UserAPIOperator.getLocalUserUId(),
                    refreshKey: UserAPIOperator.getLocalUserRefreshKey()
                });
            },
            finallyCallback: function () {
                CallBackViewHelper.call_Loading_Linear_Unknown(false);
            }
        });
    }

    static login({uId, pw}) {
        HttpHelper.httpPost({
            path: "user-service/extra/token/login",
            requestData: {
                uId: uId,
                pw: pw,
                scope: "web"
            },
            requestBefore: function () {
                CallBackViewHelper.call_Loading_Linear_Unknown(true);
            },
            successCallback: function (response) {
                let userLoinInfo = response.data;
                localStorage.setItem("uId", userLoinInfo.uId);
                localStorage.setItem("token", userLoinInfo.token);
                localStorage.setItem("refreshKey", userLoinInfo.refreshKey);
                UserAPIOperator.initUserInfo();
            },
            errorCallback: function (response) {
                alert(JSON.stringify(response));
            },
            finallyCallback: function () {
                CallBackViewHelper.call_Loading_Linear_Unknown(false);
            }
        });
    }

    // 刷新token
    static freshToken({uId, refreshKey}) {
        HttpHelper.httpPost({
            path: "user-service/extra/token/refresh",
            requestData: {
                uId: uId,
                refreshKey: refreshKey,
                scope: "web"
            },
            requestBefore: function () {
                CallBackViewHelper.call_Loading_Linear_Unknown(true);
            },
            successCallback: function (response) {
                let userLoinInfo = response.data;
                localStorage.setItem("uId", userLoinInfo.uId);
                localStorage.setItem("token", userLoinInfo.token);
                localStorage.setItem("refreshKey", userLoinInfo.refreshKey);
                UserAPIOperator.initUserInfo();
            },
            errorCallback: function (response) {
                CallBackViewHelper.call_LightTip({
                    isOpen: true,
                    type: "warning",
                    msg: "或因在其他设备登录，用户(" + UserAPIOperator.getLocalUserUId() + ")自动登录失败，请尝试主动登录",
                    vertical: "bottom",
                    horizontal: "center"
                });
                UserAPIOperator.logOut();
            },
            finallyCallback: function () {
                CallBackViewHelper.call_Loading_Linear_Unknown(false);
            }
        });
    }


    static initUserInfo() {
        HttpHelper.httpGet({
            path: "user-service/main/user/" + UserAPIOperator.getLocalUserUId(),
            requestBefore: function () {
                CallBackViewHelper.call_Loading_Linear_Unknown(true);
            },
            successCallback: function (response) {
                let user = response.data[0];
                WebContextProperties.setValue("currentUser", user);
                console.log(user);
            },
            errorCallback: function (response) {
                alert(JSON.stringify(response));
            },
            finallyCallback: function () {
                CallBackViewHelper.call_Loading_Linear_Unknown(false);
            }
        });
    }

    // 注销
    static logOut() {
        localStorage.removeItem("uId");
        localStorage.removeItem("token");
        localStorage.removeItem("refreshKey");
        WebContextProperties.setValue("currentUser", null);
    }

    // 获取本地用户 uId
    static getLocalUserUId() {
        let result = localStorage.getItem("uId");
        return result;
    }

    // 获取本地用户 token
    static getLocalUserToken() {
        let result = localStorage.getItem("token");
        return result;
    }

    // 获取本地用户 token
    static getLocalUserRefreshKey() {
        let result = localStorage.getItem("refreshKey");
        return result;
    }
}