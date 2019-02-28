const appCfg = require('../appconfig.js');
const wechat = require('./wechat');
const apiURI = appCfg.apiURI;
const apiPath = appCfg.apiPath;
let defParams = { xtype: 1, mini: "alipay" };

class getData {
  /**
   * get通用接口
   * @param {object} params 
   */
  static getApiData(path, params) {
    params = { ...defParams, ...params };
    return wechat.request(apiURI, apiPath[path], params);
  };
  static postApiData(path, params) {
    params = { ...defParams, ...params };
    return wechat.request(apiURI, apiPath[path], params, "POST");
  };
}

module.exports = getData;