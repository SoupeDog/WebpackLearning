export default class LogHelper {
    // 当前日志级别
    static getCurrentLogLevel() {
        return {tag: "info", index: 10};
    }

    static getLevelIndex(levelTag) {
        switch (levelTag) {
            case "info":
                return 10;
            case "warn":
                return 20;
            case "error":
                return 30;
            case "always":
                return 100;
            default :
                return 0;
        }
    }

    static log({level, msg, isJson, tag}) {
        if (!(this.getCurrentLogLevel().index > this.getLevelIndex(level))) {
            if (isJson != null && isJson) {
                if (tag != null) {
                    console.log(tag + " : " + JSON.stringify(msg));
                } else {
                    console.log(JSON.stringify(msg));
                }
            } else {
                console.log(msg);
            }
        }
    }


    static debug({msg, isJson, tag}) {
        this.log({level: "debug", msg: msg, isJson: isJson, tag: tag});
    }

    static info({msg, isJson, tag}) {
        this.log({level: "info", msg: msg, isJson: isJson, tag: tag});
    }

    static warn({msg, isJson, tag}) {
        this.log({level: "warn", msg: msg, isJson: isJson, tag: tag});
    }

    static error({msg, isJson, tag}) {
        this.log({level: "error", msg: msg, isJson: isJson, tag: tag});
    }

    static always({msg, isJson, tag}) {
        this.log({level: "always", msg: msg, isJson: isJson, tag: tag});
    }
}