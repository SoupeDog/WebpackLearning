import React from 'react';
import ReactDOM from 'react-dom';
import BaseComponent from "../BaseComponent.jsx";
import Modal from '@material-ui/core/Modal';

export default class IndexContainer extends BaseComponent {

    constructor(props) {
        super(props)
        this.state = {open: true}
        alert("constructor");
    }

    handleClose() {
        this.setState({ open: false });
    };

    componentWillMount() {
        alert("componentWillMount");
    }

    render() {
        return (
            <div>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                >
                    <div onClick={this.handleClose.bind(this)}>asd</div>
                </Modal>
                <span>Hello world!</span>
            </div>

        );
    }

    componentDidMount() {
        alert("componentDidMount");
    }
}