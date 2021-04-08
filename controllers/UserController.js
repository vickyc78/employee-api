const db = require("../models");
const User = db.user;
const Salary = db.salary;
const Department = db.department;
const Op = db.Sequelize.Op;

exports.createEmployee = async (req, res) => {
  try {
    if (!req.body.firstName || !req.body.lastName || !req.body.address) {
      res.status(422).json("Please Fill Required Field");
    }
    let saveEmployee = await User.create(req.body);
    if (saveEmployee) {
      res.status(200).json(saveEmployee);
    } else {
      res.status(500).json("Something Went Wrong");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getOneEmployeeDetail = async (req, res) => {
  try {
    const id = req.params.employeeId;
    if (!req.params.employeeId) {
      res.status(422).json("EmployeeId is required");
    }
    let getOneEmployeeData = await User.findByPk(id, {
      include: [
        {
          model: Salary
        }
      ]
    });
    if (getOneEmployeeData) {
      res.status(200).json(getOneEmployeeData);
    } else {
      res.status(404).json("User Not Found");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getAllEmployee = async (req, res) => {
  try {
    let allEmployeeData = await User.findAll();
    if (allEmployeeData) {
      res.status(200).json(allEmployeeData);
    } else {
      res.status(404).send("No Employee Found");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getAllEmployeeFilter = async (req, res) => {
  try {
    let allEmployeeData = await User.findAll({
      where: {
        joiningDate: {
          [Op.between]: [req.body.fromDate, req.body.toDate]
        }
      }
    });
    if (allEmployeeData.length) {
      res.status(200).json(allEmployeeData);
    } else {
      res.status(404).send("No Employee Found");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
