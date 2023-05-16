const KoaRouter = require("koa-router");

const {
  getArticleDetailInfoCont,
} = require("../../controllers/article-detail-model");

const articleDetailRouter = new KoaRouter({
  prefix: "/article/detail",
});

// 请求笔记详情
articleDetailRouter.get("/info/:id", getArticleDetailInfoCont);

module.exports = articleDetailRouter;
