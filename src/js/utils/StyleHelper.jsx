import {createMuiTheme} from "@material-ui/core/styles/index";
export default class StyleHelper {

    static createMargin(data) {
        let half_F_W = Math.floor(data.FatherW / 2);
        let half_F_H = Math.floor(data.FatherH / 2);
        let half_S_W = Math.floor(data.SonW / 2);
        let half_S_H = Math.floor(data.SonH / 2);
        return (half_F_H - half_S_H) + "px " + (half_F_W - half_S_W) + "px";
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