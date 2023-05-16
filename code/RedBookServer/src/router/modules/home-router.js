const KoaRouter = require("koa-router");

const { getHomeFindListCont } = require("../../controllers/home-controller");

const homeRouter = new KoaRouter({
  prefix: "/home",
});

homeRouter.get("/find/list", getHomeFindListCont);

module.exports = homeRouter;
