const fs = require("fs");
const path = require("path");

const appRoutes = (app) => {
  const fileRoutes = fs.readdirSync(path.join(__dirname, "./modules"));

  for (const route of fileRoutes) {
    const router = require(path.join(__dirname, `./modules/${route}`));

    app.use(router.routes());
    app.use(router.allowedMethods());
  }
};

module.exports = appRoutes;
