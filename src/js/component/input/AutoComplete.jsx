import React from "react";
import ReactDOM from "react-dom";
import Paper from "@material-ui/core/es/Paper/Paper";
import TextField from "@material-ui/core/es/TextField/TextField";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import BaseComponent from "../BaseComponent.jsx";
import Downshift from "downshift";
import {withStyles} from "@material-ui/core/styles/index";
import Chip from "@material-ui/core/es/Chip/Chip";
import keycode from 'keycode';

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
        minHeight: "40px"
    },
    divider: {
        height: theme.spacing.unit * 2,
    },
});

class AutoComplete extends BaseComponent {
    constructor(props) {
        super(props)
        this.state = {
            isShow: false,
            inputValue: "",
            selectedItem: []
        };
        this.props.setParentNode({componentName: this.props.componentName, target: this});
        // console.log("constructor----------");
    }

    componentWillMount() {
        // console.log("componentWillMount----------");
    }

    componentWillReceiveProps(nextProps, nextContext) {
        // console.log("componentWillReceiveProps----------");
        // console.log("nextProps:" + JSON.stringify(nextProps));
        // console.log("nextContext:" + JSON.stringify(nextContext));
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // console.log("shouldComponentUpdate----------");
        // console.log("nextProps:" + JSON.stringify(nextProps));
        // console.log("nextState:" + JSON.stringify(nextState));
        // console.log("nextContext:" + JSON.stringify(nextContext));
        nextState.suggestions_Final = this.initSuggestionsData(this.props.suggestions);
        return true;
    }

