import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';
import { removeExpense } from '../actions/expenses';

const EditPage = (props) => {
    console.log(props);
    return (
        <div className="container">
            <ExpenseForm
                expense={props.expense}
                onSubmit={(updates) => {
                    props.dispatch(editExpense(props.expense.id, updates));
                    props.history.push('/')
                }} />
            <button className="button button--remove" onClick={() => {
                props.dispatch(removeExpense({ id: props.expense.id }));
                props.history.push('/');
            }}>Remove Expense</button>
        </div>
    );
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

export default connect(mapStateToProps)(EditPage);