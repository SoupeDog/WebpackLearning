import React from "react";
import ReactDOM from "react-dom";
import Paper from "@material-ui/core/es/Paper/Paper";
import TextField from "@material-ui/core/es/TextField/TextField";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import BaseComponent from "../BaseComponent.jsx";
import Downshift from "downshift";
import {withStyles} from "@material-ui/core/styles/index";
import Chip from "@material-ui/core/es/Chip/Chip";

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: 250,
    },
    container: {
        flexGrow: 1,
        position: 'relative',
    },
    paper: {
        position: 'absolute',
        zIndex: 1,
        marginTop: theme.spacing.unit,
        left: 0,
        right: 0,
    },
    chip: {
        margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
    },
    inputRoot: {
        flexWrap: 'wrap',
    },
    divider: {
        height: theme.spacing.unit * 2,
    },
});

class AutoComplete extends BaseComponent {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: "",
            suggestions: [
                {label: 'Afghanistan'},
                {label: 'Aland Islands'},
                {label: 'Albania'}
            ]
        }
        console.log("constructor----------");
        console.log(JSON.stringify(props));

    }

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
            <Downshift id="downshift-simple">
                {({getInputProps, getItemProps, isOpen, inputValue, selectedItem, highlightedIndex}) => (
                    <div className={this.props.classes.container}>
                        {this.renderInput({
                            fullWidth: true,
                            InputProps: getInputProps({
                                placeholder: 'Search a country (start with a)',
                            })
                        })}
                        {isOpen ? (
                            <Paper className={this.props.classes.paper} square>
                                {getSuggestions(inputValue).map((suggestion, index) =>
                                    renderSuggestion({
                                        suggestion,
                                        index,
                                        itemProps: getItemProps({item: suggestion.label}),
                                        highlightedIndex,
                                        selectedItem,
                                    }),
                                )}
                            </Paper>
                        ) : null}
                    </div>
                )}
            </Downshift>
        );
    }

    renderInput({fullWidth}) {
        return (
            <TextField
                fullWidth={fullWidth}
            />
        );
    }

    renderSuggestion({suggestion, index, itemProps, highlightedIndex, selectedItem}) {
        let isHighlighted = highlightedIndex === index;
        let isSelected = (selectedItem || '').indexOf(suggestion.label) > -1;
        return (
            <MenuItem
                key={suggestion.label}
                selected={isHighlighted}
                component="div"
                style={{
                    fontWeight: isSelected ? 500 : 400,
                }}
            >
                {suggestion.label}
            </MenuItem>
        );
    }

    getSuggestions(inputValue) {
        let count = 0;
        return this.state.suggestions.filter(suggestion => {
            const keep =
                (!inputValue || suggestion.label.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) &&
                count < 5;
            if (keep) {
                count += 1;
            }
            return keep;
        });
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

export default withStyles(styles)(AutoComplete);