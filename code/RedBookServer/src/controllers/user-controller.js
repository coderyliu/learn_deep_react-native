const userModel = require("../models/user-model");
const {
  userInfo,
  userCollectList,
  userLikeList,
  userNoteList,
} = require("../constants/user-data");
const errorTypes = require("../constants/errortypes");

class UserCont {
  // 获取个人信息
  async getUserInfoCont(ctx, next) {
    let result;

    try {
      const userId = ctx.request.header["x-userid"];
      if (!userId) {
        return ctx.emit("error", new Error(errorTypes.TOKEN_NOT_EXISTS), ctx);
      }

      result = userInfo[userId];
    } catch (error) {
      return ctx.app.emit("error", error, ctx);
    }

    ctx.status = 200;
    ctx.body = {
      code: 1,
      result,
    };
  }

  // 获取个人收藏笔记
  async getUserCollectListCont(ctx, next) {
    let result;
    let total = 0;

    try {
      const userId = ctx.request.header["x-userid"];
      if (!userId) {
        return ctx.emit("error", new Error(errorTypes.TOKEN_NOT_EXISTS), ctx);
      }

      const { limit = 20, offset = 0 } = ctx.request.query;

      result = userCollectList[userId].slice(offset, limit + offset);
      total = userCollectList[userId].length;
    } catch (error) {
      return ctx.app.emit("error", error, ctx);
    }

    ctx.status = 200;
    ctx.body = {
      code: 1,
      data: {
        total,
        result,
      },
    };
  }

  // 获取个人点赞笔记
  async getUserLikeListCont(ctx, next) {
    let result,
      total = 0;

    try {
      const userId = ctx.request.header["x-userid"];
      if (!userId) {
        return ctx.emit("error", new Error(errorTypes.TOKEN_NOT_EXISTS), ctx);
      }

      const { limit = 20, offset = 0 } = ctx.request.query;

      result = userLikeList[userId].slice(offset, limit + offset);
      total = userLikeList[userId].length;
    } catch (error) {
      return ctx.app.emit("error", error, ctx);
    }

    ctx.status = 200;
    ctx.body = {
      code: 1,
      data: {
        result,
        total,
      },
    };
  }

  // 获取个人发布笔记列表
  async getUserNoteListCont(ctx, next) {
    let result, total;

    try {
      const userId = ctx.request.header["x-userid"];
      if (!userId) {
        return ctx.emit("error", new Error(errorTypes.TOKEN_NOT_EXISTS), ctx);
      }

      const { limit = 20, offset = 0 } = ctx.request.query;

      result = userNoteList[userId].slice(offset, limit + offset);
      total = userNoteList[userId].length;
    } catch (error) {
      return ctx.app.emit("error", error, ctx);
    }

    ctx.status = 200;
    ctx.body = {
      code: 1,
      data: {
        total,
        result,
      },
    };
  }
}

module.exports = new UserCont();
