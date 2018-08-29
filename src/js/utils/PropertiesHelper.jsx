export default class PropertiesHelper {

    static isStringNotNull(target) {
        let result = false;
        if (target != null) {
            if (typeof target == "string") {
                result = true;
            }
        }
        return result;
    }

    static isNumberNotNull(target) {
        let result = false;
        if (target != null) {
            if (typeof target == "number") {
                result = true;
            }
        }
        return result;
    }

    static isBooleanNotNull(target) {
        let result = false;
        if (target != null) {
            if (typeof target == "boolean") {
                result = true;
            }
        }
        return result;
    }

    static isObjectNotNull(target) {
        let result = false;
        if (target != null) {
            if (typeof target == "object") {
                result = true;
            }
        }
        return result;
    }

    static isArrayNotNull(target) {
        let result = false;
        if (this.isObjectNotNull(target)) {
            if (target instanceof Array) {
                result = true;
            }
        }
        return result;
    }

    static isFunctionNotNull(target) {
        let result = false;
        if (target != null) {
            if (typeof target == "function") {
                result = true;
            }
        }
        return result;
    }
}