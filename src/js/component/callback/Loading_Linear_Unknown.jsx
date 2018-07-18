import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'
import {withStyles} from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import PropTypes from "prop-types";


const styles = {
    root: {
        flexGrow: 10,
    },
};

class Loading_Linear_Unknown extends React.Component {

    constructor(props) {
        super(props)
        this.state = {};
        // alert("constructor");
    }

    componentWillMount() {
        // alert("componentWillMount");
    }

    render() {
        return (
            <div className={this.props.classes.root} style={{width: "100%", position: "absolute",zIndex:1000}}>
                <LinearProgress style={{display: this.props.open == true ? "inherit" : "none"}} color="secondary"/>
            </div>
        );
    }

    componentDidMount() {
        // alert("componentDidMount");
    }

}

export default withStyles(styles)(Loading_Linear_Unknown);

Loading_Linear_Unknown.propTypes = {
    open: PropTypes.bool
};