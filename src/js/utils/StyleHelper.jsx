import {createMuiTheme} from "@material-ui/core/styles/index";
import Fade from "@material-ui/core/es/Fade/Fade";
import Collapse from "@material-ui/core/es/Collapse/Collapse";
import Grow from "@material-ui/core/es/Grow/Grow";
import Slide from "@material-ui/core/es/Slide/Slide";
import Zoom from "@material-ui/core/es/Zoom/Zoom";
import LogHelper from "../utils/LogHelper.jsx";

LogHelper.info({className: "StyleHelper", msg: "constructor----------"});


const DefaultTransition = {
    fade: Fade,
    collapse: Collapse,
    grow: Grow,
    slide: Slide,
    zoom: Zoom,
};


// lightTheme 指，改主题中图标配色为亮色
const lightTheme_Blue_Pink = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            main: '#2196f3',
        },
        secondary: {
            main: '#f50057',
        }
    }
});

const lightTheme_Black_Purple = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            main: '#000',
        },
        secondary: {
            main: '#aa00ff',
        }
    }
});

const lightTheme_Green_Orange = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            main: '#388e3c',
        },
        secondary: {
            main: '#ef6c00',
        }
    }
});


export default class StyleHelper {

    static createMargin({fatherWidth, fatherHeight, sonWidth, sonHeight}) {
        let half_FatherWidth = Math.floor(fatherWidth / 2);
        let half_FatherHeight = Math.floor(fatherHeight / 2);
        let half_SonWidth = Math.floor(sonWidth / 2);
        let half_SonHeight = Math.floor(sonHeight / 2);
        return (half_FatherHeight - half_SonHeight) + "px " + (half_FatherWidth - half_SonWidth) + "px";
    }

    static getLightTheme_Blue_Pink() {
        return lightTheme_Blue_Pink;
    }

    static getLightTheme_Black_Purple() {
        return lightTheme_Black_Purple;
    }

    static getLightTheme_Green_Orange() {
        return lightTheme_Green_Orange;
    }

    static getTheme_Custom({primary, secondary}) {
        return createMuiTheme({
            typography: {
                useNextVariants: true,
            },
            palette: {
                primary: {
                    main: primary,
                },
                secondary: {
                    main: secondary,
                }
            }
        });
    }

    static getTransitionByName(name) {
        return DefaultTransition[name];
    }
}