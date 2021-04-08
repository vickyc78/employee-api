let express = require("express");

let bodyParser = require("body-parser");

let cors = require("cors");

let router = express.Router();

let app = express();

require("dotenv").config();

var env = require("./config/env/development");

const db = require("./models");
// db.sequelize.sync();
db.sequelize.sync({ force: true });

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
let port = process.env.PORT || env.port;
console.log("inside index.js", port);
app.listen(port, function() {
  console.log(`App listing on port ${port} !`);
});
const UserController = require("./controllers/UserController");
const SalaryController = require("./controllers/SalaryController");
const DepartmentController = require("./controllers/DepartmentController");

router.post("/create", UserController.createEmployee);
router.get("/:employeeId", UserController.getOneEmployeeDetail);
router.post("/getAll", UserController.getAllEmployee);
router.post("/getAllEmployeeFilter", UserController.getAllEmployeeFilter);

router.post("/createSalary", SalaryController.createSalary);
router.post("/getOneSalary", SalaryController.getOneEmployeeSalary);

router.post("/saveDepartment", DepartmentController.save);
router.post("/getOneDepartment", DepartmentController.getOneDepartment);

app.use("/User", router);
app.use("/Salary", router);
app.use("/Department", router);

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization"
  );
  next();
});
