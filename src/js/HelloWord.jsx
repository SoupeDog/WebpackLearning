import React from 'react';
import LogHelper from "./utils/LogHelper.jsx";

class HelloWord extends React.Component {

    constructor(props) {
        super(props);
        this.state = {hasError: false};
        LogHelper.info({className: "HelloWord", msg: "constructor----------"});
    }

    static getDerivedStateFromProps(props, state) {
        LogHelper.info({className: "HelloWord", msg: "getDerivedStateFromProps----------"});
        LogHelper.debug({className: "HelloWord", tag: "props", msg: props, isJson: true});
        LogHelper.debug({className: "HelloWord", tag: "state", msg: state, isJson: true});
        LogHelper.debug({msg: ""});
        // 它应返回一个对象来更新 state，如果返回 null 则不更新任何内容
        return state;
    }

    shouldComponentUpdate(nextProps, nextState) {
        LogHelper.info({className: "HelloWord", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "HelloWord", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "HelloWord", tag: "nextState", msg: nextState, isJson: true});
        LogHelper.debug({msg: ""});
        // 返回 false 以告知 React 可以跳过更新。请注意，返回 false 并不会阻止子组件在 state 更改时重新渲染。
        return true;
    }

    render() {
        if (this.state.hasError) {
            // 你可以渲染任何自定义的降级  UI
            return <h1>Something went wrong.</h1>;
        } else {
            return (
                <>
                    <h1 className="testStyle1">Hello world - 1.</h1>
                    <h1 className="testStyle2">Hello world - 2.</h1>
                </>
            );
        }
    }

    componentDidMount() {
        LogHelper.info({className: "HelloWord", msg: "componentDidMount----------"});
    }

    componentDidUpdate(prevProps, prevState, resultFromGetSnapshotBeforeUpdate) {
        LogHelper.info({className: "HelloWord", msg: "componentDidUpdate----------"});
        LogHelper.debug({className: "HelloWord", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "HelloWord", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({
            className: "HelloWord",
            tag: "resultFromGetSnapshotBeforeUpdate",
            msg: resultFromGetSnapshotBeforeUpdate,
            isJson: true
        });
        LogHelper.debug({msg: ""});
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        LogHelper.info({className: "HelloWord", msg: "getSnapshotBeforeUpdate----------"});
        LogHelper.debug({className: "HelloWord", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "HelloWord", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({msg: ""});
        // 此生命周期的任何返回值将作为参数传递给 componentDidUpdate()。
        let resultFromGetSnapshotBeforeUpdate = null;
        return resultFromGetSnapshotBeforeUpdate;
    }

    componentWillUnmount() {
        // 在组件卸载及销毁之前直接调用。在此方法中执行必要的清理操作
        LogHelper.info({className: "HelloWord", msg: "componentWillUnmount----------"});
    }

    static getDerivedStateFromError(error) {
        LogHelper.info({className: "HelloWord", msg: "getDerivedStateFromError----------"});
        LogHelper.error({className: "HelloWord", tag: "error", msg: error, isJson: true});
        // 更新 state 使下一次渲染可以显降级 UI
        return {hasError: true};
    }
}

export default HelloWord;