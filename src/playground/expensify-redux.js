import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const addText = (text = '') => ({
    type: 'ADD_TEXT',
    text
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
});

const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
});

const defaultExpenses = [];

const defaultFilters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}


const expensesReducer = (state = defaultExpenses, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
        return [
            ...state,
            action.expense
        ];
        case 'REMOVE_EXPENSE':
        return state.filter((expense) => expense.id !== action.id)         // can also use destructuring
        case 'EDIT_EXPENSE':
        return state.map((expense) => {
            if (expense.id === action.id) {
                return {
                    ...expense,
                    ...action.updates
                };
            }
            else {
                return expense
            };
        });
        default:
        return state;
    }
}
const filtersReducer = (state = defaultFilters, action) => {
    switch (action.type) {
        case 'ADD_TEXT':
        return {
            ...state,
            text: action.text
        };
        case 'SORT_BY_AMOUNT':
        return {
            ...state,
            sortBy: 'amount'
        };
        case 'SORT_BY_DATE':
        return {
            ...state,
            sortBy: 'date'
        };
        case 'SET_START_DATE':
        return {
            ...state,
            startDate: action.date
        };
        case 'SET_END_DATE':
        return {
            ...state,
            endDate: action.date
        };
        default:
        return state;
    }
}

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}));

const filterExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
       const startDateMatch = !startDate || startDate <= expense.createdAt;
       const endDateMatch = !endDate || endDate >= expense.createdAt;
       const textMatch = !text || expense.description.toLowerCase().indexOf(text.toLowerCase()) > -1;

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
}

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = filterExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const e1 = store.dispatch(addExpense());
const e2 = store.dispatch(addExpense({ description: 'You are a testing my friend', createdAt: 2010, amount: 300 }));
// store.dispatch(removeExpense({ id: e2.expense.id }));
store.dispatch(editExpense(e1.expense.id, { description: 'You are no better either', createdAt: 2001, amount: 3000 }));
store.dispatch(addExpense({ description: 'You are a genius', createdAt: 1994, amount: 60000 }));
store.dispatch(addText());
store.dispatch(sortByDate());
store.dispatch(sortByAmount());
store.dispatch(setStartDate(1000));
store.dispatch(setEndDate(2015));
store.dispatch(addText('Testing'));

const demoState = {
    expenses: [ // objects array
        {
            id: '',
            title: '',
            amount: ''
        }
    ],
    filter: { // objects
        sort: 'date'
    }
}

//
// spreading objects
//

const yp = {
    name: 'sam',
    profession: 'software engineer'
}

const mp = {
    ...yp
}

console.log(mp);