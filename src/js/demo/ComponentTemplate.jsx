import React from "react";
import ReactDOM from "react-dom";
import BaseComponent from "../component/BaseComponent.jsx";

class ComponentTemplate extends BaseComponent {
    constructor(props) {
        super(props)
        this.state = {
            childrenNode: {}
        }
        console.log("constructor----------");
        console.log(JSON.stringify(props));

    }

    setParentNode({componentName, target}) {
        this[componentName]=target;
    }

    updateState(data) {
        this.setState(data);
    };

    componentWillMount() {
        console.log("componentWillMount----------");
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log("componentWillReceiveProps----------");
        console.log("nextProps:" + JSON.stringify(nextProps));
        console.log("nextContext:" + JSON.stringify(nextContext));
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("shouldComponentUpdate----------");
        console.log("nextProps:" + JSON.stringify(nextProps));
        console.log("nextState:" + JSON.stringify(nextState));
        console.log("nextContext:" + JSON.stringify(nextContext));
        return true;
    }

    render() {
        return (
            <div>
            </div>
        );
    }

    componentDidMount() {
        console.log("componentDidMount----------");
        console.log("");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate----------");
        console.log("prevProps:" + JSON.stringify(prevProps));
        console.log("prevState:" + JSON.stringify(prevState));
        console.log("snapshot:" + JSON.stringify(snapshot));
        console.log("");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount----------");
    }
}

export default ComponentTemplate;