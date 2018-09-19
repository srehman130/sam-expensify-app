import { createStore } from 'redux';

console.log('redux');

const increment = ({ incBy = 1 } = {}) => ({
    type: 'INC',
    incBy
});

const decrement = ({ decBy = 1 } = {}) => ({
    type: 'DEC',
    decBy
})

const set = ({ count = 1 } = {}) => ({
    type: 'SET',
    count
})

const reset = () => ({
    type: 'RESET'
})

const countReducer = (state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INC':
        return {
            count: state.count + action.incBy
        }
        case 'DEC':
        return {
            count: state.count - action.decBy
        }
        case 'SET':
        return {
            count: action.count
        }
        case 'RESET':
        return {
            count: 0
        }
        default:
        return state
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(decrement({ decBy: 50 }));

store.dispatch(reset());

store.dispatch(set({ count: 43 }));

store.dispatch(increment({ incBy: 50 }));

store.dispatch(increment());

unsubscribe();              //unsubscribing from state, store.subscribe will only run two times

store.dispatch(increment());
