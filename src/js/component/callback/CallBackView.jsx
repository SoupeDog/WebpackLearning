import React from 'react';
import ReactDOM from 'react-dom';
import BaseComponent from "../BaseComponent.jsx";
import Loading_Circle_Interrupt from "./Loading_Circle_Interrupt.jsx";

class CallBackView extends BaseComponent {

    constructor(props) {
        super(props)
        this.state = {
            loading_Circle_Interrupt: false
        }
        this.props.initCallBackView(this);
    }

    componentWillMount() {
    }

    render() {
        return (
            <div>
                <Loading_Circle_Interrupt open={this.state.loading_Circle_Interrupt}/>
            </div>
        );
    }

    componentDidMount() {
    }

    isVisible_Loading_Circle_Interrupt(state) {
        this.setState({loading_Circle_Interrupt: state});
    }

}

export default CallBackView;