const db = require("../models");
const Salary = db.salary;
const Op = db.Sequelize.Op;

exports.createSalary = async (req, res) => {
  try {
    if (!req.body.salary) {
      res.status(422).json("Please Fill Required Field");
    }
    let saveSalary = await Salary.create(req.body);
    if (saveSalary) {
      res.status(200).json(saveSalary);
    } else {
      res.status(500).json("Something Went Wrong");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getOneEmployeeSalary = async (req, res) => {
  try {
    const id = req.body.employeeId;
    let getOneSalary = await Salary.findOne({
      where: {
        userId: id
      }
    });
    if (getOneSalary) {
      res.status(200).json(getOneSalary);
    } else {
      res.status(404).json("Salary Not Found");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
