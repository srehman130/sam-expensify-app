import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const DashboardPage = () => (
    <div className="container">
        <h2>Current Expenses</h2>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default DashboardPage;