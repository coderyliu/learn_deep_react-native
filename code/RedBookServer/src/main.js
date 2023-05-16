const app = require("./app/index");

// 导入环境信息
const config = require("./app/config");

// 引入数据库
require("./app/database");

// 0.0.0.0这里Node文档中也说明，要想拿到ipv4地址必须这样写，否则拿到的是ipv6地址
app.listen(config.APP_PORT, "0.0.0.0", () => {
  console.log(`${config.APP_HOST}:${config.APP_PORT}服务启动成功`);
});
