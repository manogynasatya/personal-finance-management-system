// server/controllers/budgetController.js
const Budget = require("../models/Budget");

exports.setBudget = async (req, res) => {
  const { category, limit } = req.body;
  try {
    const budget = new Budget({ userId: req.user.userId, category, limit });
    await budget.save();
    res.status(201).json({ message: "Budget set", budget });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBudgets = async (req, res) => {
  try {
    const budgets = await Budget.find({ userId: req.user.userId });
    res.json(budgets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
