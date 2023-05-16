// ?错误类型
// todo 1.密码错误 400
const PASSWORD_ERROR = "password error";

// todo 2.用户名已存在 409
const ACCOUNT_CONFLICT = "account conflict";

// todo 3.账号为空
const ACCOUNT_EMPTY = "account empty";

// todo 5.不存在token
const TOKEN_NOT_EXISTS = "token is not exists";

module.exports = {
  PASSWORD_ERROR,
  ACCOUNT_CONFLICT,
  ACCOUNT_EMPTY,
  TOKEN_NOT_EXISTS,
};
