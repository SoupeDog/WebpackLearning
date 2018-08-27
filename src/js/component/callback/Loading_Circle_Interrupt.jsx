import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'
import BaseComponent from "../BaseComponent.jsx";
import Modal from '@material-ui/core/Modal';
import CircularProgress from '@material-ui/core/CircularProgress';
import StyleHelper from '../../utils/StyleHelper.jsx';

class Loading_Circle_Interrupt extends BaseComponent {

    constructor(props) {
        super(props)
        this.state = {
            currentHeight: 0,
            currentWidth: 0,
            halfProgressCircleDiameter: 100,
        };

        this.handleClose = this.handleClose.bind(this);
        this.initCurrentWindowSize = this.initCurrentWindowSize.bind(this);
        // alert("constructor");
    }

    componentWillMount() {
        this.initCurrentWindowSize();
        let _react = this;
        $(window).resize(function () {
            _react.initCurrentWindowSize();
        });
    }

    render() {
        return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.props.open == null ? false : this.props.open}
            >
                <CircularProgress style={{
                    outline: "none",
                    margin: StyleHelper.createMargin({
                        fatherWidth: this.state.currentWidth,
                        fatherHeight: this.state.currentHeight,
                        sonWidth: this.state.halfProgressCircleDiameter,
                        sonHeight: this.state.halfProgressCircleDiameter
                    })
                }} onClose={this.handleClose}
                                  onClick={this.handleClose}
                                  size={(this.state.halfProgressCircleDiameter)}/>
            </Modal>
        );
    }

    handleClose() {
        this.setState({loading_Main: false});
    };

    initCurrentWindowSize() {
        this.setState({
            currentHeight: $(window).height(),
            currentWidth: $(window).width()
        })
    }

}

export default Loading_Circle_Interrupt;