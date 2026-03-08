import React, { useEffect } from 'react';
import './BudgetTracker.css';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function BudgetTracker() {
  // Predefined monthly budget
  const monthlyBudget = 2000;

  // Sample budget allocation data for the doughnut chart
  const budgetData = {
    labels: ['Rent', 'Groceries', 'Utilities', 'Transportation', 'Savings', 'Miscellaneous'],
    datasets: [
      {
        data: [800, 300, 150, 100, 400, 50],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40'
        ],
      },
    ],
  };

  // Calculate total budget allocation
  const totalAllocated = budgetData.datasets[0].data.reduce((acc, val) => acc + val, 0);

  // Trigger an alert if the total allocated budget exceeds the monthly budget
  useEffect(() => {
    if (totalAllocated > monthlyBudget) {
      alert(`Budget Alert: Your allocated budget ($${totalAllocated}) exceeds your monthly budget of $${monthlyBudget}. Please review your allocations.`);
    }
  }, [totalAllocated, monthlyBudget]);

  return (
    <div className="budget-tracker-container">
      <h2>Budget Tracker</h2>
      <p>Set and monitor your monthly budget here. Allocate your finances across different categories such as rent, groceries, utilities, and more to better manage your spending.</p>
      
      <p>Understanding your spending habits is the key to maintaining control of your finances. Use the chart below to see how your budget is allocated. Proper distribution of income ensures you can achieve both short-term and long-term financial goals, such as paying rent, buying groceries, and saving for future needs.</p>
      
      {/* Doughnut Chart */}
      <div className="chart-container">
        <h3>Budget Allocation Overview</h3>
        <Doughnut data={budgetData} />
      </div>

      {/* Budget Alert */}
      {totalAllocated > monthlyBudget && (
        <div className="budget-alert">
          <p>
            <strong>Budget Alert:</strong> Your allocated budget ($
            {totalAllocated}) exceeds your monthly budget of $
            {monthlyBudget}. Please adjust your allocations to avoid overspending.
          </p>
        </div>
      )}

      {/* Budget Status */}
      <div className="budget-status">
        <h3>Budget Status Summary</h3>
        <p>You have allocated a significant portion of your budget to rent and savings, which are crucial categories. Keep track of your miscellaneous spending to make sure you stay within budget. Adjust allocations if needed to make sure you have enough left for essentials.</p>
      </div>
    </div>
  );
}

export default BudgetTracker;
