const userService = require("../services/user.service");
const bcryptjs = require("bcryptjs");

function createUser(req, res, next) {
  createUserHandler(req.body)
    .then((data) => {
      data
        ? res.status(200).send(data)
        : res.status(400).send({ message: "Failed" });
    })
    .catch((err) => next(err));
}

async function createUserHandler(body) {
  // console.log(body);
  return await userService.createUser(body);
}

function login(req, res, next) {
  const {password,username} = req.body;
  if (!password || !username) {
    res.status(422).json({ validationError: valid });
    return;
  }
  authenticationHandler(req.body)
    .then((user) => res.status(200).send({ user }))
    .catch((err) => res.status(403).send({ message: err }));
}
async function authenticationHandler({ username, password }) {
  // console.log({ username, password });
  const user = await userService.getUsersByUsernmae(username);
  if (!user) {
    throw "username or password incorrect";
  }

  const pass = bcryptjs.compareSync(password, user.password);

  if (!pass) {
    throw "username or password incorrect";
  }

  // const token = jwt.sign(
  //   { sub: user.id, role: user.role, key: user.key },
  //   CONSTANTS.JWTSECRET,
  //   { expiresIn: "24hr" }
  // );

  return {
    id: user.id,
    name: user.name,
    username: user.username,
    expiresIn: 86400,
  
  };
}

module.exports = {
  createUser,
  login,
};
