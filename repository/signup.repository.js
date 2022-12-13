const { users } = require('../models');

class SignUpRepository {
  constructor() {
    this.User = users;
  }
  findUser = async ({ nickname }) => {
    const user = await this.User.findOne({ where: { nickname } });
    return user;
  };
  createUser = async ({ nickname, password }) => {
    const user = await this.User.create({
      nickname,
      password,
    });
    return user;
  };
}

module.exports = SignUpRepository;
