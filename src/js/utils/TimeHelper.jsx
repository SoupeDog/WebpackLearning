export default class TimeHelper {
    // 填充 target 为 size 位数
    static formatNumber(target, size) {
        let compareNumber = Math.pow(10, size);
        let needAddCount = 0;
        let result = "";
        let prefix = "";
        if (target < 0) {
            prefix = "-";
        }
        target = Math.abs(target);
        if (target < 2) {
            needAddCount = size - 1;
        } else {
            while (Math.pow(10, needAddCount + 1) * target <= compareNumber) {
                needAddCount += 1;
            }
        }
        for (let i = 0; i < needAddCount; i++) {
            result += "0";
        }
        result += target;
        return prefix + result;
    }

    // 获取当前时间 ± x 天的毫秒级时间戳
    static getTimeStamp(x) {
        let currentTs = new Date().getTime();
        if (x != null) {
            currentTs -= 86400000 * x;
            return currentTs;
        } else {
            return currentTs;
        }
    }

    // 目标毫秒级时间戳格式化成字符串,默认格式为 yyyy-mm-dd hh:mm:ss
    static formatTimeStampToString(target, type) {
        let currentDate = new Date(target);
        var year = currentDate.getFullYear();
        var month = currentDate.getMonth() + 1;
        var day = currentDate.getDate();
        var hour = currentDate.getHours();
        var minute = currentDate.getMinutes();
        var second = currentDate.getSeconds();
        switch (type) {
            case "yyyy-mm-dd":
                return year + "-" + this.formatNumber(month, 2) + "-" + this.formatNumber(day, 2);
            case "hh:mm:ss":
                return this.formatNumber(hour, 2) + ":" + this.formatNumber(minute, 2) + ":" + this.formatNumber(second, 2);
            default:
                return year + "-" + this.formatNumber(month, 2) + "-" + this.formatNumber(day, 2) + " " + this.formatNumber(hour, 2) + ":" + this.formatNumber(minute, 2) + ":" + this.formatNumber(second, 2);
        }
    }

    // 获取目标时间戳 ± x 个自然天的 00:00:00 时刻时间戳
   static getNaturalDayTimeStamp(target,x){
       let currentDate = new Date(target);
       var year = currentDate.getFullYear();
       var month = currentDate.getMonth() + 1;
       var day = currentDate.getDate();
    }
}