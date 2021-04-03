const Sequelize = require("sequelize");
const sequelize = new Sequelize("employee", "abc", "abc", {
  host: "localhost",
  dialect: "postgres",
  operatorsAliases: false
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Success!");
  })
  .catch(err => {
    console.log("errrrr", err);
  });
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./User.js")(sequelize, Sequelize);
db.salary = require("./Salary.js")(sequelize, Sequelize);

db.user.hasOne(db.salary, {
  foreignKey: "userId"
});
db.salary.belongsTo(db.user, {
  foreignKey: "userId"
});

module.exports = db;
