import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test('editing', () => {
    const action = editExpense('abc', { updates: "object" });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc',
        updates: {
            updates: "object"
        }
    });
});

test('removing', () => {
    const action = removeExpense({ id: "abc" });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'abc'
    });
});

test('adding with values', () => {
    const action = addExpense({
        description: 'test object',
        note: 'test note',
        amount: 1,
        createdAt: 4
    });
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: 'test object',
            note: 'test note',
            amount: 1,
            createdAt: 4
        }
    })
});

test('adding without values', () => {
    const action = addExpense({ });
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
});