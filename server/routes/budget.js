// server/routes/budget.js
const express = require("express");
const router = express.Router();
const { setBudget, getBudgets } = require("../controllers/budgetController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/set", authMiddleware, setBudget);
router.get("/", authMiddleware, getBudgets);

module.exports = router;
