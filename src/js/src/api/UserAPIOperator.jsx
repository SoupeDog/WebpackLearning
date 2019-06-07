import React from 'react';
import HttpHelper from "../../utils/HttpHelper.jsx";
import CallBackViewHelper from "../../utils/CallBackViewHelper.jsx";
import WebContextProperties from "../WebContextProperties.jsx";
import PropertiesHelper from "../../utils/PropertiesHelper.jsx";

export default class UserAPIOperator {
    // 尝试登录(记住用户身份方式)
    static preLogin({setStateToRoot}) {
        if (UserAPIOperator.getLocalUserUId() == null || UserAPIOperator.getLocalUserToken() == null) {
            UserAPIOperator.logOut({setStateToRoot: setStateToRoot});
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
                    UserAPIOperator.initUserInfo({
                        setStateToRoot: setStateToRoot
                    });
                } else {
                    UserAPIOperator.freshToken({
                        uId: UserAPIOperator.getLocalUserUId(),
                        refreshKey: UserAPIOperator.getLocalUserRefreshKey(),
                        setStateToRoot: setStateToRoot
                    });
                }
            },
            errorCallback: function (response) {
                UserAPIOperator.freshToken({
                    uId: UserAPIOperator.getLocalUserUId(),
                    refreshKey: UserAPIOperator.getLocalUserRefreshKey(),
                    setStateToRoot: setStateToRoot
                });
            },
            finallyCallback: function () {
                CallBackViewHelper.call_Loading_Linear_Unknown(false);
            }
        });
    }

    static login({uId, pw, setStateToRoot}) {
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
                UserAPIOperator.initUserInfo({setStateToRoot: setStateToRoot});
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
    static freshToken({uId, refreshKey, setStateToRoot}) {
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
                UserAPIOperator.initUserInfo({setStateToRoot: setStateToRoot});
            },
            errorCallback: function (response) {
                CallBackViewHelper.call_LightTip({
                    isOpen: true,
                    type: "warning",
                    msg: "或因在其他设备登录，用户(" + UserAPIOperator.getLocalUserUId() + ")自动登录失败，请尝试主动登录",
                    vertical: "bottom",
                    horizontal: "center"
                });
                UserAPIOperator.logOut({setStateToRoot: setStateToRoot});
            },
            finallyCallback: function () {
                CallBackViewHelper.call_Loading_Linear_Unknown(false);
            }
        });
    }


    static initUserInfo({setStateToRoot}) {
        HttpHelper.httpGet({
            path: "user-service/main/user/" + UserAPIOperator.getLocalUserUId(),
            requestBefore: function () {
                CallBackViewHelper.call_Loading_Linear_Unknown(true);
            },
            successCallback: function (response) {
                let user = response.data[0];
                if (PropertiesHelper.isFunctionNotNull(setStateToRoot)) {
                    setStateToRoot({currentUser: user});
                }
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
    static logOut({setStateToRoot}) {
        localStorage.removeItem("uId");
        localStorage.removeItem("token");
        localStorage.removeItem("refreshKey");
        if (PropertiesHelper.isFunctionNotNull(setStateToRoot)) {
            setStateToRoot({currentUser: null});
        }
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