import React from 'react';
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
        this.initCurrentWindowSize = this.initCurrentWindowSize.bind(this);
    }

    componentWillMount() {
        this.initCurrentWindowSize();
    }

    render() {
        return (
            <Modal className={"loading_Circle_Interrupt"}
                   open={this.props.open}
                   disableEnforceFocus={true}
            >
                <CircularProgress
                    size={(this.state.halfProgressCircleDiameter)}
                    style={{
                        outline: "none",
                        margin: StyleHelper.createMargin({
                            fatherWidth: this.state.currentWidth,
                            fatherHeight: this.state.currentHeight,
                            sonWidth: this.state.halfProgressCircleDiameter,
                            sonHeight: this.state.halfProgressCircleDiameter
                        })
                    }}
                />
            </Modal>
        );
    }

    componentDidMount() {
        let _react = this;
        $(window).resize(function () {
            _react.initCurrentWindowSize();
        });
    }

    initCurrentWindowSize() {
        this.setState({
            currentHeight: $(window).height(),
            currentWidth: $(window).width()
        })
    }
}

export default Loading_Circle_Interrupt;