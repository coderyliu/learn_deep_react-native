const articleDetailModel = require("../models/article-detail-model");
const { articleDetailData } = require("../constants/article-detail-data");

class ArticleDetailCont {
  // 请求笔记详情
  async getArticleDetailInfoCont(ctx, next) {
    let result;

    try {
      const { id } = ctx.request.params;

      result = articleDetailData[id];
    } catch (error) {
      return ctx.app.emit("error", error, ctx);
    }

    ctx.status = 200;
    ctx.body = {
      code: 1,
      result,
    };
  }
}

module.exports = new ArticleDetailCont();
