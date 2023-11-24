const express = require('express')

const router = express.Router()

const {
  createTrip,
  getAllTrip,
  getTripDetails,
  updateTripDetails,
  deleteTrip,
} = require("../controller/trip");

const {
  createExpenses,
  getAllExpenses,
  getExpensesDetails,
  updateExpensesDetails,
  deleteExpenses
} = require("../controller/expenses");

const createUser = require('../controller/user')

router.post("/user", createUser);
// trip endpoints
router.post('/trip', createTrip)
router.get('/trips', getAllTrip)
router.get('/tripdetails/:id', getTripDetails);
router.put("/updatetrip/:id", updateTripDetails);
router.delete("/deletetrip/:id", deleteTrip);

// expenses endpoints
router.post("/newexpenses", createExpenses);
router.get("/expenses", getAllExpenses);
router.get("/expensesdetails/:id", getExpensesDetails);
router.put("/updateexpenses/:id", updateExpensesDetails);
router.put("/deleteexpenses/:id", deleteExpenses);


module.exports = router