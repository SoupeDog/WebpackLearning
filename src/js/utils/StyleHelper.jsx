export default class StyleHelper {

    static createMargin(data) {
        let half_F_W = Math.floor(data.FatherW / 2);
        let half_F_H = Math.floor(data.FatherH / 2);
        let half_S_W = Math.floor(data.SonW / 2);
        let half_S_H = Math.floor(data.SonH / 2);
        return (half_F_H - half_S_H) + "px " + (half_F_W - half_S_W) + "px";
    }
}