import visibleExpenses from '../../selectors/expenses';
import moment from 'moment';

const expenses = [
    {
        description: 'rent',
        note: '',
        amount: 50000,
        createdAt: 200001
    },
    {
        description: 'bills',
        note: '',
        amount: 20000,
        createdAt: 10000
    },
    {
        description: 'others',
        note: '',
        amount: 5000,
        createdAt: 100000
    }
];

test('should filter', () => {
    const filteredExpenses = visibleExpenses(expenses, {
        text: 'e',
        sortBy: 'amount',
        startDate: moment(10000),
        endDate: moment(100000)
    });
    const result = [
        {
            description: 'rent',
            note: '',
            amount: 50000,
            createdAt: 200001
        },
        {
            description: 'others',
            note: '',
            amount: 5000,
            createdAt: 100000
        }
    ];;
    expect(filteredExpenses).toEqual(result);
});