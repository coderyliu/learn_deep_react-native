const KoaRouter = require("koa-router");

const {
  getUserInfoCont,
  getUserCollectListCont,
  getUserLikeListCont,
  getUserNoteListCont,
} = require("../../controllers/user-controller");

const userRouter = new KoaRouter({
  prefix: "/user",
});

// 获取用户个人信息
userRouter.get("/info", getUserInfoCont);

// 获取用户收藏笔记列表
userRouter.get("/note/collect/list", getUserCollectListCont);

// 获取用户点赞笔记列表
userRouter.get("/note/like/list", getUserLikeListCont);

// 获取用户个人笔记列表
userRouter.get("/note/list", getUserNoteListCont);

module.exports = userRouter;
