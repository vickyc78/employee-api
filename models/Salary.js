module.exports = (sequelize, Sequelize) => {
  const Salary = sequelize.define("salary", {
    salary: {
      type: Sequelize.INTEGER
    }
  });

  return Salary;
};
