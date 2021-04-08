module.exports = (sequelize, Sequelize) => {
  const Department = sequelize.define("department", {
    name: {
      type: Sequelize.STRING
    },
    totalEmployeeCount: {
      type: Sequelize.INTEGER
    }
  });

  return Department;
};
