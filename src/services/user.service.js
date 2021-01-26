const { User } = require("../models");


function createUser(body) {

  return User.create(body);
}
function getUsers(query) {
  return User.findAll();
}
function getUsersById(id) {
  return User.findOne({ where: { id } });
}
function getUsersByUsernmae(username) {
  return User.findOne({ where: { username } });
}
function updateUser(User, body) {
  return User.update(body);
}
function updateUserById(id, body) {
  return User.update(body, { where: { id } });
}
function searchForUsers(query) {
  return User.findAll({ where: { query } });
}

module.exports = {
  createUser,
  getUsers,
  getUsersById,
  updateUser,
  updateUserById,
  searchForUsers,
  getUsersByUsernmae
};
