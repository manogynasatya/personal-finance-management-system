import React from 'react';
import './ExpenseList.css';

function ExpenseList() {
  // Sample expenses data
  const expenses = [
    { id: 1, date: '2024-09-20', category: 'Groceries', description: 'Weekly groceries', amount: 150.00 },
    { id: 2, date: '2024-09-18', category: 'Rent', description: 'Monthly apartment rent', amount: 800.00 },
    { id: 3, date: '2024-09-15', category: 'Transportation', description: 'Gasoline refill', amount: 50.00 },
    { id: 4, date: '2024-09-13', category: 'Dining', description: 'Dinner at restaurant', amount: 45.00 },
    { id: 5, date: '2024-09-10', category: 'Utilities', description: 'Electricity bill', amount: 100.00 },
    { id: 6, date: '2024-09-05', category: 'Entertainment', description: 'Movie tickets', amount: 30.00 },
  ];

  return (
    <div className="expense-list-container">
      <h2>Expense List</h2>
      <p>View all your expenses here. This list helps you keep track of your spending habits and make informed financial decisions.</p>

      {/* Expenses Table */}
      <table className="expense-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Description</th>
            <th>Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.date}</td>
              <td>{expense.category}</td>
              <td>{expense.description}</td>
              <td>{expense.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseList;
