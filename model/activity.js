/**
 * @作者 Lin
 * @创建时间 2020/7/15 2:46 下午
 */
import {Http} from "../utils/http";

class Activity {

    static locationD = 'a-2'
    static async getHomeLocationD() {
        return await Http.request({
            url: `/v1/activity/name/${this.locationD}`
        })
    }
}


export {
    Activity
}