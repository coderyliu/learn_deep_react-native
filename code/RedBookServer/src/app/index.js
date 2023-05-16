const Koa = require("koa");
const cors = require("@koa/cors");
const bodyParser = require("koa-bodyparser");

const errorHandle = require("./errorhandle");
const appRoutes = require("../router/index");

const app = new Koa();

app.use(cors());
app.use(bodyParser());

// 集成路由
appRoutes(app);

// koa捕捉错误
app.on("error", errorHandle);

module.exports = app;
