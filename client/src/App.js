import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SignIn from './components/SignIn';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import ExpenseTracker from './components/ExpenseTracker';
import BudgetTracker from './components/BudgetTracker';
import ExpenseList from './components/ExpenseList';
import Cookies from 'js-cookie';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/expense-tracker" element={<ExpenseTracker />} />
          <Route path="/budget-tracker" element={<BudgetTracker />} />
          <Route path="/expense-list" element={<ExpenseList />} />
        </Routes>
      </div>
    </Router>
  );
}
Cookies.set('userSession', 'abc123', { expires: 1 }); // 1 day

const userSession = Cookies.get('userSession');
console.log('User Session:', userSession);

Cookies.remove('userSession');
export default App;

