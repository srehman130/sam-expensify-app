import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

console.log(moment().format("MMM Do YYYY"));

export default class ExpenseForm extends React.Component {
    state = {
        description: this.props.expense ? this.props.expense.description : '',
        note: this.props.expense ? this.props.expense.note : '',
        amount: this.props.expense ? (this.props.expense.amount / 100).toString() : '',
        createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
        dateFocused: false,
        error: undefined
    };

    handleDescription = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    handleNote = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };

    handleAmount = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };

    handleCreatedAt = (createdAt) => {
            this.setState(() => ({ createdAt }));
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please add description and amount.' }));
        } else {
            this.setState(() => ({ error: undefined }));
            this.props.onSubmit({
                description: this.state.description,
                note: this.state.note,
                amount: parseFloat(this.state.amount) * 100,
                createdAt: this.state.createdAt.valueOf()
            });
        }
    }

    render() {
        return (
            <div>
                <h2>{this.props.expense ? 'Edit Expense' : 'Add Expense'}</h2>
                {this.state.error && <p className="error">{this.state.error}</p>}
                <form className="form" onSubmit={this.handleSubmit}>
                    <input
                        className="form__input"
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.handleDescription} />
                    <input
                        className="form__input"
                        type="number"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.handleAmount} />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.handleCreatedAt}
                        focused={this.state.dateFocused}
                        onFocusChange={({ focused }) => this.setState({ dateFocused: focused })}
                        numberOfMonths={1}
                        isOutsideRange={() => false} />
                    <textarea
                        className="form__input form_input--text-area"
                        placeholder="Add a note (optional)"
                        value={this.state.note}
                        onChange={this.handleNote} ></textarea>
                    <button className="button form__button">{this.props.expense ? 'Save Expense' : 'Add Expense'}</button>
                </form>
            </div>
        );
    }
};