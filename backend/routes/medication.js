const express = require("express");
const router = express.Router();
const { isAuthenticatedUser } = require("../middlewares/auth");

// Importing the required controllers from the controllers folder
const {getAllMedicines, createMedicine} = require("../controllers/medicationController");
const {getMedicine, updateMedicine, deleteMedicine} = require("../controllers/medicationController");

// Calling the respective controllers for the required operations
router.route("/medication").get(getAllMedicines);
router.route("/medication")
    .post(createMedicine);
router.route("/medication/:medicationId")
    .get(isAuthenticatedUser, getMedicine)
    .put(isAuthenticatedUser, updateMedicine)
    .delete(isAuthenticatedUser, deleteMedicine);

// Exporting the router
module.exports = router;
