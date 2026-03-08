// server/controllers/expenseController.js
const Expense = require("../models/Expense");

exports.addExpense = async (req, res) => {
  const { amount, category, description } = req.body;
  try {
    const expense = new Expense({
      userId: req.user.userId,
      amount,
      category,
      description,
    });
    await expense.save();
    res.status(201).json({ message: "Expense added", expense });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ userId: req.user.userId });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
