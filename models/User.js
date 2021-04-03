module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    firstName: {
      type: Sequelize.STRING,
      required: true
    },
    lastName: {
      type: Sequelize.STRING,
      required: true
    },
    address: {
      type: Sequelize.STRING,
      required: true
    },
    active: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    }
  });

  return User;
};
