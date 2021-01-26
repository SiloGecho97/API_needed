const videoController = require("../controllers/user.controller");

const app = (module.exports = require("express")());


app.post("/api/user",videoController.createUser)
app.post("/api/login",videoController.login)
// the catch all route
app.all("/*", (req, res) => {
    res.status(404).send({ msg: "not found" });
  });
  