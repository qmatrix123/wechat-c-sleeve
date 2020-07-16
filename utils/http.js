/**
 * @作者 Lin
 * @创建时间 2020/7/9 3:59 下午
 */

import {config} from "../config/config";
import {promisic} from "./util";

class Http {

    static async request({url, data, method = 'GET'}) {
        const res =  await promisic(wx.request)({
            url: `${config.apiBaseUrl}${url}`,
            data,
            method,
            header: {
                appKey: config.appkey
            }
        })
        return res.data
    }
}

export {
    Http
}