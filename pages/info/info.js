//logs.js
let apis = require("../../utils/wechat");
let ajax = require("../../utils/ajax");
Page({
  data: {

  },
  onLoad() {
    this.getUserInfo();
  },
  async getUserInfo() {
    try {
      let r1 = await apis.api("getAuthCode", { scopes: "auth_user" });
      console.log(r1);
      let { authCode: code } = r1;
      let r2 = await ajax.postApiData("userinfo", { code });
      console.log(r2);
    }
    catch (e) {
      console.log(e);
    }
  }
});
