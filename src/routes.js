const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/User.ts");

//require("./controllers/index")(routes);

routes.get("/", (req, res) => {
  return res.json({ Hello: "WoRlD!  :-)" });
});

routes.get("/create", UserController.store);
routes.get("/update", UserController.update);
routes.get("/list", UserController.list);

module.exports = routes;
