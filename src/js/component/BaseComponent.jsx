import React from "react";
import HttpHelper from "../utils/HttpHelper.jsx";
import TimeHelper from "../utils/TimeHelper.jsx";

export default class BaseComponent extends React.Component {
    constructor(props) {
        super(props);
        this.HttpHelper = HttpHelper;
        this.TimeHelper = TimeHelper;
    }
}