import React from 'react';
import './ExpenseTracker.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ExpenseTracker() {
  // Sample expense data for chart
  const expenseBarData = {
    labels: ['Groceries', 'Rent', 'Transportation', 'Utilities', 'Entertainment', 'Dining'],
    datasets: [
      {
        label: 'Expenses ($)',
        data: [150, 800, 100, 200, 120, 90],
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="expense-tracker-container">
      <h2>Expense Tracker</h2>
      <p>Track your expenses here and stay on top of your finances.</p>

      {/* Analytics Section */}
      <div className="analytics-section">
        <div className="chart-container">
          <h3>Expenses by Category</h3>
          <Bar data={expenseBarData} />
        </div>
      </div>

      {/* Expense Table */}
      <div className="expense-table-container">
        <h3>Recent Expenses</h3>
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
            <tr>
              <td>2024-09-20</td>
              <td>Groceries</td>
              <td>Weekly groceries</td>
              <td>150.00</td>
            </tr>
            <tr>
              <td>2024-09-18</td>
              <td>Rent</td>
              <td>Monthly apartment rent</td>
              <td>800.00</td>
            </tr>
            <tr>
              <td>2024-09-15</td>
              <td>Transportation</td>
              <td>Gasoline refill</td>
              <td>50.00</td>
            </tr>
            <tr>
              <td>2024-09-13</td>
              <td>Dining</td>
              <td>Restaurant dinner</td>
              <td>45.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ExpenseTracker;