    render() {
        if (this.props.isMultiple == null ? false : this.props.isMultiple) {
            return (
                <Downshift
                    id="downshift-multiple"
                    inputValue={this.state.inputValue}
                    selectedItem={this.state.selectedItem}
                    onChange={this.handleChange.bind(this)}
                    onInputValueChange={this.updateSuggestionState.bind(this, false)}
                    onOuterClick={this.updateSuggestionState.bind(this, false)}
                >
                    {({
                          getInputProps,
                          getItemProps,
                          isOpen,
                          inputValue: inputValue2,
                          selectedItem: selectedItem2,
                          highlightedIndex,
                      }) => (
                        <div className={this.props.classes.container}>
                            {this.renderInput({
                                fullWidth: this.props.fullWidth == null ? false : this.props.fullWidth,
                                classes: this.props.classes,
                                error: this.props.error,
                                InputProps: getInputProps({
                                    startAdornment: this.state.selectedItem.map(item => (
                                        <Chip
                                            key={item}
                                            tabIndex={-1}
                                            label={item}
                                            className={this.props.classes.chip}
                                            onDelete={this.handleDelete.bind(this, item)}
                                        />
                                    )),
                                    onChange: this.handleInputChange.bind(this),
                                    onKeyDown: this.handleKeyDown.bind(this),
                                    placeholder: this.props.placeholder,
                                }),
                                label: this.props.label
                            })}
                            {this.finalNeedShowSuggestions(this.state.isShow, isOpen) ? (
                                <Paper className={this.props.classes.paper} square>
                                    {this.getSuggestions(inputValue2).map((suggestion, index) =>
                                        this.renderSuggestion({
                                            suggestion,
                                            index,
                                            itemProps: getItemProps({
                                                item: suggestion.label
                                            }),
                                            highlightedIndex,
                                            selectedItem: selectedItem2,
                                        }),
                                    )}
                                </Paper>
                            ) : null}
                        </div>
                    )}
                </Downshift>
            );
        } else {
            return (
                <Downshift id="downshift-simple"
                    // isOpen={this.state.isShow}
                           onChange={this.handleChange.bind(this)}
                           inputValue={this.state.inputValue}
                           onInputValueChange={this.updateSuggestionState.bind(this, false)}
                           onOuterClick={this.updateSuggestionState.bind(this, false)}>
                    {({getInputProps, getItemProps, isOpen, inputValue, selectedItem, highlightedIndex}) => (
                        <div className={this.props.classes.container}>
                            {this.renderInput({
                                fullWidth: this.props.fullWidth == null ? false : this.props.fullWidth,
                                classes: this.props.classes,
                                error: this.props.error,
                                InputProps: getInputProps({
                                    onKeyDown: this.handleKeyDown.bind(this),
                                    onChange: this.handleInputChange.bind(this),
                                    placeholder: this.props.placeholder,
                                }),
                                label: this.props.label
                            })
                            }
                            {this.finalNeedShowSuggestions(this.state.isShow, isOpen) ? (
                                <Paper className={this.props.classes.paper} square>
                                    {this.getSuggestions(inputValue).map((suggestion, index) =>
                                        this.renderSuggestion({
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
    }

    renderInput(inputProps) {
        let {InputProps, classes, ref, ...other} = inputProps;
        return (
            <TextField
                onClick={this.isShowTrigger.bind(this)}
                InputProps={{
                    inputRef: ref,
                    classes: {
                        root: classes.inputRoot,
                    },
                    ...InputProps,
                }}
                {...other}
            />
        );
    }

    renderSuggestion({suggestion, index, itemProps, highlightedIndex, selectedItem}) {
        let isHighlighted = highlightedIndex === index;
        let isSelected = (selectedItem || '').indexOf(suggestion.label) > -1;
        return (
            <MenuItem
                {...itemProps}
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
        return this.state.suggestions_Final.filter(suggestion => {
            const keep =
                (!inputValue || suggestion.label.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) &&
                count < 5;
            if (keep) {
                count += 1;
            }
            return keep;
        });
    }

    handleKeyDown(event) {
        if (this.props.isMultiple == null ? false : this.props.isMultiple) {
            let {inputValue, selectedItem} = this.state;
            if (selectedItem.length && !inputValue.length && keycode(event) === 'backspace') {
                this.setState({
                    selectedItem: selectedItem.slice(0, selectedItem.length - 1),
                });
            }
        } else {
            if (this.state.isShow == false) {
                this.setState({
                    isShow: true
                });
            }
        }
    };

    handleInputChange(event) {
        this.setState({isShow: true, inputValue: event.target.value});
    };

    handleChange(item) {
        if (this.props.isMultiple == null ? false : this.props.isMultiple) {
            let {selectedItem} = this.state;
            if (selectedItem.indexOf(item) === -1) {
                selectedItem = [...selectedItem, item];
            }
            this.setState({
                inputValue: '',
                selectedItem
            });
        } else {
            this.setState({
                inputValue: item,
                selectedItem: []
            });
        }
    };

    handleDelete(item) {
        this.setState(state => {
            const selectedItem = [...state.selectedItem];
            selectedItem.splice(selectedItem.indexOf(item), 1);
            return {selectedItem};
        });
    };

    isShowTrigger() {
        let _react = this;
        if (_react.state.isShow) {
            _react.setState({isShow: false});
        } else {
            _react.setState({isShow: true});
        }
    }

    updateSuggestionState(isShow) {
        this.setState({isShow: isShow});
    }

    finalNeedShowSuggestions(main, unit) {
        let result = false;
        if (!main) {
            if (unit) {
                result = true;
            }
        } else {
            result = true;
        }
        return result;
    }

    componentDidMount() {
        console.log("componentDidMount----------");
        // console.log("");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate----------");
        // console.log("prevProps:" + JSON.stringify(prevProps));
        // console.log("prevState:" + JSON.stringify(prevState));
        // console.log("snapshot:" + JSON.stringify(snapshot));
        // console.log("");
    }

    componentWillUnmount() {
        // console.log("componentWillUnmount----------");
    }

    getVal() {
        if (this.state.selectedItem.length > 0) {
            return this.state.selectedItem;
        } else {
            return this.state.inputValue;
        }
    }

    cleanVal() {
        this.setState({
            inputValue: "",
            selectedItem: [],
        });
    }

    initSuggestionsData(array) {
        if (array instanceof Array) {
            return array.map((value) => {
                return {label: value}
            });
        } else {
            throw new Error("AutoComplete:[suggestions] should be Array.");
        }
    }
}

export default withStyles(styles)(AutoComplete);