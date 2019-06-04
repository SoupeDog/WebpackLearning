const ContextProperties = new Map();
export default class WebContextProperties {
    // 全局中 存放 key-value 键值对
    static setValue(key, value) {
        ContextProperties.set(key, value);
    }

    // 全局中根据 key 获取对象
    static getValue(key) {
        let result = ContextProperties.get(key);
        return result;
    }

    // 全局中根据 key 获取对象,若为 null 则赋初值
    static getValueWithDefault(key, defaultValue) {
        let result = ContextProperties.get(key);
        return result == null ? defaultValue : result;
    }
}