const homeModel = require("../models/home-model");
const { homeFindList } = require("../constants/home-data");

class HomeCont {
  // 请求首页发现列表
  async getHomeFindListCont(ctx, next) {
    let result;

    try {
      const { type = "recommend", limit = 20, offset = 0 } = ctx.request.query;

      result = homeFindList[type].slice(offset, offset + limit);
    } catch (error) {
      return ctx.app.emit("error", error, ctx);
    }

    ctx.status = 200;
    ctx.body = {
      code: 1,
      data: {
        result,
        total: homeFindList.length,
      },
    };
  }
}

module.exports = new HomeCont();
