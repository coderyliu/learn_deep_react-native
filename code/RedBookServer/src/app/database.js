const mysql = require("mysql2");
const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER_NAME,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
} = require("./config");

const connection = mysql.createPool({
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  user: MYSQL_USER_NAME,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
});

connection.getConnection((err, conn) => {
  if (err) {
    console.log("数据库连接失败");
  } else {
    console.log("数据库连接成功");
  }
});

// 数据库promise化
module.exports = connection.promise();
