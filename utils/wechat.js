/**
 * Promise化小程序接口
 */
let wx = my;
class Wechat {

  static api(name, opts) {
    console.log(name, opts);
    return new Promise((success, fail) => {
      let obj = { ...opts, ...{ success, fail } };
      wx[name](obj);
    });
  };

  /**
   * 发起网络请求
   * @param {string} api 
   * @param {string} path 
   * @param {object} params 
   * @return {Promise} 
   */
  static request(api, path, params, method = "GET", type = "json") {
    // console.log(api, path);
    if (method == "POST") type = "application/x-www-form-urlencoded";
    return new Promise((success, fail) => {
      let opts = {
        url: `${api}/${path}`,
        data: Object.assign({}, params),
        method,
        header: { 'Content-Type': type },
        success,
        fail
      }
      // console.log(opts.url);
      wx.request(opts);
    });
  };

};

module.exports = Wechat;