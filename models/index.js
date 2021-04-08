const Sequelize = require("sequelize");
global.sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    operatorsAliases: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);
console.log("process.env.DB_HOST", process.env.DBNAME);
// const seq,uelize = new Sequelize(
//   "d88atsdo4jugpj",
//   "kfdhxrrompytoe",
//   "d4ee9d976313c89f4688188b3fb857e38b49b78d4013cff769a145b9647e9347",
//   {
//     host: "ec2-54-235-108-217.compute-1.amazonaws.com",
//     dialect: "postgres",
//     operatorsAliases: false,
//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false
//       }
//     }
//   }
// );

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
db.department = require("./Department.js")(sequelize, Sequelize);

db.department.hasOne(db.user, { foreignKey: "departmentId" });
db.user.belongsTo(db.department, {
  foreignKey: "departmentId"
});
db.user.hasOne(db.salary, {
  foreignKey: "userId"
});
db.salary.belongsTo(db.user, {
  foreignKey: "userId"
});

module.exports = db;
