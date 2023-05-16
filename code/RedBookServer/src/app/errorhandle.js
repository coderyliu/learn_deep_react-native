const errorTypes = require("../constants/errortypes");

const errorHandle = (error, ctx) => {
  let message = "";
  let status;

  switch (error.message) {
    case errorTypes.PASSWORD_ERROR:
      message = errorTypes.PASSWORD_ERROR;
      status = 400;
      break;
    case errorTypes.ACCOUNT_EMPTY:
      message = errorTypes.ACCOUNT_EMPTY;
      status = 400;
      break;
    case errorTypes.ACCOUNT_CONFLICT:
      message = errorTypes.ACCOUNT_CONFLICT;
      status = 409;
      break;
    case errorTypes.TOKEN_NOT_EXISTS:
      message = errorTypes.TOKEN_NOT_EXISTS;
      status = 401;
      break;
    default:
      message = error.message;
      status = 400;
      break;
  }

  ctx.status = status;
  ctx.body = {
    code: -1,
    message,
  };
};

module.exports = errorHandle;
