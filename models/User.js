module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "user",
    {
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
      },
      joiningDate: {
        type: Sequelize.DATE
      }
    },
    {
      hooks: {
        afterCreate: async function(user, options) {
          let findOneDepartment = await sequelize.models.department.findOne({
            where: {
              id: user.departmentId
            }
          });
          findOneDepartment.totalEmployeeCount += 1;
          let departmentObj = await findOneDepartment.save();
        }
      }
    }
  );

  return User;
};
