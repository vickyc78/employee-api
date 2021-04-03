const Sequelize = require("sequelize");
// const sequelize = new Sequelize("employee", "abc", "abc", {
//   host: "localhost",
//   dialect: "postgres",
//   operatorsAliases: false
// });

const sequelize = new Sequelize(
  "d88atsdo4jugpj",
  "kfdhxrrompytoe",
  "d4ee9d976313c89f4688188b3fb857e38b49b78d4013cff769a145b9647e9347",
  {
    host: "ec2-54-235-108-217.compute-1.amazonaws.com",
    dialect: "postgres",
    operatorsAliases: false
  }
);

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
