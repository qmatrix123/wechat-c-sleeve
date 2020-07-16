/**
 * @作者 Lin
 * @创建时间 2020/7/12 10:06 下午
 */
import {Http} from "../utils/http";

class Category {
    static async getHomeLocationC() {
        return await Http.request({
            url:'/v1/category/grid/all'
        })
    }
}

export {
    Category
}