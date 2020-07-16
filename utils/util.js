/**
 * @作者 Lin
 * @创建时间 2020/7/9 6:14 下午
 */

const promisic = function (func) {

    return function (params = {}) {
        return new Promise((resolve, reject) => {
            const args = Object.assign(params, {
                success: (res) => {
                    resolve(res);
                },
                fail: (error) => {
                    reject(error);
                }
            });
            func(args);
        });
    };
};

export {
    promisic
}