import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import { Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend);

function Dashboard() {
  // Sample budget value
  const budget = 2000;

  // Sample data for charts
  const expenseData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Expenses',
        data: [400, 300, 500, 700, 600, 400],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.4)',
      },
    ],
  };

  const categoryData = {
    labels: ['Groceries', 'Rent', 'Entertainment', 'Utilities', 'Savings'],
    datasets: [
      {
        label: 'Spending by Category',
        data: [300, 700, 200, 150, 250],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
        ],
      },
    ],
  };

  // Calculate total expenses
  const totalExpenses = expenseData.datasets[0].data.reduce((acc, val) => acc + val, 0);

  // Use effect to trigger an alert if expenses exceed the budget
  useEffect(() => {
    if (totalExpenses > budget) {
      alert(`Alert: Your total expenses ($${totalExpenses}) have exceeded your budget ($${budget}).`);
    }
  }, [totalExpenses, budget]);

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <ul className="navigation-links">
        <li><Link to="/expense-tracker">Expense Tracker</Link></li>
        <li><Link to="/budget-tracker">Budget Tracker</Link></li>
        <li><Link to="/expense-list">Expense List</Link></li>
      </ul>

      {/* Analytics Section */}
      <div className="analytics-section">
        <div className="chart-container">
          <h3>Monthly Expenses Trend</h3>
          <Line data={expenseData} />
        </div>

        <div className="chart-container">
          <h3>Spending by Category</h3>
          <Pie data={categoryData} />
        </div>
      </div>

      {/* Financial Insights Section */}
      <div className="financial-insights">
        <h3>Financial Insights</h3>
        <p>Tracking your monthly spending habits helps you identify areas where you can save more and spend efficiently. Use our tools to set a monthly budget and monitor your progress to achieve your financial goals.</p>
        <p>Pro tip: Regularly reviewing your expense categories can help you stay in control of your finances and make adjustments as needed. Don't forget to use the Budget Tracker to set realistic goals for your savings.</p>
      </div>
    </div>
  );
}

export default Dashboard;
