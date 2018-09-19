import React from 'react';
import { connect } from 'react-redux';
import ExpenseItem from './ExpenseItem';
import visibleExpenses from '../selectors/expenses';
 
const ExpenseList = (props) => (
    <div>
        {props.expenses.length > 0 ? props.expenses.map((expense) => <ExpenseItem
            key={expense.id} 
            {...expense}
            />
        ) : <p className="no-expenses">No expenses. Please create one to continue.</p>}
    </div>
);

const mapStateToProps = (state) => ({
    expenses: visibleExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpenseList);