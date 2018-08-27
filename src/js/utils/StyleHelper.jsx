import {createMuiTheme} from "@material-ui/core/styles/index";

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
}

// lightTheme 指，改主题中图标配色为亮色
const lightTheme_Blue_Pink = createMuiTheme({
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
    palette: {
        primary: {
            main: '#388e3c',
        },
        secondary: {
            main: '#ef6c00',
        }
    }
});