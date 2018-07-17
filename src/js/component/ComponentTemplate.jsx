import React from 'react';
import ReactDOM from 'react-dom';
import BaseComponent from "./BaseComponent.jsx";

class ComponentTemplate extends BaseComponent {

    constructor(props) {
        super(props)
        this.state = {}
        alert("constructor");
    }

    componentWillMount() {
        alert("componentWillMount");
    }

    render() {
        return (
            <div>
            </div>
        );
    }

    componentDidMount() {
        alert("componentDidMount");
    }
}

export default ComponentTemplate;