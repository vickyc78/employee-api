const db = require("../models");
const Department = db.department;
const Op = db.Sequelize.Op;

exports.save = async (req, res) => {
  try {
    let saveDepartment = await Department.create(req.body);
    if (saveDepartment) {
      res.status(200).json(saveDepartment);
    } else {
      res.status(500).json("Something Went Wrong");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getOneDepartment = async (req, res) => {
  try {
    const id = req.body.departmentId;
    let getOneDepartment = await Department.findOne({
      where: {
        id: id
      }
    });
    if (getOneDepartment) {
      res.status(200).json(getOneDepartment);
    } else {
      res.status(404).json("Department Not Found");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
