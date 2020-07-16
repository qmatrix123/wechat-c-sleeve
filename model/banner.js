/**
 * @作者 Lin
 * @创建时间 2020/7/9 10:01 下午
 */
import {Http} from "../utils/http";


class Banner {

    static locationB = 'b-1'
    static locationG = 'b-2'

    static async getHomeLocationB() {
        return await Http.request({
            url: `/v1/banner/name/${this.locationB}`,
        })
    }

    static async getHomeLocationG() {
        return await Http.request({
            url: `/v1/banner/name/${this.locationG}`,
        })
    }

}

export {
    Banner
}